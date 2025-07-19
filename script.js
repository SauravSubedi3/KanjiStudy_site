let flashcards = defaultFlashcards;

fetch("EX_kanji.json")
  .then((response) => response.json())
  .then((data) => {
    const storecards = localStorage.getItem("flashcards");
    flashcards = storecards ? JSON.parse(storecards) : data;
    currentIndex = flashcards.length - 1;
    showcard(currentIndex);
  })
  .catch((err) => {
    console.error("Failed to kanji data", err);
  });

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
    location.reload(); //refresh to reload
  }
};
currentIndex = flashcards.length - 1;

showcard(currentIndex);
