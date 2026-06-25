document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
});

function loadNavbar() {
  const container = document.getElementById("navbarContainer");

  if (!container) {
    return;
  }

  fetch("navbar.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("navbar.html 載入失敗");
      }

      return response.text();
    })
    .then(function (html) {
      container.innerHTML = html;
      setActiveNavbar();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function setActiveNavbar() {
  const currentPage = document.body.getAttribute("data-page");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    const page = link.getAttribute("data-page");

    if (page === currentPage) {
      link.classList.add("active");
    }
  });
}

function renderToolCards(containerId, toolList) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn("找不到工具卡片容器：" + containerId);
    return;
  }

  if (!Array.isArray(toolList)) {
    console.warn("工具資料不是陣列");
    return;
  }

  container.innerHTML = "";

  toolList.forEach(function (tool) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const safeTarget = tool.target || "_self";
    const safeActionIcon = tool.actionIcon || "fa-solid fa-arrow-right";

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
              <i class="${safeActionIcon} ms-1"></i>
            </span>
          </div>
        </div>
      </a>
    `;

    container.appendChild(col);
  });
}
