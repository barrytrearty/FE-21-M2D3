"strict mode";

const images = document.getElementsByTagName("img");
const cards = document.querySelectorAll("div .card");
const cardsBody = document.querySelectorAll("#last-minute .card");
const summerDeals = document.querySelectorAll(".summer-deals");

// console.log(cards);

const countTravels = function () {
  return images.length;
};

const deleteCards = function () {
  for (i = 0; i < cards.length; i++) {
    cards[i].remove();
    cardsBody[i].remove();
    return;
  }
};

const addHot = function () {
  for (j = 0; j < summerDeals.length; j++) {
    let badge = document.createElement("span");
    badge.innerText = "HOT";
    badge.classList.add("badge", "badge-danger");
    summerDeals[j].appendChild(badge);
  }
};

addHot();

// deleteCards();

// windows.onload(countTravels())

console.log(countTravels());
