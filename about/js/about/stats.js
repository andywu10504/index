function renderAboutStats() {
  const container = document.getElementById("statsContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.stats.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "stat-card story-animate";

    const isNumber = typeof item.number === "number";
    const displayValue = isNumber ? "0" : item.number;

    card.innerHTML = `
      <i class="${item.icon}"></i>
      <strong>
        <span class="stat-number"
              data-value="${isNumber ? item.number : ""}"
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
