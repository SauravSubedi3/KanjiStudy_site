let flashcards = [
  { kanji: "一", meaning: "one" },
  { kanji: "二", meaning: "two" },
  { kanji: "三", meaning: "three" },
  { kanji: "四", meaning: "four" },
  { kanji: "五", meaning: "five" },
];

let Kanji_card = document.getElementsByClassName("kanji-card");
let Meaning_card = document.getElementsByClassName("meaning-card");
let Next_Btn = document.getElementsByClassName("btn_next")[0];
let Flip_Btn = document.getElementsByClassName("btn_flip")[0];

Next_Btn.addEventListener("click", () => {
  let currentIndex = 0;
  Kanji_card[0].innerHTML = flashcards[currentIndex].kanji;
  Meaning_card[0].innerHTML = flashcards[currentIndex].meaning;

  if (currentIndex >= flashcards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  Meaning_card[0].classList.add("hidden");
});

Flip_Btn.addEventListener("click", () => {
  Meaning_card[0].classList.toggle("hidden");
  // if (Meaning_card[0].style.display === "none") {
  //   Meaning_card[0].style.display === "block";
  // } else {
  //   Meaning_card[0].style.dislay === "none";
  // }
});
