const cardList = document.querySelectorAll(".flip-card");

cardList.forEach((currentCard) =>
  currentCard.addEventListener("click", () => {
    currentCard.classList.toggle("flipped-card");
  })
);
