document.addEventListener("DOMContentLoaded", function () {
  renderAboutPage();
  initStoryScrollAnimation();
  initStatsCounterAnimation();
  console.log("認識我頁面初始化完成");
});

function renderAboutPage() {
  if (typeof aboutProfile === "undefined") {
    console.error("找不到 aboutProfile，請確認 data/about.js 是否已載入。");
    return;
  }

  renderHero();
  renderStory();
  renderStats();
  renderTimeline();
  renderLifeMosaic();
  renderWorks();
  renderFaq();
  renderTrainingAndAwards();
  renderBelief();
}

function renderHero() {
  setInnerHtml("heroTitle", aboutProfile.heroTitle);
  setInnerHtml("heroIntro", aboutProfile.heroIntro);

  const heroImage = document.getElementById("heroImage");

  if (heroImage) {
    heroImage.src = aboutProfile.heroImage;
  }
}

function renderStory() {
  setText("storyTitle", aboutProfile.storyTitle);
  setText("storyText", aboutProfile.storyText);
}

function renderStats() {
  const container = document.getElementById("statsContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.stats.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "stat-card";

    const isNumber = typeof item.number === "number";
    const displayValue = isNumber ? "0" : item.number;

    card.innerHTML = `
      <i class="${item.icon}"></i>
      <strong>
        <span class="stat-number"
              data-value="${isNumber ? item.number : ""}"
              data-type="${isNumber ? "number" : "text"}">${displayValue}</span><span class="stat-suffix">${item.suffix || ""}</span>
      </strong>
      <span class="stat-label">${item.label}</span>
      <p class="stat-note">${item.note}</p>
    `;

    container.appendChild(card);
  });
}

function renderTimeline() {
  const currentYear = aboutProfile.currentEndYear;
  const startYear = aboutProfile.birthYear;
  const endYear = currentYear;
  const totalYears = endYear - startYear;

  renderTimelineLegend();
  renderTimelineYears(startYear, endYear);
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
    item.innerHTML = `<i style="background:${category.color}"></i>${category.label}`;
    container.appendChild(item);
  });
}

function renderTimelineYears(startYear, endYear) {
  const container = document.getElementById("timelineYears");

  if (!container) {
    return;
  }

  const years = getTimelineYearMarks(startYear, endYear);

  container.innerHTML = "";

  years.forEach(function (year) {
    const label = document.createElement("span");
    label.textContent = year === endYear ? "Now" : year;
    container.appendChild(label);
  });
}

function getTimelineYearMarks(startYear, endYear) {
  const importantYears = [1989, 1995, 2001, 2004, 2007, 2012, 2013, 2015, 2021, endYear];

  return [...new Set(importantYears)].filter(function (year) {
    return year >= startYear && year <= endYear;
  });
}

function renderTimelineRows(startYear, endYear, totalYears) {
  const container = document.getElementById("timelineRows");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.timeline.forEach(function (item, index) {
    const category = getCategory(item.category);
    const itemEnd = item.end === "now" ? endYear : item.end;
    const left = ((item.start - startYear) / totalYears) * 100;
    const width = item.start === itemEnd ? 1.8 : ((itemEnd - item.start) / totalYears) * 100;

    const row = document.createElement("div");
    row.className = "timeline-row";

    row.innerHTML = `
      <div class="timeline-label">${item.title}</div>

      <div class="timeline-track">
        <button type="button"
                class="${item.start === itemEnd ? "timeline-dot" : "timeline-bar"}"
                style="left:${left}%; width:${item.start === itemEnd ? "28px" : width + "%"}; background:${category.color};"
                data-bs-toggle="collapse"
                data-bs-target="#timelineDetail${index}">
          ${item.start === itemEnd ? "" : formatPeriod(item.start, item.end, endYear)}
        </button>
      </div>

      <div class="collapse show timeline-detail" id="timelineDetail${index}">
        <div class="detail-card">
          <h3>${formatPeriod(item.start, item.end, endYear)}｜${item.title}</h3>
          <p>${item.desc}</p>
          ${item.link ? `<a href="${item.link}" target="_blank">查看相關連結</a>` : ""}
        </div>
      </div>
    `;

    container.appendChild(row);
  });
}

function getCategory(key) {
  return aboutProfile.timelineCategories.find(function (category) {
    return category.key === key;
  }) || aboutProfile.timelineCategories[0];
}

function formatPeriod(start, end, currentYear) {
  if (start === end) {
    return start;
  }

  if (end === "now") {
    return start + " - Now";
  }

  return start + " - " + end;
}

function renderLifeMosaic() {
  const container = document.getElementById("lifeMosaicContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.lifeMosaic.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "mosaic-card";
    card.style.flexBasis = getMosaicBasis(item.ratio);

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title} 範例圖片">
      <div class="mosaic-overlay">
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span>${item.ratio}%</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function getMosaicBasis(ratio) {
  if (ratio >= 30) {
    return "48%";
  }

  if (ratio >= 20) {
    return "31%";
  }

  if (ratio >= 10) {
    return "23%";
  }

  return "18%";
}

function renderWorks() {
  const container = document.getElementById("worksContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.works.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "work-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title} 範例圖片">
      <div class="work-content">
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderFaq() {
  const container = document.getElementById("faqContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.faq.forEach(function (item, index) {
    const faqId = "faqItem" + index;
    const collapseClass = index === 0 ? "show" : "";
    const collapsedClass = index === 0 ? "" : "collapsed";

    const faq = document.createElement("div");
    faq.className = "accordion-item";

    faq.innerHTML = `
      <h2 class="accordion-header">
        <button class="accordion-button ${collapsedClass}" type="button" data-bs-toggle="collapse" data-bs-target="#${faqId}">
          ${item.question}
        </button>
      </h2>

      <div id="${faqId}" class="accordion-collapse collapse ${collapseClass}" data-bs-parent="#faqContainer">
        <div class="accordion-body">
          ${item.answer}
        </div>
      </div>
    `;

    container.appendChild(faq);
  });
}

function renderTrainingAndAwards() {
  renderList("trainingList", aboutProfile.training);
  renderList("awardList", aboutProfile.awards);
}

function renderList(containerId, list) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = "";

  list.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    container.appendChild(li);
  });
}

function renderBelief() {
  setText("beliefText", aboutProfile.belief);
  setText("beliefDesc", aboutProfile.beliefDesc);
}

function initStatsCounterAnimation() {
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
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  statNumbers.forEach(function (element) {
    observer.observe(element);
  });
}

function animateNumber(element) {
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

function initStoryScrollAnimation() {
  const animatedElements = document.querySelectorAll(
    ".story-card, .stat-card, .timeline-panel, .mosaic-card, .work-card, .faq-accordion, .detail-card, .belief-card"
  );

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach(function (element) {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(function (element) {
    element.classList.add("story-animate");
    observer.observe(element);
  });
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function setInnerHtml(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.innerHTML = value;
  }
}
