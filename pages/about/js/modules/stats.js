// 統計數字以 about.json 既有資料計算，避免重複維護固定數值。
function calculateAboutStat(item) {
  const metric = item.metric || {};
  const profile = aboutProfile;
  switch (metric.type) {
    case "birthYear":
      return Number(profile.birthYear) || "—";
    case "yearsSinceTimelineCategory": {
      const years = (profile.timeline || [])
        .filter(entry => entry.category === metric.category)
        .map(entry => Number(entry.start))
        .filter(year => Number.isInteger(year) && year > 0);
      return years.length ? Math.max(0, new Date().getFullYear() - Math.min(...years)) : "—";
    }
    case "noteItems":
      return (item.note || "").split(/[、，,]/).map(value => value.trim()).filter(Boolean).length;
    case "titleCount":
      return (metric.sources || []).flatMap(source => Array.isArray(profile[source]) ? profile[source] : [])
        .filter(entry => (!metric.keyword || (entry.title || "").includes(metric.keyword)) &&
          (!metric.excludeKeyword || !(entry.title || "").includes(metric.excludeKeyword))).length;
    case "literal":
      return metric.value ?? "—";
    default:
      return item.number ?? "—";
  }
}

function renderAboutStats() {
  const container = document.getElementById("statsContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.stats.forEach(function (item) {
    const card = document.createElement("a");
    card.className = "stat-card story-animate";
    card.href = item.href || "#lifeTimeline";
    card.setAttribute("aria-label", `${item.label}，前往相關內容`);

    const value = calculateAboutStat(item);
    const isNumber = typeof value === "number";
    const displayValue = isNumber ? "0" : value;

    card.innerHTML = `
      <i class="${item.icon}"></i>
      <strong>
        <span class="stat-number"
              data-value="${isNumber ? value : ""}"
              data-type="${isNumber ? "number" : "text"}">${displayValue}</span><span class="stat-suffix">${item.suffix || ""}</span>
      </strong>
      <span class="stat-label">${escapeHtml(item.label)}</span>
      <p class="stat-note">${escapeHtml(item.note)}</p>
    `;

    container.appendChild(card);
  });
}

function initAboutStatsCounterAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number[data-type='number']");

  if (statNumbers.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    statNumbers.forEach(function (element) {
      element.textContent = element.getAttribute("data-value");
    });

    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateAboutNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  statNumbers.forEach(function (element) {
    observer.observe(element);
  });
}

function animateAboutNumber(element) {
  const target = Number(element.getAttribute("data-value"));

  if (Number.isNaN(target)) {
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(target * easedProgress);

    element.textContent = currentValue.toLocaleString("zh-TW");

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString("zh-TW");
    }
  }

  requestAnimationFrame(update);
}
