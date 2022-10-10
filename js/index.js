const bookmarkButton1 = document.querySelector('[data-js="button__bookmark1"]');
const bookmarkButtonIcon1 = document.querySelector(
  '[data-js="button__bookmark--icon1"]'
);

bookmarkButton1.addEventListener("click", (event) => {
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

//

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector("main");

const question = document.querySelector('[data-js="question]');
const answer = document.querySelector('[data-js="answer"]');
const tag = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new formData(event.target);
  const data = Object.fromEntries(formData);

  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;

  addNewCard(question, answer, tag);
});

function addNewCard(question, answer, tag) {
  const cardList = document.createElement("ul");
  const cardListItem = document.createElement("li");
  const card = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButtonAnswer = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTagListItem = document.createElement("li");
  const cardButtonBookmark = document.createElement("div");
  const cardBookmark = document.createElement("button");

  cardList.classList.add("card-list");
  cardListItem.classList.add("card-list__item");
  card.classList.add("card");
  cardQuestion.classList.add("card__question");
  cardButtonAnswer.classList.add("card__button-answer");
  cardAnswer.classList.add("card__answer");
  cardTagList.classList.add("card__tag-list");
  cardTagListItem.classList.add("card__tag-list-item");
  cardButtonBookmark.classList.add("card__button-bookmark");
  cardBookmark.classList.add("bookmark");

  cardQuestion.textContent = question;
  cardAnswer.textContent = answer;
  cardTagListItem.textContent = tag;
  cardButtonAnswer.textContent = "Show answer";
  cardBookmark.innerHTML = `<svg
      class="bookmark__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 24 24"
      >
        <path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
    </svg>`;

  cardList.append(cardListItem);
  cardListItem.append(card);
  card.append(
    cardQuestion,
    cardButtonAnswer,
    cardAnswer,
    cardTagList,
    cardButtonBookmark
  );
  cardTagList.append(cardTagListItem);
  cardButtonBookmark.append(cardBookmark);
}
