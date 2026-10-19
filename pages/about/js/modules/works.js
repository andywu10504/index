function renderAboutWorks() {
  const container = document.getElementById("worksContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.works.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "work-card story-animate";

    card.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)} 範例圖片">
      <div class="work-content">
        <i class="${item.icon}"></i>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    `;

    container.appendChild(card);
  });
}
