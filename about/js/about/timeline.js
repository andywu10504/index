function renderAboutTimeline() {
  const currentYear = aboutProfile.currentEndYear;
  const startYear = aboutProfile.birthYear;
  const endYear = currentYear;
  const totalYears = endYear - startYear;function renderAboutTimeline() {
  const currentYear = aboutProfile.currentEndYear;
  const startYear = aboutProfile.birthYear;
  const endYear = currentYear;
  const totalYears = endYear - startYear;

  renderTimelineLegend();
  renderTimelineYears();
  renderTimelineRows(startYear, endYear, totalYears);
}

function renderTimelineLegend() {
  const container = document.getElementById("timelineLegend");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.timelineCategories.forEach(function (category) {
    const item = document.createElement("span");
    item.innerHTML = `<i style="background:${category.color}"></i>${escapeHtml(category.label)}`;
    container.appendChild(item);
  });
}

function renderTimelineYears() {
  const container = document.getElementById("timelineYears");

  if (container) {
    container.innerHTML = "";
  }
}

function renderTimelineRows(startYear, endYear, totalYears) {
  const container = document.getElementById("timelineRows");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const groups = groupTimelineItems(aboutProfile.timeline);

  groups.forEach(function (group, groupIndex) {
    const row = document.createElement("div");
    row.className = "timeline-row story-animate";

    const trackHeight = getTimelineTrackHeight(group.items.length);
    const rowYears = getTimelineRowYearMarks(group.items, startYear, endYear, totalYears);

    row.innerHTML = `
      <div class="timeline-label">${escapeHtml(group.label)}</div>

      <div class="timeline-body">
        <div class="timeline-row-years">
          ${rowYears.map(function (mark) {
            return `<span class="timeline-row-year-mark" style="left:${mark.left}%;">${mark.label}</span>`;
          }).join("")}
        </div>

        <div class="timeline-track" style="height:${trackHeight}px;">
          ${group.items.map(function (item, itemIndex) {
            return renderTimelineSegment(item, itemIndex, groupIndex, startYear, endYear, totalYears);
          }).join("")}
        </div>

        <div class="timeline-row-detail" id="timelineRowDetail${groupIndex}"></div>
      </div>
    `;

    container.appendChild(row);
  });

  bindTimelineSegmentClick();
}

function groupTimelineItems(timelineItems) {
  const map = new Map();

  timelineItems.forEach(function (item) {
    const label = item.groupLabel || item.title;
    const rowOrder = typeof item.rowOrder === "number" ? item.rowOrder : 999;

    if (!map.has(label)) {
      map.set(label, {
        label: label,
        rowOrder: rowOrder,
        items: []
      });
    }

    map.get(label).items.push(item);
  });

  return Array.from(map.values())
    .sort(function (a, b) {
      if (a.rowOrder !== b.rowOrder) {
        return a.rowOrder - b.rowOrder;
      }

      return a.label.localeCompare(b.label, "zh-Hant");
    })
    .map(function (group) {
      group.items.sort(function (a, b) {
        const aStart = getTimelineStartValue(a);
        const bStart = getTimelineStartValue(b);

        if (aStart !== bStart) {
          return aStart - bStart;
        }

        return getTimelineEndValue(a) - getTimelineEndValue(b);
      });

      return group;
    });
}

function getTimelineRowYearMarks(items, startYear, endYear, totalYears) {
  const marks = [];

  items.forEach(function (item) {
    addTimelineYearMark(marks, getTimelineStartYear(item), startYear, totalYears);

    if (item.end === "now") {
      addTimelineYearMark(marks, endYear, startYear, totalYears);
    } else {
      addTimelineYearMark(marks, getTimelineEndYear(item), startYear, totalYears);
    }
  });

  return marks
    .sort(function (a, b) {
      return a.year - b.year;
    })
    .filter(function (mark, index, array) {
      if (index === 0) {
        return true;
      }

      const previous = array[index - 1];

      if (mark.year === previous.year) {
        return false;
      }

      return Math.abs(mark.left - previous.left) >= 7;
    })
    .map(function (mark) {
      return {
        year: mark.year,
        left: mark.left,
        label: mark.year === endYear ? "Now" : String(mark.year)
      };
    });
}

function addTimelineYearMark(marks, year, startYear, totalYears) {
  if (!year || Number.isNaN(year)) {
    return;
  }

  marks.push({
    year: year,
    left: clampPercent(((year - startYear) / totalYears) * 100)
  });
}

function renderTimelineSegment(item, itemIndex, groupIndex, startYear, endYear, totalYears) {
  const category = getTimelineCategory(item.category);
  const itemStartValue = getTimelineStartValue(item);
  const itemEndValue = getTimelineEndValue(item, endYear);
  const safeStart = Math.max(itemStartValue, startYear);
  const safeEnd = Math.min(itemEndValue, endYear);
  const left = clampPercent(((safeStart - startYear) / totalYears) * 100);
  const top = 10 + (itemIndex * 42);
  const segmentId = getTimelineSegmentId(groupIndex, itemIndex);

  let width = ((safeEnd - safeStart) / totalYears) * 100;

  if (width <= 0) {
    width = 8;
  }

  width = Math.max(width, 8);
  width = Math.min(width, 100 - left);

  return `
    <button type="button"
            id="${segmentId}"
            class="timeline-bar"
            style="left:${left}%; top:${top}px; width:${width}%; background:${category.color};"
            title="${escapeHtml(formatTimelinePeriod(item) + "｜" + item.title)}"
            data-group-index="${groupIndex}"
            data-item-index="${itemIndex}">
      ${escapeHtml(item.title)}
    </button>
  `;
}

function bindTimelineSegmentClick() {
  const buttons = document.querySelectorAll(".timeline-bar");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const groupIndex = Number(button.getAttribute("data-group-index"));
      const itemIndex = Number(button.getAttribute("data-item-index"));
      const groups = groupTimelineItems(aboutProfile.timeline);

      if (!groups[groupIndex] || !groups[groupIndex].items[itemIndex]) {
        return;
      }

      setActiveTimelineItem(groups[groupIndex].items[itemIndex], button.id, groupIndex);
    });
  });
}

