document.addEventListener("DOMContentLoaded", function () {
  setActiveNavbar();
  console.log("我的小工具箱首頁初始化完成");
});

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
