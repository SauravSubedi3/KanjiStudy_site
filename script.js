let flashcards = [];

const storecards = localStorage.getItem("flashcards");
if (storecards) {
  flashcards = JSON.parse(storecards);
} else {
  flashcards = [
    { kanji: "一", meaning: "One" },
    { kanji: "二", meaning: "Two" },
    { kanji: "三", meaning: "Three" },
    { kanji: "四", meaning: "Four" },
    { kanji: "五", meaning: "Five" },
  ];
}

Math.floor(Math.random() * flashcards.length);

let currentIndex = 0;

const KanjiDiv = document.getElementById("kanji");
const MeaningDiv = document.getElementById("meaning");
const FlipBtn = document.getElementById("flip");
const NextBtn = document.getElementById("next");
const RandomBtn = document.getElementById("random");
const AddBtn = document.getElementById("add-btn");
const NewKanjiInput = document.getElementById("new-kanji");
const NewMeaningInput = document.getElementById("new-meaning");
const ResetBtn = document.getElementById("reset-btn");

function showcard(index) {
  const card = flashcards[index];
  KanjiDiv.textContent = card.kanji;
  MeaningDiv.textContent = card.meaning;
  MeaningDiv.classList.add("hidden");
}
FlipBtn.onclick = () => {
  // KanjiDiv.classList.toggle("hidden");
  MeaningDiv.classList.toggle("hidden");
};

NextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % flashcards.length; // suppose you're at 4, 4+1%5 = 0 so from first
  showcard(currentIndex);
};

RandomBtn.onclick = () => {
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * flashcards.length);
  }
  currentIndex = newIndex;
  showcard(newIndex);
};
AddBtn.onclick = () => {
  const newKanji = NewKanjiInput.value.trim();
  const newMeaning = NewMeaningInput.value.trim();

  if (newKanji && newMeaning) {
    // add it to flashcards
    flashcards.push({ kanji: newKanji, meaning: newMeaning });
    currentIndex = flashcards.length - 1;
    showcard(currentIndex);
    NewKanjiInput.value = "";
    NewMeaningInput.value = "";
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  } else {
    alert("Please fill in both fields!");
  }
};
ResetBtn.onclick = () => {
  const ConformReset = confirm("Do you really want to delete the data?");
  if (ConformReset) {
    localStorage.removeItem("flashcards");
    location.reload(); //refresh
  }
};
currentIndex = flashcards.length - 1;

showcard(currentIndex);