function setActiveTimelineItem(item, activeSegmentId, groupIndex) {
  document.querySelectorAll(".timeline-bar").forEach(function (button) {
    button.classList.remove("is-active");
  });

  const activeButton = document.getElementById(activeSegmentId);

  if (activeButton) {
    activeButton.classList.add("is-active");
  }

  renderTimelineCard(item, groupIndex);
  scrollToTimelineRowCard(groupIndex);
}

function renderTimelineCard(item, groupIndex) {
  const detailPanel = document.getElementById("timelineRowDetail" + groupIndex);

  if (!detailPanel) {
    return;
  }

  document.querySelectorAll(".timeline-row-detail").forEach(function (panel) {
    if (panel.id !== detailPanel.id) {
      panel.innerHTML = "";
    }
  });

  const category = getTimelineCategory(item.category);

  detailPanel.innerHTML = `
    <div class="timeline-feature-card" style="border-left-color:${category.color};">
      <div class="timeline-feature-content">
        <span class="timeline-feature-period">${escapeHtml(formatTimelinePeriod(item))}</span>
        <h3>${escapeHtml(item.title)}</h3>
        ${renderTimelineDescription(item)}
      </div>
    </div>
  `;
}

function scrollToTimelineRowCard(groupIndex) {
  const detailPanel = document.getElementById("timelineRowDetail" + groupIndex);

  if (!detailPanel) {
    return;
  }

  detailPanel.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

function renderTimelineDescription(item) {
  const descHtml = item.desc ? `<p>${escapeHtml(item.desc)}</p>` : "";
  const linkHtml = renderTimelineMainLink(item);
  const thesisHtml = renderTimelineThesis(item);
  const highlightsHtml = renderTimelineHighlights(item);
  const imagesHtml = renderTimelineImages(item);

  return `
    ${descHtml}
    ${linkHtml}
    ${thesisHtml}
    ${highlightsHtml}
    ${imagesHtml}
  `;
}

function renderTimelineMainLink(item) {
  if (!item.linkTitle || !item.linkUrl) {
    return "";
  }

  return `
    <p>
      <a class="timeline-feature-link" href="${item.linkUrl}" target="_blank" rel="noopener">
        ${escapeHtml(item.linkTitle)}
        <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
      </a>
    </p>
  `;
}

function renderTimelineThesis(item) {
  if (!item.thesisTitle || !item.thesisUrl) {
    return "";
  }

  return `
    <p>
      論文題目：
      <a class="timeline-feature-link" href="${item.thesisUrl}" target="_blank" rel="noopener">
        ${escapeHtml(item.thesisTitle)}
        <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
      </a>
    </p>
  `;
}

function renderTimelineHighlights(item) {
  if (!Array.isArray(item.highlights) || item.highlights.length === 0) {
    return "";
  }

  return `
    <ul class="timeline-highlights">
      ${item.highlights.map(function (text) {
        return `<li>${escapeHtml(text)}</li>`;
      }).join("")}
    </ul>
  `;
}

function renderTimelineImages(item) {
  if (!Array.isArray(item.images) || item.images.length === 0) {
    return "";
  }

  return `
    <div class="timeline-image-grid">
      ${item.images.map(function (image) {
        return `
          <figure class="timeline-image-card">
            <img src="${image.src}" alt="${escapeHtml(image.alt || item.title)}">
            ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ""}
          </figure>
        `;
      }).join("")}
    </div>
  `;
}

