var quizDisplay = document.getElementById("display");
var timeLeft = document.querySelector(".time-left");
var quizContainer = document.getElementById("container");
var nextBtn = document.getElementById("next-button");
var countOfQuestion = document.querySelector(".number-of-question");
var displayContainer = document.getElementById("display-container");
var scoreContainer= document.querySelector(".score-container");
var restart = document.getElementById("restart");
var userScore = document.getElementById("user-score");
var startScreen = document.querySelector(".start-screen");
var startButton = document.getElementById("start-button");
var questionCount;
var scoreCount = 0;
var count = 11;
var countdown;


const quizArray = [
    {id:"0",question:"How many Infinity Stones are there?",options:["3","5","6","10"], correct:"6"},
    {id:"1",question:"What's the heavist organ in the human body?",options:["Brain","Liver","Skin","Heart"], correct:"Liver"},
    {id:"2",question:"Which of these EU countries does not use the euro as its currency?",options:["Poland","Denmark","Sweden","All of the above"], correct:"All of the above"}

]