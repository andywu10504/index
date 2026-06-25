document.addEventListener("DOMContentLoaded", function () {
  initStoryScrollAnimation();
  console.log("認識我頁面初始化完成");
});

function initStoryScrollAnimation() {
  const animatedElements = document.querySelectorAll(
    ".life-card, .big-text-card, .quote-card, .timeline-column, .timeline-item, .info-card, .mini-tool-card"
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
