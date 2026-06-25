document.addEventListener("DOMContentLoaded", function () {
  renderHomeToolCards();
  console.log("首頁初始化完成");
});

function renderHomeToolCards() {
  if (typeof tools === "undefined") {
    console.warn("找不到工具資料：data/tools.js");
    return;
  }

  const featuredTools = tools.filter(function (tool) {
    return tool.isFeatured === true;
  });

  renderToolCards("homeToolCardContainer", featuredTools);
}
