const bookmarkButton1 = document.querySelector('[data-js="button__bookmark1"]');
const bookmarkButtonIcon1 = document.querySelector(
  '[data-js="button__bookmark--icon1"]'
);

bookmarkButton1.addEventListener("click", () => {
  bookmarkButtonIcon1.classList.toggle("bookmark--active");
});
