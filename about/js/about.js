document.addEventListener("DOMContentLoaded", function () {
  if (typeof aboutProfile === "undefined") {
    console.error("找不到 aboutProfile，請確認 data/about.js 是否已載入。");
    return;
  }

  renderAboutHero();
  renderAboutStory();
  renderAboutStats();
  renderAboutTimeline();

  if (typeof renderLifeJourney === "function") {
    renderLifeJourney();
  } else {
    console.error("找不到 renderLifeJourney，請確認 ./js/about/lifeJourney.js 是否已載入。");
  }

  renderAboutLifeMosaic();
  renderAboutWorks();
  renderAboutFaq();
  renderAboutAwards();
  renderAboutBelief();

  initAboutScrollAnimation();
  initAboutStatsCounterAnimation();

  console.log("認識我頁面初始化完成");
});
