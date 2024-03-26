// Define quiz questions and answers
const quizData = [
    {
        question: "What is the capital of Australia?",
        answers: ["Sydney","Canberra","Melbourne","Brisbane"],
        correct: "Canberra"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird' ?",
        answers: ["Harper Lee",
           "J.K. Rowling",
            "Ernest Hemingway",
            "F. Scott Fitzgerald"],
        correct: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au",
            "Ag",
            "Fe",
            "Cu"],
        correct: "Au"
    },
    {
        question: "What is the largest ocean in the world?",
        answers: ["Atlantic Ocean",
           "Indian Ocean",
            "Arctic Ocean",
           "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Which element has the atomic number 6?",
        answers: ["Oxygen",
            "Carbon",
            "Nitrogen",
            "Hydrogen"],
        correct: "Carbon"
    },
    {
        question: "Who painted the Mona Lisa??",
        answers: ["Michelangelo",
            "Vincent van Gogh",
           "Leonardo da Vinci",
            "Pablo Picasso"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: ["William Shakespeare",
            "Arthur Miller",
           "Tennessee Williams",
            "George Bernard Shaw"],
        correct: "William Shakespeare"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China",
            "South Korea",
            "Japan",
            "Vietnam"],
        correct: "Japan"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus"],
        correct: "Blue Whale"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie",
            "Mother Teresa",
            "Jane Addams",
           "Wangari Maathai"],
        correct: "Marie Curie"
    },
    
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("restart");
let questionBox = document.querySelector(".question-box")
let scoreBox = document.querySelector(".score-box")

// Function to load question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    questionBox.innerText = `Question : ${currentQuestion + 1}/ ${quizData.length}`
    scoreBox.innerText = `Score : ${score}`
    answerElements.forEach((answerElement, index) => {
        answerElement.nextElementSibling.innerText = currentQuizData.answers[index];
        answerElement.parentElement.style.backgroundColor = ""; // Reset background color
        answerElement.checked = false; // Uncheck all radio buttons
        answerElement.disabled = false; // Enable all answer options
    });
    submitButton.style.display = "block"; // Display submit button
    nextButton.style.display = "none"; // Hide next button
}

// Function to check answer and update score
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return; // If no answer selected, do nothing
    const userAnswer = selectedAnswer.nextElementSibling.innerText;
    const correctAnswer = quizData[currentQuestion].correct;
    if (userAnswer === correctAnswer) {
        selectedAnswer.parentElement.style.backgroundColor = "#b1eab1"; // Mark correct answer as green
        score++;
    } else {
        selectedAnswer.parentElement.style.backgroundColor = "#f4bbbb"; // Mark incorrect answer as red
    }
    // Increment currentQuestion index
    currentQuestion++;
    // Hide submit button and show next button
    submitButton.style.display = "none";
    nextButton.style.display = "block";
}

// Event listener for submit button
submitButton.addEventListener("click", () => {
    checkAnswer();
});

// Event listener for next button
nextButton.addEventListener("click", () => {
    if (currentQuestion >= quizData.length) {
        // Show final result when all questions are answered
        quiz.innerHTML = `<div class="result">
                         <h2 class="result-heading"> Your Score : ${score}/${quizData.length} </h2>
                         <p class="result-para"> Congratulations on completing the quiz! </p>
                         <button class="button" onclick="location.reload()"> Play Again </button>
                       </div>`;
    } else {
        loadQuestion(); // Load next question
    }
});

// Event listener for restart button
restartButton.addEventListener("click", () => {
    // Reset variables and UI
    currentQuestion = 0;
    score = 0;
    loadQuestion(); // Load first question
});

// Load first question
loadQuestion();
