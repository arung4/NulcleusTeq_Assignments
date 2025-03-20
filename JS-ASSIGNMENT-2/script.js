// Accessing all the UI elements

// 1. Start screen elements
const startScreen = document.querySelector(".start-screen");
const categoryDropdown = document.getElementById("category");
const levelDropdown = document.getElementById("level");
const startQuizButton = document.getElementById("start-quiz");

// 2. Quiz screen elements
const quizScreen = document.querySelector(".quiz-screen");
const questionNoElement = document.querySelector(".question-no");
const questionElement = document.querySelector("#question");
const optionsElement = document.getElementById("options");
const timerElement = document.querySelector(".timer span");
// const resultElement = document.querySelector("#result");

// 3. Feedback screen elements
const feedbackScreen= document.querySelector(".feedback-screen");
const resultMsgElement = document.getElementById("result-msg");
const correctAnswerElement = document.getElementById("correct-answer");
const nextQuestionButton = document.getElementById("next-question");

// 4. Result screen elements
const resultScreen = document.querySelector(".result-screen");
const noofCorrectAnswers = document.getElementById("correct-answers-no");
const noofWrongAnswers = document.getElementById("wrong-answers-no");
const finalScore = document.getElementById("final-score");
const restartQuizButton = document.getElementById("restart-quiz");

const btnClickSound = document.getElementById("btn-click-sound");


// Event listeners
startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", nextQuestion);
restartQuizButton.addEventListener("click", restartQuiz);


// Game Variables and Constants
let currentQuestionIndex = 0;
let timerleft = 15;
let timer;
let questions = [];
let score = 0;



// Function to start the quiz
function startQuiz() {
  btnClickSound.play();
 

  const category = categoryDropdown.value;
  const level = levelDropdown.value;

    startScreen.classList.add("hidden");
   // Fetch the questions based on category and level
   if(fetchQuestions(category, level)) {
      // Hide the start screen and show the quize screen
   }else{
    alert("Questions not loaded , due to problem in API ");
    startScreen.classList.remove("hidden");
   }
       
}

// Function to move to the next question
function nextQuestion() {
  // Hide the feedback screen and show the quize screen
  feedbackScreen.classList.add("hidden");          
  quizScreen.classList.remove("hidden");

  // Load the next question
  loadNextQuestion();
}

// Function to load the next question 
function loadNextQuestion(){
  timerleft = 15;
  clearInterval(timer);
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    loadQuestion(questions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}


// Function to fetch questions based on category and level

async function fetchQuestions(category, level) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${level}&type=multiple`
    );
    const data = await response.json();
    console.log(data);
    // put all 20 questions in the questions array
     questions = data.results;
    if(questions){
      const status = loadQuestion(questions[currentQuestionIndex]);
      if(status) return true;
    } else {
      alert("No questions found for the selected category and level");
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message); // display an error message
    return false;
  }
}



// Function to load a question

function loadQuestion(question) {
  questionNoElement.textContent = currentQuestionIndex + 1;
  questionElement.textContent = question.question;

  // clear the previous question
  optionsElement.innerHTML = "";

  // Add new options
  const options = [...question.incorrect_answers, question.correct_answer];
  options.sort(() => Math.random() - 0.5);
  // console.log("Options", options);
  options.forEach((option, index) => {
    const li = document.createElement("li");
    li.className = "option";
    li.innerHTML = `${String.fromCharCode(65 + index)}: <span>${option}</span>`;
    li.addEventListener("click", () => {
      // Stop and reset the audio before playing
      btnClickSound.pause();
      btnClickSound.currentTime = 0;

      btnClickSound.play();  
      checkAnswer(option, question.correct_answer)
  })
    optionsElement.appendChild(li);
  });
  quizScreen.classList.remove("hidden");
  startTimer();
  return true;
}


// Function to start the timer

function startTimer() {
  clearInterval(timer);
  timerElement.textContent = `${timerleft}s`;
  timer = setInterval(() => {
    timerleft--;
    timerElement.textContent = `${timerleft}s`;

    if (timerleft === 0) {
      clearInterval(timer);
      checkAnswer("", questions[currentQuestionIndex].correct_answer);
    }
  }, 1000);
}

// Function tot check the answer
function checkAnswer(userAnswer, correctAnswer) {
   clearInterval(timer);
  if (userAnswer === correctAnswer) {
    score++;
    // console.log("Your score is",
    // score);
    resultMsgElement.textContent = "Correct Answer! 😊";
  } else {
    resultMsgElement.textContent = "Wrong Answer! 😒🤣";
  }
  // update the correct answer
  correctAnswerElement.textContent = `Correct Answer: ${correctAnswer}`;

  // Show the feedback screen and hide the quiz screen
  quizScreen.classList.add("hidden");
  feedbackScreen.classList.remove("hidden");
}

// Function to end the quize and show the result screen
function endQuiz() {
  // set the final result variables
  noofCorrectAnswers.textContent = score;
  noofWrongAnswers.textContent = questions.length - score;
  finalScore.textContent = score * 10;

  // Hide the feedback screen and show the result screen
  quizScreen.classList.add("hidden");
  feedbackScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

// Function to restart the quiz
function restartQuiz() {
  btnClickSound.play();
  // Hide the result screen and show the start screen
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");

  // Reset the quiz
  resetQuiz();
}

// Function to reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questions = [];
  timerleft = 15;
}
