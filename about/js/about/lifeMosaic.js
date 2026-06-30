function renderAboutLifeMosaic() {
  const container = document.getElementById("lifeMosaicContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  aboutProfile.lifeMosaic.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "mosaic-card story-animate";
    card.style.flexBasis = getLifeMosaicBasis(item.ratio);

    card.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)} 範例圖片">
      <div class="mosaic-overlay">
        <i class="${item.icon}"></i>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
        <span>${item.ratio}%</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function getLifeMosaicBasis(ratio) {
  if (ratio >= 30) {
    return "48%";
  }

  if (ratio >= 20) {
    return "31%";
  }

  if (ratio >= 10) {
    return "23%";
  }

  return "18%";
}
