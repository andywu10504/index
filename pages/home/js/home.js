document.addEventListener("DOMContentLoaded", async function () {
  try {
    const tools = await loadJson("./pages/tools/data/tools.json");
    renderToolCards("homeToolCardContainer", tools.filter(tool => tool.isFeatured === true));
  } catch (error) {
    console.error(error);
    const container = document.getElementById("homeToolCardContainer");
    if (container) container.textContent = "工具資料載入失敗，請檢查網路連線或 JSON 檔案。";
  }
});
