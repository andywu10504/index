function renderLifeJourney() {
  const svg = document.getElementById("lifeJourneySvg");
  const card = document.getElementById("lifeJourneyCard");

  if (!svg || !card) {
    return;
  }

  if (!Array.isArray(aboutProfile.lifeJourney) || aboutProfile.lifeJourney.length === 0) {
    card.innerHTML = `<div class="life-journey-empty">尚未建立人生歷程資料</div>`;
    return;
  }

  const items = normalizeLifeJourneyItems(aboutProfile.lifeJourney);

  if (items.length === 0) {
    card.innerHTML = `<div class="life-journey-empty">人生歷程資料格式錯誤，請確認 date 與 score。</div>`;
    return;
  }

  renderLifeJourneySvg(svg, items);
  bindLifeJourneyPoints(items);
  activateLifeJourneyPointByIndex(0, items);
}

function normalizeLifeJourneyItems(items) {
  return items
    .filter(function (item) {
      return item && item.date && typeof item.score === "number";
    })
    .map(function (item, index) {
      return {
        id: "lifeJourneyPoint" + index,
        date: String(item.date),
        year: getLifeJourneyYear(item),
        title: item.title || "",
        score: item.score,
        desc: item.desc || "",
        category: item.category || "",
        value: getLifeJourneyDateValue(item),
        x: 0,
        y: 0
      };
    })
    .sort(function (a, b) {
      if (a.value !== b.value) {
        return a.value - b.value;
      }

      return a.score - b.score;
    });
}

function renderLifeJourneySvg(svg, items) {
  const width = 1200;
  const height = 560;
  const padding = {
    top: 60,
    right: 80,
    bottom: 80,
    left: 110
  };

  const minValue = Math.min.apply(null, items.map(function (item) { return item.value; }));
  const maxValue = Math.max.apply(null, items.map(function (item) { return item.value; }));
  const minYear = Math.floor(minValue);
  const maxYear = Math.ceil(maxValue);
  const minScore = -3;
  const maxScore = 3;

  items.forEach(function (item) {
    item.x = mapValue(item.value, minValue, maxValue, padding.left, width - padding.right);
    item.y = mapValue(item.score, maxScore, minScore, padding.top, height - padding.bottom);
  });

  applyClosePointOffset(items, width, padding);

  const zeroY = mapValue(0, maxScore, minScore, padding.top, height - padding.bottom);
  const path = buildSmoothPath(items);
  const areaPath = buildAreaPath(items, zeroY);

  svg.innerHTML = `
    <defs>
      <linearGradient id="lifeJourneyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0d6efd"></stop>
        <stop offset="45%" stop-color="#6f42c1"></stop>
        <stop offset="100%" stop-color="#20c997"></stop>
      </linearGradient>

      <linearGradient id="lifeJourneyAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(13,110,253,.26)"></stop>
        <stop offset="100%" stop-color="rgba(13,110,253,0)"></stop>
      </linearGradient>
    </defs>

    ${renderLifeJourneyGrid(width, height, padding, minYear, maxYear, minScore, maxScore, minValue, maxValue)}

    <path class="life-journey-area" d="${areaPath}"></path>
    <path class="life-journey-line" d="${path}"></path>

    ${items.map(function (item, index) {
      return renderLifeJourneyPoint(item, index);
    }).join("")}
  `;
}

function renderLifeJourneyGrid(width, height, padding, minYear, maxYear, minScore, maxScore, minValue, maxValue) {
  const scoreMarks = [-3, -2, -1, 0, 1, 2, 3];
  const yearMarks = getLifeJourneyYearMarks(minYear, maxYear);
  const zeroY = mapValue(0, maxScore, minScore, padding.top, height - padding.bottom);

  const scoreLines = scoreMarks.map(function (score) {
    const y = mapValue(score, maxScore, minScore, padding.top, height - padding.bottom);
    const label = score > 0 ? "+" + score : String(score);

    return `
      <line class="life-journey-grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"></line>
      <text class="life-journey-score-label" x="${padding.left - 24}" y="${y + 5}" text-anchor="end">${label}</text>
    `;
  }).join("");

  const yearLabels = yearMarks.map(function (year) {
    const x = mapValue(year, minValue, maxValue, padding.left, width - padding.right);

    return `
      <line class="life-journey-year-line" x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}"></line>
      <text class="life-journey-year-label" x="${x}" y="${height - 34}" text-anchor="middle">${year}</text>
    `;
  }).join("");

  return `
    <rect class="life-journey-bg" x="0" y="0" width="${width}" height="${height}" rx="28"></rect>
    ${scoreLines}
    ${yearLabels}
    <line class="life-journey-zero-line" x1="${padding.left}" y1="${zeroY}" x2="${width - padding.right}" y2="${zeroY}"></line>
  `;
}

function renderLifeJourneyPoint(item, index) {
  const scoreClass = item.score >= 0 ? "is-positive" : "is-negative";

  return `
    <g class="life-journey-point-wrap" data-life-journey-index="${index}" tabindex="0">
      <circle class="life-journey-point ${scoreClass}" cx="${item.x}" cy="${item.y}" r="8"></circle>
      <circle class="life-journey-point-hit" cx="${item.x}" cy="${item.y}" r="24"></circle>
    </g>
  `;
}