function getTimelineSegmentId(groupIndex, itemIndex) {
  return "timelineSegment" + groupIndex + "_" + itemIndex;
}

function getTimelineTrackHeight(itemCount) {
  return Math.max(52, 20 + (itemCount * 42));
}

function getTimelineCategory(key) {
  return aboutProfile.timelineCategories.find(function (category) {
    return category.key === key;
  }) || aboutProfile.timelineCategories[0];
}

function getTimelineStartYear(item) {
  if (item.startDate) {
    return Number(item.startDate.substring(0, 4));
  }

  return item.start;
}

function getTimelineEndYear(item) {
  if (item.end === "now") {
    return aboutProfile.currentEndYear;
  }

  if (item.endDate) {
    return Number(item.endDate.substring(0, 4));
  }

  return item.end;
}

function getTimelineStartValue(item) {
  if (item.startDate) {
    return dateToYearValue(item.startDate);
  }

  return item.start;
}

function getTimelineEndValue(item, fallbackEndYear) {
  if (item.end === "now") {
    return fallbackEndYear || aboutProfile.currentEndYear;
  }

  if (item.endDate) {
    return dateToYearValue(item.endDate);
  }

  return item.end;
}

function dateToYearValue(dateText) {
  const normalized = String(dateText).replaceAll("-", "/");
  const parts = normalized.split("/");

  if (parts.length < 3) {
    return Number(parts[0]);
  }

  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return year;
  }

  const startOfYear = new Date(year, 0, 1);
  const currentDate = new Date(year, month - 1, day);
  const nextYear = new Date(year + 1, 0, 1);
  const progress = (currentDate - startOfYear) / (nextYear - startOfYear);

  return year + progress;
}

function formatTimelinePeriod(item) {
  const startText = item.startDate || String(item.start);
  const endText = item.end === "now" ? "Now" : (item.endDate || String(item.end));

  if (startText === endText) {
    return startText;
  }

  return startText + " - " + endText;
}

  renderTimelineLegend();
  renderTimelineYears();
  renderTimelineRows(startYear, endYear, totalYears);
}

function renderTimelineLegend() {
  const container = document.getElementById("timelineLegend");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.timelineCategories.forEach(function (category) {
    const item = document.createElement("span");
    item.innerHTML = `<i style="background:${category.color}"></i>${escapeHtml(category.label)}`;
    container.appendChild(item);
  });
}

function renderTimelineYears() {
  const container = document.getElementById("timelineYears");

  if (container) {
    container.innerHTML = "";
  }
}

function renderTimelineRows(startYear, endYear, totalYears) {
  const container = document.getElementById("timelineRows");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const groups = groupTimelineItems(aboutProfile.timeline);

  groups.forEach(function (group, groupIndex) {
    const row = document.createElement("div");
    row.className = "timeline-row story-animate";

    const trackHeight = getTimelineTrackHeight(group.items.length);
    const rowYears = getTimelineRowYearMarks(group.items, startYear, endYear, totalYears);

    row.innerHTML = `
      <div class="timeline-label">${escapeHtml(group.label)}</div>

      <div class="timeline-body">
        <div class="timeline-row-years">
          ${rowYears.map(function (mark) {
            return `<span class="timeline-row-year-mark" style="left:${mark.left}%;">${mark.label}</span>`;
          }).join("")}
        </div>

        <div class="timeline-track" style="height:${trackHeight}px;">
          ${group.items.map(function (item, itemIndex) {
            return renderTimelineSegment(item, itemIndex, groupIndex, startYear, endYear, totalYears);
          }).join("")}
        </div>
      </div>
    `;

    container.appendChild(row);
  });

  const detailPanel = document.createElement("div");
  detailPanel.className = "timeline-single-detail story-animate";
  detailPanel.id = "timelineSingleDetail";
  container.appendChild(detailPanel);

  bindTimelineSegmentClick();

  const firstItem = groups.length > 0 && groups[0].items.length > 0 ? groups[0].items[0] : null;

  if (firstItem) {
    renderTimelineCard(firstItem);
  }
}

