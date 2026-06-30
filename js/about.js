document.addEventListener("DOMContentLoaded", function () {
  renderAboutPage();
  initStoryScrollAnimation();
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
  document.getElementById("heroTitle").innerHTML = aboutProfile.heroTitle;
  document.getElementById("heroIntro").innerHTML = aboutProfile.heroIntro;
  document.getElementById("heroImage").src = aboutProfile.heroImage;
}

function renderStory() {
  document.getElementById("storyTitle").textContent = aboutProfile.storyTitle;
  document.getElementById("storyText").textContent = aboutProfile.storyText;
}

function renderStats() {
  const container = document.getElementById("statsContainer");
  container.innerHTML = "";

  aboutProfile.stats.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <i class="${item.icon}"></i>
      <strong>${item.value}</strong>
      <span>${item.label}</span>
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
  container.innerHTML = "";

  aboutProfile.timelineCategories.forEach(function (category) {
    const item = document.createElement("span");
    item.innerHTML = `<i style="background:${category.color}"></i>${category.label}`;
    container.appendChild(item);
  });
}

function renderTimelineYears(startYear, endYear) {
  const container = document.getElementById("timelineYears");
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
  container.innerHTML = "";

  list.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    container.appendChild(li);
  });
}

function renderBelief() {
  document.getElementById("beliefText").textContent = aboutProfile.belief;
  document.getElementById("beliefDesc").textContent = aboutProfile.beliefDesc;
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
