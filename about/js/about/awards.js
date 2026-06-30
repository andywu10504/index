function renderAboutAwards() {
  renderAwardList("trainingList", aboutProfile.training, "training");
  renderAwardList("awardList", aboutProfile.awards, "award");
  ensureAwardModal();
}

function renderAwardList(containerId, list, type) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = "";

  list.forEach(function (item, index) {
    const li = document.createElement("li");
    li.className = "award-list-item";

    li.innerHTML = `
      <button type="button"
              class="award-item-button"
              data-award-type="${type}"
              data-award-index="${index}">
        <span class="award-item-icon">
          <i class="${item.icon || getDefaultAwardIcon(type)}"></i>
        </span>
        <span class="award-item-content">
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.subtitle || "")}</small>
        </span>
        <span class="award-item-arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </button>
    `;

    container.appendChild(li);
  });

  bindAwardButtons();
}

function bindAwardButtons() {
  const buttons = document.querySelectorAll(".award-item-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const type = button.getAttribute("data-award-type");
      const index = Number(button.getAttribute("data-award-index"));
      const list = type === "training" ? aboutProfile.training : aboutProfile.awards;
      const item = list[index];

      if (!item) {
        return;
      }

      showAwardModal(item, type);
    });
  });
}

function ensureAwardModal() {
  if (document.getElementById("awardDetailModal")) {
    return;
  }

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "awardDetailModal";
  modal.tabIndex = -1;
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content award-modal-content">
        <div class="modal-header">
          <div>
            <span class="award-modal-kicker" id="awardModalType"></span>
            <h5 class="modal-title" id="awardModalTitle"></h5>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉"></button>
        </div>

        <div class="modal-body">
          <p class="award-modal-subtitle" id="awardModalSubtitle"></p>
          <p class="award-modal-desc" id="awardModalDesc"></p>

          <div class="award-modal-image-wrap" id="awardModalImageWrap"></div>

          <ul class="award-modal-meta" id="awardModalMeta"></ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function showAwardModal(item, type) {
  ensureAwardModal();

  setText("awardModalType", type === "training" ? "訓練與資格" : "獲獎紀錄");

  setText("awardModalTitle", item.title || "");

  setText(
      "awardModalSubtitle",
      buildAwardSubtitle(item)
  );

  renderAwardModalImage(item);
  renderAwardModalMeta(item);

  const modalElement = document.getElementById("awardDetailModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
  modal.show();
}

function buildAwardSubtitle(item) {
    if (!item.date) {
        return item.type || "";
    }

    if (!item.type) {
        return item.date;
    }

    return item.date + "｜" + item.type;
}


function renderAwardModalImage(item) {
  const container = document.getElementById("awardModalImageWrap");

  if (!container) {
    return;
  }

  if (!item.image) {
    container.innerHTML = `
      <div class="award-empty-image">
        <i class="fa-regular fa-image"></i>
        <span>尚未放入獎狀或證書圖片</span>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <figure class="award-modal-image-card">
      <img
    src="${item.image}"
    alt="${escapeHtml(buildAwardImageAlt(item))}">
      <figcaption>
    ${escapeHtml(buildAwardImageCaption(item))}
</figcaption>
    </figure>
  `;
}

function buildAwardImageCaption(item) {

    if (item.imageCaption) {
        return item.imageCaption;
    }

    return item.title;
}

function buildAwardImageAlt(item) {

    if (item.imageAlt) {
        return item.imageAlt;
    }

    return item.title + " 證書";
}

function renderAwardModalMeta(item) {
  const container = document.getElementById("awardModalMeta");

  if (!container) {
    return;
  }

  const meta = [];

  if (item.date) {
    meta.push({ label: "日期", value: item.date });
  }

  if (item.organization) {
    meta.push({ label: "單位", value: item.organization });
  }

  if (item.note) {
    meta.push({ label: "備註", value: item.note });
  }

  container.innerHTML = meta.map(function (row) {
    return `
      <li>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.value)}</span>
      </li>
    `;
  }).join("");
}

function getDefaultAwardIcon(type) {
  if (type === "training") {
    return "fa-solid fa-certificate";
  }

  return "fa-solid fa-trophy";
}
