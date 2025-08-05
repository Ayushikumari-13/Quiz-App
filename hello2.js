const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2000", "2010", "1990"],
    answer: "1995"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Oracle"],
    answer: "Netscape"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.classList.remove("selected");
    btn.disabled = false;
  });

  document.getElementById("nextBtn").disabled = true;
}

function selectOption(btn) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => {
    b.disabled = true;
    b.classList.remove("selected");
  });

  btn.classList.add("selected");
  const selectedAnswer = btn.textContent;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("scoreText").textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

window.onload = loadQuestion;
