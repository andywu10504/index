function renderAboutLifeMosaic() {
  const container = document.getElementById("lifeMosaicContainer");
  if (!container) return;

  const items = Array.isArray(aboutProfile.lifeMosaic) ? aboutProfile.lifeMosaic : [];
  const monthHours = Number(aboutProfile.lifeMosaicMonthHours) || 720;
  const total = items.reduce((sum, item) => sum + Math.max(0, Number(item.hours) || 0), 0);
  container.replaceChildren();
  if (!total) return;

  const summary = document.getElementById("lifeMosaicSummary");
  if (summary) summary.textContent = `每月 ${total} / ${monthHours} 小時；以 30 天估算。`;

  const dialog = document.getElementById("lifeMosaicDialog");
  const detailTitle = document.getElementById("lifeMosaicDetailTitle");
  const detailContent = document.getElementById("lifeMosaicDetailContent");
  const formatPercent = hours => (hours / monthHours * 100).toFixed(2);

  // Two proportional rows keep the small categories clickable while preserving
  // area ratios: each row's height follows its hours; card widths follow row hours.
  const groups = [items.slice(0, 3), items.slice(3)];
  groups.forEach(group => {
    const rowHours = group.reduce((sum, item) => sum + Math.max(0, Number(item.hours) || 0), 0);
    if (!rowHours) return;
    const row = document.createElement("div");
    row.className = "life-mosaic-row";
    
    group.forEach(item => {
      const hours = Math.max(0, Number(item.hours) || 0);
      if (!hours) return;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "mosaic-card story-animate";
      
      card.setAttribute("aria-label", `${item.title}，${hours} 小時，${formatPercent(hours)}%，點擊閱讀介紹`);
      const image = document.createElement("img");
      image.src = item.image || ""; 
      if (!item.image) { image.hidden = true; }
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => { image.style.display = "none"; });
      const overlay = document.createElement("span");
      overlay.className = "mosaic-overlay";
      const icon = document.createElement("i");
      icon.className = item.icon || "";
      icon.setAttribute("aria-hidden", "true");
      const title = document.createElement("strong");
      title.className = "mosaic-title";
      title.textContent = item.title;
      const percent = document.createElement("span");
      percent.className = "mosaic-percent";
      percent.textContent = `${formatPercent(hours)}%`;
      overlay.append(icon, title, percent);
      card.append(image, overlay);
      card.addEventListener("click", () => {
        if (!dialog) return;
        detailTitle.textContent = `${item.title}｜${item.subtitle || ""}`;
        detailContent.replaceChildren();
        const description = document.createElement("p");
        description.textContent = item.desc || "";
        const time = document.createElement("p");
        time.className = "life-mosaic-detail-time";
        time.textContent = `${hours} 小時／月 · ${formatPercent(hours)}%`;
        const breakdown = document.createElement("p");
        breakdown.className = "life-mosaic-detail-breakdown";
        breakdown.textContent = item.breakdown || "";
        detailContent.append(description, time, breakdown);
        dialog.showModal();
      });
      row.appendChild(card);
    });
    container.appendChild(row);
  });
}