function groupTimelineItems(timelineItems) {
  const map = new Map();

  timelineItems.forEach(function (item) {
    const label = item.groupLabel || item.title;
    const rowOrder = typeof item.rowOrder === "number" ? item.rowOrder : 999;

    if (!map.has(label)) {
      map.set(label, {
        label: label,
        rowOrder: rowOrder,
        items: []
      });
    }

    map.get(label).items.push(item);
  });

  return Array.from(map.values())
    .sort(function (a, b) {
      if (a.rowOrder !== b.rowOrder) {
        return a.rowOrder - b.rowOrder;
      }

      return a.label.localeCompare(b.label, "zh-Hant");
    })
    .map(function (group) {
      group.items.sort(function (a, b) {
        const aStart = getTimelineStartValue(a);
        const bStart = getTimelineStartValue(b);

        if (aStart !== bStart) {
          return aStart - bStart;
        }

        return getTimelineEndValue(a) - getTimelineEndValue(b);
      });

      return group;
    });
}

function getTimelineRowYearMarks(items, startYear, endYear, totalYears) {
  const marks = [];

  items.forEach(function (item) {
    addTimelineYearMark(marks, getTimelineStartYear(item), startYear, totalYears);

    if (item.end === "now") {
      addTimelineYearMark(marks, endYear, startYear, totalYears);
    } else {
      addTimelineYearMark(marks, getTimelineEndYear(item), startYear, totalYears);
    }
  });

  return marks
    .sort(function (a, b) {
      return a.year - b.year;
    })
    .filter(function (mark, index, array) {
      if (index === 0) {
        return true;
      }

      const previous = array[index - 1];

      if (mark.year === previous.year) {
        return false;
      }

      return Math.abs(mark.left - previous.left) >= 7;
    })
    .map(function (mark) {
      return {
        year: mark.year,
        left: mark.left,
        label: mark.year === endYear ? "Now" : String(mark.year)
      };
    });
}

function addTimelineYearMark(marks, year, startYear, totalYears) {
  if (!year || Number.isNaN(year)) {
    return;
  }

  const left = clampPercent(((year - startYear) / totalYears) * 100);

  marks.push({
    year: year,
    left: left
  });
}

function renderTimelineSegment(item, itemIndex, groupIndex, startYear, endYear, totalYears) {
  const category = getTimelineCategory(item.category);
  const itemStartValue = getTimelineStartValue(item);
  const itemEndValue = getTimelineEndValue(item, endYear);
  const safeStart = Math.max(itemStartValue, startYear);
  const safeEnd = Math.min(itemEndValue, endYear);
  const left = clampPercent(((safeStart - startYear) / totalYears) * 100);
  const top = 10 + (itemIndex * 42);
  const segmentId = getTimelineSegmentId(groupIndex, itemIndex);

  let width = ((safeEnd - safeStart) / totalYears) * 100;

  if (width <= 0) {
    width = 8;
  }

  width = Math.max(width, 8);
  width = Math.min(width, 100 - left);

  return `
    <button type="button"
            id="${segmentId}"
            class="timeline-bar"
            style="left:${left}%; top:${top}px; width:${width}%; background:${category.color};"
            title="${escapeHtml(formatTimelinePeriod(item)) + "｜" + escapeHtml(item.title)}"
            data-group-index="${groupIndex}"
            data-item-index="${itemIndex}">
      ${escapeHtml(item.title)}
    </button>
  `;
}

function bindTimelineSegmentClick() {
  const buttons = document.querySelectorAll(".timeline-bar");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const groupIndex = Number(button.getAttribute("data-group-index"));
      const itemIndex = Number(button.getAttribute("data-item-index"));
      const groups = groupTimelineItems(aboutProfile.timeline);

      if (!groups[groupIndex] || !groups[groupIndex].items[itemIndex]) {
        return;
      }

      setActiveTimelineItem(groups[groupIndex].items[itemIndex], button.id, true);
    });
  });
}

function setActiveTimelineItem(item, activeSegmentId, shouldScroll) {
  document.querySelectorAll(".timeline-bar").forEach(function (button) {
    button.classList.remove("is-active");
  });

  const activeButton = document.getElementById(activeSegmentId);

  if (activeButton) {
    activeButton.classList.add("is-active");
  }

  renderTimelineCard(item);

  if (shouldScroll) {
    scrollToTimelineCard();
  }
}

