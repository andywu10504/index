document.addEventListener("DOMContentLoaded", function () {
  setActiveNavbar();
  renderToolCards();
  console.log("我的小工具箱首頁初始化完成");
});

const tools = [
  {
    title: "BINGO 遊戲",
    description: "數字 Bingo、EMT Bingo、海戰棋與煙火動畫，多種模式整合於同一個網頁小工具。",
    url: "https://andywu10504.github.io/BINGO/",
    target: "_blank",
    icon: "fa-solid fa-table-cells-large",
    iconClass: "bingo-icon",
    actionText: "開始遊戲",
    actionIcon: "fa-solid fa-arrow-up-right-from-square"
  },
  {
    title: "KPI Dashboard",
    description: "查看自己製作的 KPI 儀表板、資料分析與管理報表。",
    url: "dashboard.html",
    target: "_self",
    icon: "fa-solid fa-chart-line",
    iconClass: "dashboard-icon",
    actionText: "進入工具",
    actionIcon: "fa-solid fa-arrow-right"
  },
  {
    title: "設備管理工具",
    description: "開啟設備保養、維修紀錄、零件管理相關小工具。",
    url: "equipment.html",
    target: "_self",
    icon: "fa-solid fa-screwdriver-wrench",
    iconClass: "equipment-icon",
    actionText: "進入工具",
    actionIcon: "fa-solid fa-arrow-right"
  }
];

function renderToolCards() {
  const container = document.getElementById("toolCardContainer");

  if (!container) {
    console.warn("找不到工具卡片容器：toolCardContainer");
    return;
  }

  container.innerHTML = "";

  tools.forEach(function (tool) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const safeTarget = tool.target || "_self";

    col.innerHTML = `
      <a href="${tool.url}" target="${safeTarget}" class="tool-card-link">
        <div class="card tool-card h-100">
          <div class="card-body">
            <div class="tool-icon ${tool.iconClass}">
              <i class="${tool.icon}"></i>
            </div>

            <h4 class="tool-title">${tool.title}</h4>

            <p class="tool-desc">${tool.description}</p>

            <span class="tool-action">
              ${tool.actionText}
              <i class="${tool.actionIcon} ms-1"></i>
            </span>
          </div>
        </div>
      </a>
    `;

    container.appendChild(col);
  });
}

function setActiveNavbar() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    if (currentPath.endsWith(href.toLowerCase())) {
      link.classList.add("active");
    }
  });

  if (currentPath.endsWith("/") || currentPath.endsWith("index.html")) {
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="index.html"]');

    if (homeLink) {
      homeLink.classList.add("active");
    }
  }
}