function bindLifeJourneyPoints(items) {
  const points = document.querySelectorAll(".life-journey-point-wrap");

  points.forEach(function (point) {
    point.addEventListener("click", function () {
      const index = Number(point.getAttribute("data-life-journey-index"));
      activateLifeJourneyPointByIndex(index, items);
    });

    point.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const index = Number(point.getAttribute("data-life-journey-index"));
        activateLifeJourneyPointByIndex(index, items);
      }
    });
  });
}

function activateLifeJourneyPointByIndex(index, items) {
  if (Number.isNaN(index) || !items[index]) {
    return;
  }

  document.querySelectorAll(".life-journey-point-wrap").forEach(function (element) {
    element.classList.remove("is-active");
  });

  const point = document.querySelector(`.life-journey-point-wrap[data-life-journey-index="${index}"]`);

  if (point) {
    point.classList.add("is-active");
  }

  setActiveLifeJourneyItem(items[index]);
}

function setActiveLifeJourneyItem(item) {
  const card = document.getElementById("lifeJourneyCard");

  if (!card) {
    return;
  }

  const scoreText = item.score > 0 ? "+" + item.score : String(item.score);
  const badgeClass = item.score >= 0 ? "is-positive" : "is-negative";

  card.innerHTML = `
    <div class="life-journey-card-inner">
      <div class="life-journey-card-head">
        <span class="life-journey-year">${escapeHtml(formatLifeJourneyDate(item))}</span>
        <span class="life-journey-score ${badgeClass}">${scoreText}</span>
      </div>

      <h3>${escapeHtml(item.title)}</h3>
      ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : `<p class="text-muted mb-0">這段故事尚未補充說明。</p>`}
    </div>
  `;
}

function applyClosePointOffset(items, width, padding) {
  const minGap = 26;
  const step = 16;
  const leftLimit = padding.left + 14;
  const rightLimit = width - padding.right - 14;

  for (let i = 0; i < items.length; i++) {
    const cluster = [items[i]];

    for (let j = i + 1; j < items.length; j++) {
      const previous = cluster[cluster.length - 1];

      if (Math.abs(items[j].x - previous.x) <= minGap) {
        cluster.push(items[j]);
      } else {
        break;
      }
    }

    if (cluster.length > 1) {
      const centerX = cluster.reduce(function (sum, item) {
        return sum + item.x;
      }, 0) / cluster.length;

      const totalWidth = (cluster.length - 1) * step;
      let startX = centerX - (totalWidth / 2);

      if (startX < leftLimit) {
        startX = leftLimit;
      }

      if (startX + totalWidth > rightLimit) {
        startX = rightLimit - totalWidth;
      }

      cluster.forEach(function (item, index) {
        item.x = clampNumber(startX + (index * step), leftLimit, rightLimit);
      });
    }

    i += cluster.length - 1;
  }
}

function buildSmoothPath(items) {
  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return `M ${items[0].x} ${items[0].y}`;
  }

  let path = `M ${items[0].x} ${items[0].y}`;

  for (let i = 0; i < items.length - 1; i++) {
    const current = items[i];
    const next = items[i + 1];
    const controlX = (current.x + next.x) / 2;

    path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}

function buildAreaPath(items, zeroY) {
  if (items.length === 0) {
    return "";
  }

  const linePath = buildSmoothPath(items);
  const first = items[0];
  const last = items[items.length - 1];

  return `${linePath} L ${last.x} ${zeroY} L ${first.x} ${zeroY} Z`;
}

function getLifeJourneyYearMarks(minYear, maxYear) {
  const marks = [];
  const step = 5;
  const first = Math.ceil(minYear / step) * step;

  marks.push(minYear);

  for (let year = first; year <= maxYear; year += step) {
    if (year !== minYear && year !== maxYear) {
      marks.push(year);
    }
  }

  marks.push(maxYear);

  return Array.from(new Set(marks)).sort(function (a, b) {
    return a - b;
  });
}

function getLifeJourneyYear(item) {
  return Number(String(item.date).substring(0, 4));
}

function getLifeJourneyDateValue(item) {
  return dateTextToYearValue(item.date);
}

function dateTextToYearValue(dateText) {
  const parts = String(dateText).replaceAll("-", "/").split("/");
  const year = Number(parts[0]);
  const month = parts.length >= 2 ? Number(parts[1]) : 1;
  const day = parts.length >= 3 ? Number(parts[2]) : 1;

  if (Number.isNaN(year)) {
    return 0;
  }

  const safeMonth = Number.isNaN(month) ? 1 : month;
  const safeDay = Number.isNaN(day) ? 1 : day;

  const startOfYear = new Date(year, 0, 1);
  const currentDate = new Date(year, safeMonth - 1, safeDay);
  const nextYear = new Date(year + 1, 0, 1);

  return year + ((currentDate - startOfYear) / (nextYear - startOfYear));
}

function formatLifeJourneyDate(item) {
  return item.date;
}

function mapValue(value, sourceMin, sourceMax, targetMin, targetMax) {
  if (sourceMax === sourceMin) {
    return (targetMin + targetMax) / 2;
  }

  return targetMin + ((value - sourceMin) / (sourceMax - sourceMin)) * (targetMax - targetMin);
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
