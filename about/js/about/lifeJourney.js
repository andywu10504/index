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

  renderLifeJourneySvg(svg, items);
  bindLifeJourneyPoints(items);
  setActiveLifeJourneyItem(items[0]);
}

function normalizeLifeJourneyItems(items) {
  return items
    .filter(function (item) {
      return item && typeof item.year === "number" && typeof item.score === "number";
    })
    .map(function (item, index) {
      return {
        id: "lifeJourneyPoint" + index,
        year: item.year,
        title: item.title || "",
        score: item.score,
        desc: item.desc || "",
        category: item.category || "",
        x: 0,
        y: 0
      };
    });
}

function renderLifeJourneySvg(svg, items) {
  const width = 1200;
  const height = 520;
  const padding = {
    top: 50,
    right: 60,
    bottom: 70,
    left: 70
  };

  const minYear = Math.min.apply(null, items.map(function (item) { return item.year; }));
  const maxYear = Math.max.apply(null, items.map(function (item) { return item.year; }));
  const minScore = -3;
  const maxScore = 3;

  items.forEach(function (item) {
    item.x = mapValue(item.year, minYear, maxYear, padding.left, width - padding.right);
    item.y = mapValue(item.score, maxScore, minScore, padding.top, height - padding.bottom);
  });

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

    ${renderLifeJourneyGrid(width, height, padding, minYear, maxYear, minScore, maxScore)}

    <path class="life-journey-area" d="${areaPath}"></path>
    <path class="life-journey-line" d="${path}"></path>

    ${items.map(function (item, index) {
      return renderLifeJourneyPoint(item, index);
    }).join("")}
  `;
}

function renderLifeJourneyGrid(width, height, padding, minYear, maxYear, minScore, maxScore) {
  const scoreMarks = [-3, -2, -1, 0, 1, 2, 3];
  const yearMarks = getLifeJourneyYearMarks(minYear, maxYear);
  const zeroY = mapValue(0, maxScore, minScore, padding.top, height - padding.bottom);

  const scoreLines = scoreMarks.map(function (score) {
    const y = mapValue(score, maxScore, minScore, padding.top, height - padding.bottom);
    const label = score > 0 ? "+" + score : String(score);

    return `
      <line class="life-journey-grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"></line>
      <text class="life-journey-score-label" x="${padding.left - 18}" y="${y + 5}" text-anchor="end">${label}</text>
    `;
  }).join("");

  const yearLabels = yearMarks.map(function (year) {
    const x = mapValue(year, minYear, maxYear, padding.left, width - padding.right);

    return `
      <line class="life-journey-year-line" x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}"></line>
      <text class="life-journey-year-label" x="${x}" y="${height - 30}" text-anchor="middle">${year}</text>
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
    <button class="life-journey-point-wrap" data-life-journey-index="${index}">
      <circle class="life-journey-point ${scoreClass}" cx="${item.x}" cy="${item.y}" r="8"></circle>
      <circle class="life-journey-point-hit" cx="${item.x}" cy="${item.y}" r="18"></circle>
    </button>
  `;
}

function bindLifeJourneyPoints(items) {
  const points = document.querySelectorAll(".life-journey-point-wrap");

  points.forEach(function (point) {
    point.addEventListener("click", function () {
      const index = Number(point.getAttribute("data-life-journey-index"));

      if (Number.isNaN(index) || !items[index]) {
        return;
      }

      setActiveLifeJourneyItem(items[index]);
    });
  });
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
        <span class="life-journey-year">${item.year}</span>
        <span class="life-journey-score ${badgeClass}">${scoreText}</span>
      </div>

      <h3>${escapeHtml(item.title)}</h3>
      ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : `<p class="text-muted mb-0">這段故事尚未補充說明。</p>`}
    </div>
  `;
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

function mapValue(value, sourceMin, sourceMax, targetMin, targetMax) {
  if (sourceMax === sourceMin) {
    return (targetMin + targetMax) / 2;
  }

  return targetMin + ((value - sourceMin) / (sourceMax - sourceMin)) * (targetMax - targetMin);
}
