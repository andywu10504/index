function renderAboutAwards() {
  renderAboutList("trainingList", aboutProfile.training);
  renderAboutList("awardList", aboutProfile.awards);
}

function renderAboutList(containerId, list) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = "";

  list.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    container.appendChild(li);
  });
}
