document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
});

function loadNavbar() {
  const navbarContainer = document.getElementById("navbarContainer");

  if (!navbarContainer) {
    return;
  }

  fetch("./common/html/navbar.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("navbar.html 載入失敗");
      }

      return response.text();
    })
    .then(function (html) {
      navbarContainer.innerHTML = html;
      setupNavbarLinks();
      setActiveNavbar();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function setupNavbarLinks() {
  const links = {
    home: "./index.html",
    tools: "./tools.html",
    about: "./about.html"
  };

  document.querySelectorAll("[data-nav-target]").forEach(function (link) {
    const target = link.getAttribute("data-nav-target");

    if (links[target]) {
      link.setAttribute("href", links[target]);
    }
  });
}

function setActiveNavbar() {
  const currentPage = document.body.getAttribute("data-page");

  if (!currentPage) {
    return;
  }

  document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
}


async function loadJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`資料載入失敗：${url} (${response.status})`);
  return response.json();
}

function renderToolCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const fragment = document.createDocumentFragment();
  items.forEach(function (tool) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    const link = document.createElement("a");
    link.className = "tool-card-link";
    link.href = tool.url || "#";
    if (tool.target === "_blank") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    const card = document.createElement("div");
    card.className = "card tool-card h-100";
    const body = document.createElement("div");
    body.className = "card-body";
    const iconWrap = document.createElement("div");
    iconWrap.className = "tool-icon " + (tool.iconClass || "");
    const icon = document.createElement("i");
    icon.className = tool.icon || "fa-solid fa-toolbox";
    iconWrap.append(icon);
    const title = document.createElement("h3");
    title.className = "tool-title";
    title.textContent = tool.title || "";
    const description = document.createElement("p");
    description.className = "tool-desc";
    description.textContent = tool.description || "";
    const action = document.createElement("span");
    action.className = "tool-action";
    action.append(document.createTextNode(tool.actionText || "開啟"));
    const arrow = document.createElement("i");
    arrow.className = "ms-2 " + (tool.actionIcon || "fa-solid fa-arrow-right");
    action.append(arrow);
    body.append(iconWrap, title, description, action);
    card.append(body);
    link.append(card);
    col.append(link);
    fragment.append(col);
  });
  container.replaceChildren(fragment);
}
