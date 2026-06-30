function renderAboutTimeline() {
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
    const rowYears = getTimelineRowYearMarks(group.items, endYear);

    row.innerHTML = `
      <div class="timeline-label">${escapeHtml(group.label)}</div>

      <div class="timeline-body">
        <div class="timeline-row-years">
          ${rowYears.map(function (year) {
            const left = clampPercent(((year - startYear) / totalYears) * 100);
            const label = year === endYear ? "Now" : year;

            return `<span class="timeline-row-year-mark" style="left:${left}%;">${label}</span>`;
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

  if (firstItem) {
    setActiveTimelineItem(firstItem, "timelineSegment0_0");
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
        if (a.start !== b.start) {
          return a.start - b.start;
        }

        return getTimelineEndYear(a) - getTimelineEndYear(b);
      });

      return group;
    });
}

function getTimelineRowYearMarks(items, endYear) {
  const years = new Set();

  items.forEach(function (item) {
    years.add(item.start);

    if (item.end === "now") {
      years.add(endYear);
    } else {
      years.add(item.end);
    }
  });

  return Array.from(years).sort(function (a, b) {
    return a - b;
  });
}

function renderTimelineSegment(item, itemIndex, groupIndex, startYear, endYear, totalYears) {
  const category = getTimelineCategory(item.category);
  const itemEnd = getTimelineEndYear(item, endYear);
  const safeStart = Math.max(item.start, startYear);
  const safeEnd = Math.min(itemEnd, endYear);
  const left = clampPercent(((safeStart - startYear) / totalYears) * 100);
  const top = 10 + (itemIndex * 42);
  const segmentId = getTimelineSegmentId(groupIndex, itemIndex);

  let width = ((safeEnd - safeStart) / totalYears) * 100;

  if (item.start === itemEnd) {
    width = 8;
  }

  width = Math.max(width, 8);
  width = Math.min(width, 100 - left);

  return `
    <button type="button"
            id="${segmentId}"
            class="timeline-bar"
            style="left:${left}%; top:${top}px; width:${width}%; background:${category.color};"
            title="${escapeHtml(formatTimelinePeriod(item.start, item.end) + "｜" + item.title)}"
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

      setActiveTimelineItem(groups[groupIndex].items[itemIndex], button.id);
    });
  });
}

function setActiveTimelineItem(item, activeSegmentId) {
  const detailPanel = document.getElementById("timelineSingleDetail");

  if (!detailPanel) {
    return;
  }

  document.querySelectorAll(".timeline-bar").forEach(function (button) {
    button.classList.remove("is-active");
  });

  const activeButton = document.getElementById(activeSegmentId);

  if (activeButton) {
    activeButton.classList.add("is-active");
  }

  const category = getTimelineCategory(item.category);

  detailPanel.innerHTML = `
    <div class="timeline-feature-card" style="border-left-color:${category.color};">
      <div class="timeline-feature-content">
        <span class="timeline-feature-period">${escapeHtml(formatTimelinePeriod(item.start, item.end))}</span>
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

function getTimelineEndYear(item, fallbackEndYear) {
  if (item.end === "now") {
    return fallbackEndYear || aboutProfile.currentEndYear;
  }

  return item.end;
}

function formatTimelinePeriod(start, end) {
  if (start === end) {
    return String(start);
  }

  if (end === "now") {
    return start + " - Now";
  }

  return start + " - " + end;
}
