const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["text-style", "font-color", "color", "background-color"],
        correct: 2
    },
    {
        question: "Which of these is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correct: 2
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = (1:'red', 2:'blue')", "var colors = ['red', 'blue']", "var colors = 'red', 'blue'", "var colors = {red, blue}"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create myFunction()"],
        correct: 0
    },
    {
        question: "Which property is used to center a flex item vertically?",
        options: ["justify-content", "align-items", "text-align", "vertical-align"],
        correct: 1
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
        correct: 2
    },
    {
        question: "What is the purpose of 'use strict' in JavaScript?",
        options: ["Enables debugging mode", "Strictly defines variable types", "Enforces stricter parsing and error handling", "Prevents use of external libraries"],
        correct: 2
    },
    {
        question: "Which CSS property controls the layout of elements using a grid system?",
        options: ["display: flex", "display: grid", "layout: grid", "grid-template"],
        correct: 1
    }
];

//state varialbes
let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 15;
let timerInterval;
let isAswered = false;


//Dom Elements
let startScreen = document.getElementById("start-screen");
let quizScreen = document.getElementById("quiz-screen");
let resultScreen = document.getElementById("result-screen");

let startBtn = document.getElementById("start-btn");
let timerText = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

let progress = document.getElementById("progress");

const resultScore = document.getElementById("score");
const hightScore = document.getElementById("highScore")
const restartBtn = document.getElementById("restartBtn");



startBtn.addEventListener("click",startQuiz);
function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    showScreen("quiz-screen");
    loadQuestions();
}

function loadQuestions(){
    isAswered = false;
    timeLeft = 15;
    timerText.textContent = timeLeft;
    progress.textContent = `Question ${currentQuestionIndex + 1} out of ${questions.length}`
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.textContent = "";
    currentQuestion.options.forEach((option,index)=>{
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-btn";
        button.addEventListener("click",()=> selectOption(index))
        optionsContainer.appendChild(button);
    });
    startTimer();
}
function startTimer(){
    timerText.textContent = `Time Left: ${timeLeft}`;
    clearInterval(timerInterval);
    timerInterval = setInterval(()=>{
        timeLeft--;
        timerText.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft <= 0){
            clearInterval(timerInterval);
            handleTimeOut();
        }
    },1000)
}

function handleTimeOut(){
    isAswered = true;
    const currentQuestion = questions[currentQuestionIndex];
    const optionsButtons = optionsContainer.querySelectorAll(".option-btn");
    optionsButtons[currentQuestion.correct].classList.add("correct")
    disableOptions()
    setTimeout(nextQuestion,1500)
}
function disableOptions(){
    const optionsButtons = optionsContainer.querySelectorAll(".option-btn");
    optionsButtons.forEach(btn => btn.disabled = true)
}


function selectOption(index){
isAswered = true;
const currentQuestion = questions[currentQuestionIndex];
const optionsButtons = optionsContainer.querySelectorAll(".option-btn");
if (index == currentQuestion.correct){
    score++;
    optionsButtons[index].classList.add('correct');
}
else{
optionsButtons[index].classList.add("wrong");
optionsButtons[currentQuestion.correct].classList.add("correct");
}
disableOptions();
setTimeout(nextQuestion,1500);

}

function nextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){

        loadQuestions();
    }
    else{
        showResult();

    }
}

function showResult(){

    resultScore.textContent = `your score is ${score}`
    let savedScore = localStorage.getItem("highScore");
    if(!savedScore){
        localStorage.setItem("highScore",score)
    }
    if (score > savedScore){
        localStorage.setItem("highScore",score);
    }
    hightScore.textContent = `All time high score is ${savedScore}`;
    showScreen("result-screen");

}

restartBtn.addEventListener("click",()=>{
    startQuiz()
})
function showScreen(screenId){
    [startScreen,quizScreen,resultScreen].forEach(screen =>{
        screen.classList.add("hidden");
            });
        document.getElementById(screenId).classList.remove("hidden");
}

showScreen("start-screen");
