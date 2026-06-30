function renderAboutHero() {
  setInnerHtml("heroTitle", aboutProfile.heroTitle);
  setInnerHtml("heroIntro", aboutProfile.heroIntro);

  const heroImage = document.getElementById("heroImage");

  if (heroImage) {
    heroImage.src = aboutProfile.heroImage;
  }
}
