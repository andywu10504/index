document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
});

function loadNavbar() {
  const navbarContainer = document.getElementById("navbarContainer");

  if (!navbarContainer) {
    return;
  }

  fetch("./navbar.html")
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
