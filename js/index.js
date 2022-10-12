const bookmarkButton1 = document.querySelector('[data-js="button__bookmark1"]');
const bookmarkButtonIcon1 = document.querySelector(
  '[data-js="button__bookmark--icon1"]'
);

bookmarkButton1.addEventListener("click", () => {
  bookmarkButtonIcon1.classList.toggle("bookmark--active");
});

const answerText = document.querySelector('[data-js="card__answer"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerText.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  } else {
    answerText.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  }
});
