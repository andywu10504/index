function renderAboutFaq() {
  const container = document.getElementById("faqContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.faq.forEach(function (item, index) {
    const faqId = "faqItem" + index;
    const collapseClass = index === 0 ? "show" : "";
    const collapsedClass = index === 0 ? "" : "collapsed";
    const expanded = index === 0 ? "true" : "false";

    const faq = document.createElement("div");
    faq.className = "accordion-item";

    faq.innerHTML = `
      <h2 class="accordion-header">
        <button class="accordion-button ${collapsedClass}" type="button" data-bs-toggle="collapse" data-bs-target="#${faqId}" aria-expanded="${expanded}" aria-controls="${faqId}">
          ${escapeHtml(item.question)}
        </button>
      </h2>

      <div id="${faqId}" class="accordion-collapse collapse ${collapseClass}" data-bs-parent="#faqContainer">
        <div class="accordion-body">
          ${escapeHtml(item.answer)}
        </div>
      </div>
    `;

    container.appendChild(faq);
  });
}
