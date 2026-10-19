let aboutProfile;
document.addEventListener("DOMContentLoaded", async function () {
  try {
    aboutProfile = await loadJson("./pages/about/data/about.json");
    // JSON 只保存靜態資料；動態年份由 JS 在載入後計算。
    aboutProfile.currentEndYear = new Date().getFullYear();
  } catch (error) {
    console.error("個人資料載入失敗", error);
    return;
  }

  renderAboutHero();
  renderAboutStory();
  renderAboutStats();
  renderAboutTimeline();
  renderLifeJourney();
  renderAboutLifeMosaic();
  renderAboutWorks();
  renderAboutFaq();
  renderAboutAwards();
  renderAboutBelief();

  initAboutScrollAnimation();
  initAboutStatsCounterAnimation();

  console.log("認識我頁面初始化完成");
});
