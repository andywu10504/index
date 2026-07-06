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
        date: item.date || "",
        raw: item
      };
    })
    .sort(function (a, b) {
      if (a.year !== b.year) {
        return a.year - b.year;
      }

      return a.score - b.score;
    });
}

function renderLifeJourneySvg(svg, items) {
  const config = getLifeJourneyChartConfig(items);
  const points = items.map(function (item, index) {
    return getLifeJourneyPoint(item, index, items, config);
  });

  svg.innerHTML = `
    ${renderLifeJourneyBackground(config)}
    ${renderLifeJourneyAxes(config)}
    ${renderLifeJourneyLine(points)}
    ${points.map(function (point) {
      return renderLifeJourneyPoint(point);
    }).join("")}
  `;
}

function getLifeJourneyChartConfig(items) {
  const years = items.map(function (item) {
    return item.year;
  });

  return {
    width: 1200,
    height: 520,
    paddingLeft: 72,
    paddingRight: 56,
    paddingTop: 54,
    paddingBottom: 64,
    minYear: Math.min.apply(null, years),
    maxYear: Math.max.apply(null, years),
    minScore: -3,
    maxScore: 3
  };
}

function getLifeJourneyPoint(item, index, items, config) {
  const sameYearItems = items.filter(function (x) {
    return x.year === item.year;
  });

  const sameYearIndex = sameYearItems.findIndex(function (x) {
    return x.id === item.id;
  });

  const sameYearOffset = sameYearItems.length > 1
    ? (sameYearIndex - ((sameYearItems.length - 1) / 2)) * 14
    : 0;

  return {
    item: item,
    x: getLifeJourneyX(item.year, config) + sameYearOffset,
    y: getLifeJourneyY(item.score, config)
  };
}

function getLifeJourneyX(year, config) {
  const usableWidth = config.width - config.paddingLeft - config.paddingRight;
  const range = config.maxYear - config.minYear;

  if (range <= 0) {
    return config.paddingLeft;
  }

  return config.paddingLeft + ((year - config.minYear) / range) * usableWidth;
}

function getLifeJourneyY(score, config) {
  const usableHeight = config.height - config.paddingTop - config.paddingBottom;
  const range = config.maxScore - config.minScore;
  const value = (score - config.minScore) / range;

  return config.height - config.paddingBottom - (value * usableHeight);
}

function renderLifeJourneyBackground(config) {
  const zeroY = getLifeJourneyY(0, config);

  return `
    <rect class="life-journey-area-positive"
          x="${config.paddingLeft}"
          y="${config.paddingTop}"
          width="${config.width - config.paddingLeft - config.paddingRight}"
          height="${zeroY - config.paddingTop}"></rect>

    <rect class="life-journey-area-negative"
          x="${config.paddingLeft}"
          y="${zeroY}"
          width="${config.width - config.paddingLeft - config.paddingRight}"
          height="${config.height - config.paddingBottom - zeroY}"></rect>
  `;
}

function renderLifeJourneyAxes(config) {
  const rows = [-3, -2, -1, 0, 1, 2, 3];
  const yearMarks = getLifeJourneyYearMarks(config.minYear, config.maxYear);

  return `
    ${rows.map(function (score) {
      const y = getLifeJourneyY(score, config);
      const lineClass = score === 0 ? "life-journey-zero-line" : "life-journey-grid-line";

      return `
        <line class="${lineClass}"
              x1="${config.paddingLeft}"
              y1="${y}"
              x2="${config.width - config.paddingRight}"
              y2="${y}"></line>

        <text class="life-journey-score-label"
              x="${config.paddingLeft - 24}"
              y="${y + 4}"
              text-anchor="end">${score}</text>
      `;
    }).join("")}

    ${yearMarks.map(function (year) {
      const x = getLifeJourneyX(year, config);

      return `
        <text class="life-journey-year-label"
              x="${x}"
              y="${config.height - 26}"
              text-anchor="middle">${year}</text>
      `;
    }).join("")}
  `;
}

function getLifeJourneyYearMarks(minYear, maxYear) {
  const marks = [];
  const start = Math.ceil(minYear / 5) * 5;

  marks.push(minYear);

  for (let year = start; year <= maxYear; year += 5) {
    if (year !== minYear && year !== maxYear) {
      marks.push(year);
    }
  }

  marks.push(maxYear);

  return Array.from(new Set(marks)).sort(function (a, b) {
    return a - b;
  });
}

function renderLifeJourneyLine(points) {
  if (points.length === 0) {
    return "";
  }

  const path = points.map(function (point, index) {
    return (index === 0 ? "M" : "L") + point.x + " " + point.y;
  }).join(" ");

  return `<path class="life-journey-line" d="${path}"></path>`;
}

function renderLifeJourneyPoint(point) {
  const color = getLifeJourneyScoreColor(point.item.score);
  const labelY = point.item.score >= 0 ? point.y - 18 : point.y + 30;

  return `
    <g class="life-journey-point-group">
      <circle id="${point.item.id}"
              class="life-journey-point"
              cx="${point.x}"
              cy="${point.y}"
              r="9"
              fill="${color}"
              data-life-journey-id="${point.item.id}"></circle>

      <text class="life-journey-point-label"
            x="${point.x}"
            y="${labelY}"
            text-anchor="middle">${escapeHtml(getLifeJourneyShortTitle(point.item.title))}</text>
    </g>
  `;
}

function getLifeJourneyShortTitle(title) {
  if (!title) {
    return "";
  }

  if (title.length <= 8) {
    return title;
  }

  return title.substring(0, 8) + "…";
}

function bindLifeJourneyPoints(items) {
  const points = document.querySelectorAll(".life-journey-point");

  points.forEach(function (point) {
    point.addEventListener("click", function () {
      const id = point.getAttribute("data-life-journey-id");
      const item = items.find(function (x) {
        return x.id === id;
      });

      if (!item) {
        return;
      }

      setActiveLifeJourneyItem(item);
    });
  });
}

function setActiveLifeJourneyItem(item) {
  document.querySelectorAll(".life-journey-point").forEach(function (point) {
    point.classList.remove("is-active");
  });

  const activePoint = document.getElementById(item.id);

  if (activePoint) {
    activePoint.classList.add("is-active");
  }

  renderLifeJourneyCard(item);
}

function renderLifeJourneyCard(item) {
  const card = document.getElementById("lifeJourneyCard");

  if (!card) {
    return;
  }

  const color = getLifeJourneyScoreColor(item.score);
  const dateText = item.date || String(item.year);

  card.innerHTML = `
    <div class="life-journey-detail-card" style="border-left-color:${color};">
      <div class="life-journey-detail-header">
        <div>
          <span class="life-journey-detail-year">${escapeHtml(dateText)}</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>

        <span class="life-journey-score-badge" style="background:${color};">
          ${item.score > 0 ? "+" + item.score : item.score}
        </span>
      </div>

      ${item.desc ? `<p>${escapeHtml(item.desc)}</p>` : ""}
    </div>
  `;
}

function getLifeJourneyScoreColor(score) {
  if (score >= 3) {
    return "#198754";
  }

  if (score === 2) {
    return "#20c997";
  }

  if (score === 1) {
    return "#86b7fe";
  }

  if (score === 0) {
    return "#64748b";
  }

  if (score === -1) {
    return "#ffc107";
  }

  if (score === -2) {
    return "#fd7e14";
  }

  return "#dc3545";
}
