const questions = [
  {
    question:
      "The mass of the lift is 200 kg. When it ascends with an acceleration of 4 m/s², what is . the tension in the cable supporting the lift?",
    answers: [
      { text: " 2800 N", correct: true },
      { text: "800 N", correct: false },
      { text: "4200 N", correct: false },
      { text: "2000 N", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements about the Bohr model of the hydrogen atom is false?",
    answers: [
      {
        text: " Acceleration of the electron in n = 2 orbit is less than that in n = 1 orbit",
        correct: false,
      },
      {
        text: "Angular momentum of the electron in n = 2 orbit is more than in n = 1 orbit",
        correct: false,
      },
      {
        text: "Potential Energy of the electron in n = 2 orbit is less than that in n = 1 orbit",
        correct: true,
      },
      {
        text: " Kinetic Energy of the electron in n = 2 orbit is less than that in n = 1 orbit",
        correct: false,
      },
    ],
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ],
  },
  {
    question: "What is the value of gravitational acceleration on Earth?",
    answers: [
      { text: "8.9 m/s²", correct: false },
      { text: "10.5 m/s²", correct: false },
      { text: " 9.8 m/s²", correct: true },
      { text: "12.6 m/s²", correct: false },
    ],
  },
  {
    question: "What is the oxidation state of oxygen in H₂O₂?",
    answers: [
      { text: "-2", correct: false },
      { text: " 0", correct: false },
      { text: " -1", correct: true },
      { text: "+1", correct: false },
    ],
  },
  {
    question: "In a right-angle triangle, what is the sine of 90°??",
    answers: [
      { text: "1", correct: true },
      { text: " 0", correct: false },
      { text: "Undefined", correct: false },
      { text: "0.5", correct: false },
    ],
  },
  {
    question: "What is the chemical formula of Sodium bicarbonate?",
    answers: [
      { text: "NaOH", correct: false },
      { text: "Na₂CO₃", correct: false },
      { text: "NaCl", correct: false },
      { text: "NaHCO₃", correct: true },
    ],
  },
  {
    question: "What is the focal length of a convex lens with a power of +2D?",
    answers: [
      { text: "0.2 m", correct: false },
      { text: " -0.5 m", correct: false },
      { text: "0.5 m", correct: true },
      { text: " 2 m", correct: false },
    ],
  },
  {
    question: "Which element has the highest electronegativity?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Fluorine", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Chlorine", correct: false },
    ],
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      { text: " 3 × 10⁸ m/s", correct: true },
      { text: "3 × 10⁹ m/s", correct: false },
      { text: "3 × 10⁵ m/s", correct: false },
      { text: "3 × 10⁶ m/s", correct: false },
    ],
  },
  {
    question:
      "What is the standard Gibbs free energy change (ΔG°) for a reaction at equilibrium?",
    answers: [
      { text: "Zero", correct: true },
      { text: "Cannot be determined", correct: false },
      { text: " Negative", correct: false },
      { text: "Positive", correct: false },
    ],
  },
  {
    question: "What is the solution to the equation 2x+5=112x + 5 = 112x+5=11?",
    answers: [
      { text: "x=4x = 4x=4", correct: false },
      { text: "x=3x = 3x=3", correct: true },
      { text: "x=5x = 5x=5", correct: false },
      { text: "x=2x = 2x=2", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
    ],
  },
  {
    question: "The value of sin⁡(30∘)sin(30^circ)sin(30∘) is?",
    answers: [
      { text: "0.7070.7070.707", correct: false },
      { text: "0.50.50.5", correct: true },
      { text: "111", correct: false },
      { text: "0.8660.8660.866", correct: false },
    ],
  },
  {
    question: "Find the area of a triangle with base 8 cm and height 6 cm.",
    answers: [
      { text: "28 cm²", correct: false },
      { text: "24 cm²", correct: true },
      { text: "14 cm²", correct: false },
      { text: "32 cm²", correct: false },
    ],
  },
  {
    question: "The work done by a force of 10 N that moves an object 5 m is?",
    answers: [
      { text: "15 J", correct: false },
      { text: "30 J", correct: false },
      { text: "50 J", correct: true },
      { text: "100 J", correct: false },
    ],
  },
  {
    question: "Which of the following is a property of an ideal gas?",
    answers: [
      { text: "It has intermolecular forces of attraction.", correct: false },
      { text: " It has a definite volume.", correct: false },
      { text: " It obeys Boyle's law at all temperatures.", correct: true },
      {
        text: "It behaves as an ideal gas only at high pressures.",
        correct: false,
      },
    ],
  },
  {
    question: " What is the molecular formula of butane?",
    answers: [
      { text: "C4H12C_4H_12C4​H1​2", correct: false },
      { text: "C3H8C_3H_8C3​H8​", correct: false },
      { text: "C4H10C_4H_{10}C4​H10​", correct: true },
      { text: "C4H8C_4H_8C4​H8​", correct: false },
    ],
  },
  {
    question: "Which of the following is a strong acid?",
    answers: [
      { text: "Formic acid", correct: false },
      { text: "Citric acid", correct: false },
      { text: "Hydrochloric acid", correct: true },
      { text: "Formic acid", correct: false },
    ],
  },
  {
    question:
      "A ball is dropped from a height of 20 m. How long will it take to reach the ground?",
    answers: [
      { text: "2.0 s", correct: true },
      { text: " 2.5 s", correct: false },
      { text: "3.0 s", correct: false },
      { text: "1.5 s", correct: false },
    ],
  },
  {
    question:
      "The refractive index of a material is 1.5. What is the critical angle for total internal reflection?",
    answers: [
      { text: "48°", correct: false },
      { text: "42°", correct: true },
      { text: "55°", correct: false },
      { text: "60°", correct: false },
    ],
  },
  {
    question: "What is the name of the river that flows through Egypt?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Ganges", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function hadndleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
