// DOM Elements
const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const player1SavedScore = document.getElementById("player1SavedScore");
const player2SavedScore = document.getElementById("player2SavedScore");
const player1CurrentScore = document.getElementById("player1CurrentScore");
const player2CurrentScore = document.getElementById("player2CurrentScore");
const diceImage = document.getElementById("diceImage");
const rollBtn = document.getElementById("rollBtn");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const winnerMessage = document.getElementById("winnerMessage");

// Sound Elements
const diceSound = document.getElementById("diceSound");
const buttonSound = document.getElementById("buttonSound");
const turnSound = document.getElementById("turnSound");

// Game Variables
let currentPlayer = 1;
let player1TotalScore = 0;
let player2TotalScore = 0;
let currentScore = 0;
let gameActive = true;

// Dice Images
const diceImages = [
  "dice-1.png",
  "dice-2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

// Roll Dice Function
rollBtn.addEventListener("click", () => {
  if (!gameActive) return;

  // Play dice roll sound
  diceSound.play();

  // Add rolling animation
  diceImage.style.animation = "rollDice 1s ease-out";

  setTimeout(() => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceImage.src = diceImages[diceValue - 1];

    if (diceValue === 1) {
      currentScore = 0;
      updateCurrentScore();
      switchPlayer();
    } else {
      currentScore += diceValue;
      updateCurrentScore();
    }

    // Reset animation
    diceImage.style.animation = "";
  }, 1000);
});

// Save Score Function
saveBtn.addEventListener("click", () => {
  if (!gameActive) return;

  // Play button click sound
  buttonSound.play();

  if (currentPlayer === 1) {
    player1TotalScore += currentScore;
    player1SavedScore.textContent = player1TotalScore;
  } else {
    player2TotalScore += currentScore;
    player2SavedScore.textContent = player2TotalScore;
  }

  checkWin();
  currentScore = 0;
  updateCurrentScore();
  switchPlayer();
});

// Reset Game Function
resetBtn.addEventListener("click", () => {
  // Play button click sound
  buttonSound.play();
  resetGame();
});

// Helper Functions
function updateCurrentScore() {
  if (currentPlayer === 1) {
    player1CurrentScore.textContent = currentScore;
  } else {
    player2CurrentScore.textContent = currentScore;
  }
}

function switchPlayer() {
  // Play turn shift sound
  turnSound.play();

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  highlightCurrentPlayer();
}

function highlightCurrentPlayer() {
  const player1Div = document.getElementById("player1");
  const player2Div = document.getElementById("player2");
  player1Div.classList.toggle("active", currentPlayer === 1);
  player2Div.classList.toggle("active", currentPlayer === 2);
}

function checkWin() {
  if (player1TotalScore >= 100) {
    winnerMessage.textContent = `${player1NameInput.value || "Player 1"} Wins! 🎉`;
    gameActive = false;
  } else if (player2TotalScore >= 100) {
    winnerMessage.textContent = `${player2NameInput.value || "Player 2"} Wins! 🎉`;
    gameActive = false;
  }
}

function resetGame() {
  player1TotalScore = 0;
  player2TotalScore = 0;
  currentScore = 0;
  gameActive = true;
  currentPlayer = 1;
  player1SavedScore.textContent = "0";
  player2SavedScore.textContent = "0";
  player1CurrentScore.textContent = "0";
  player2CurrentScore.textContent = "0";
  diceImage.src = "dice-1.png";
  winnerMessage.textContent = "";
  highlightCurrentPlayer();
}

// Initialize Game
highlightCurrentPlayer();