function scrollToTimelineCard() {
  const detailPanel = document.getElementById("timelineSingleDetail");

  if (!detailPanel) {
    return;
  }

  detailPanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function renderTimelineCard(item) {
  const detailPanel = document.getElementById("timelineSingleDetail");

  if (!detailPanel) {
    return;
  }

  const category = getTimelineCategory(item.category);

  detailPanel.innerHTML = `
    <div class="timeline-feature-card" style="border-left-color:${category.color};">
      <div class="timeline-feature-content">
        <span class="timeline-feature-period">${escapeHtml(formatTimelinePeriod(item))}</span>
        <h3>${escapeHtml(item.title)}</h3>
        ${renderTimelineDescription(item)}
      </div>
    </div>
  `;
}

function renderTimelineDescription(item) {
  const descHtml = item.desc ? `<p>${escapeHtml(item.desc)}</p>` : "";
  const linkHtml = renderTimelineMainLink(item);
  const thesisHtml = renderTimelineThesis(item);
  const highlightsHtml = renderTimelineHighlights(item);
  const imagesHtml = renderTimelineImages(item);

  return `
    ${descHtml}
    ${linkHtml}
    ${thesisHtml}
    ${highlightsHtml}
    ${imagesHtml}
  `;
}

function renderTimelineMainLink(item) {
  if (!item.linkTitle || !item.linkUrl) {
    return "";
  }

  return `
    <p>
      <a class="timeline-feature-link" href="${item.linkUrl}" target="_blank" rel="noopener">
        ${escapeHtml(item.linkTitle)}
        <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
      </a>
    </p>
  `;
}

function renderTimelineThesis(item) {
  if (!item.thesisTitle || !item.thesisUrl) {
    return "";
  }

  return `
    <p>
      論文題目：
      <a class="timeline-feature-link" href="${item.thesisUrl}" target="_blank" rel="noopener">
        ${escapeHtml(item.thesisTitle)}
        <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
      </a>
    </p>
  `;
}

function renderTimelineHighlights(item) {
  if (!Array.isArray(item.highlights) || item.highlights.length === 0) {
    return "";
  }

  return `
    <ul class="timeline-highlights">
      ${item.highlights.map(function (text) {
        return `<li>${escapeHtml(text)}</li>`;
      }).join("")}
    </ul>
  `;
}

function renderTimelineImages(item) {
  if (!Array.isArray(item.images) || item.images.length === 0) {
    return "";
  }

  return `
    <div class="timeline-image-grid">
      ${item.images.map(function (image) {
        return `
          <figure class="timeline-image-card">
            <img src="${image.src}" alt="${escapeHtml(image.alt || item.title)}">
            ${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ""}
          </figure>
        `;
      }).join("")}
    </div>
  `;
}

function getTimelineSegmentId(groupIndex, itemIndex) {
  return "timelineSegment" + groupIndex + "_" + itemIndex;
}

function getTimelineTrackHeight(itemCount) {
  return Math.max(52, 20 + (itemCount * 42));
}

function getTimelineCategory(key) {
  return aboutProfile.timelineCategories.find(function (category) {
    return category.key === key;
  }) || aboutProfile.timelineCategories[0];
}

function getTimelineStartYear(item) {
  if (item.startDate) {
    return Number(item.startDate.substring(0, 4));
  }

  return item.start;
}

function getTimelineEndYear(item) {
  if (item.end === "now") {
    return aboutProfile.currentEndYear;
  }

  if (item.endDate) {
    return Number(item.endDate.substring(0, 4));
  }

  return item.end;
}

function getTimelineStartValue(item) {
  if (item.startDate) {
    return dateToYearValue(item.startDate);
  }

  return item.start;
}

function getTimelineEndValue(item, fallbackEndYear) {
  if (item.end === "now") {
    return fallbackEndYear || aboutProfile.currentEndYear;
  }

  if (item.endDate) {
    return dateToYearValue(item.endDate);
  }

  return item.end;
}

function dateToYearValue(dateText) {
  const normalized = String(dateText).replaceAll("-", "/");
  const parts = normalized.split("/");

  if (parts.length < 3) {
    return Number(parts[0]);
  }

  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return year;
  }

  const startOfYear = new Date(year, 0, 1);
  const currentDate = new Date(year, month - 1, day);
  const nextYear = new Date(year + 1, 0, 1);
  const progress = (currentDate - startOfYear) / (nextYear - startOfYear);

  return year + progress;
}

function formatTimelinePeriod(item) {
  const startText = item.startDate || String(item.start);
  const endText = item.end === "now" ? "Now" : (item.endDate || String(item.end));

  if (startText === endText) {
    return startText;
  }

  return startText + " - " + endText;
}
