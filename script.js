let flashcards = [];
let currentIndex = 0;

// DOM Elements
const KanjiDiv = document.getElementById("kanji");
const MeaningDiv = document.getElementById("meaning");
const FlipBtn = document.getElementById("flip");
const PrevBtn = document.getElementById("prev");
const NextBtn = document.getElementById("next");
const Meanings = document.getElementById("meanings");
const ReadingsOn = document.getElementById("readings_on");
const ReadingsKun = document.getElementById("readings_kun");
const StrokeCount = document.getElementById("stroke_count");
const Jlpt = document.getElementById("jlpt");

// JSON
fetch("Kanji.json")
  .then((response) => response.json())
  .then((data) => {
    flashcards = Object.entries(data).map(([kanji, value]) => ({
      kanji,
      ...value,
    }));

    const storedCards = localStorage.getItem("flashcards");
    if (storedCards) {
      flashcards = JSON.parse(storedCards);
    }

    currentIndex = 0;
    showcard(currentIndex);
  })
  .catch((err) => {
    console.error("Failed to load kanji data", err);
  });

//flashcard
function showcard(index) {
  const card = flashcards[index];
  KanjiDiv.textContent = card.kanji;
  MeaningDiv.textContent = card.keyword;
  Meanings.textContent = "Meanings: " + card.keyword;
  ReadingsOn.textContent = "On-yomi: " + card.readings_on.join(", ");
  ReadingsKun.textContent = "Kun-yomi: " + card.readings_kun.join(", ");
  StrokeCount.textContent = "Strokes: " + card.strokes;
  Jlpt.textContent = "JLPT: N" + card.jlpt;
}

// Button Handlers
FlipBtn.onclick = () => {
  MeaningDiv.classList.toggle("hidden");
  document.getElementById("info").classList.toggle("hidden");
};

PrevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showcard(currentIndex);

  // Reset flipped state
  MeaningDiv.classList.add("hidden");
  document.getElementById("info").classList.add("hidden");
};

NextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showcard(currentIndex);

  // Reset flipped state
  MeaningDiv.classList.add("hidden");
  document.getElementById("info").classList.add("hidden");
};

console.log("KanjiDiv:", KanjiDiv);
console.log("MeaningDiv:", MeaningDiv);
console.log("FlipBtn:", FlipBtn);
console.log("PrevBtn:", PrevBtn);
console.log("NextBtn:", NextBtn);
console.log("Meaning content:", MeaningDiv.textContent);
