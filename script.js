var quizDisplay = document.getElementById('display');
var timeLeft = document.querySelector('.time-left');
var quizContainer = document.getElementById('container');
var nextBtn = document.getElementById('next-button');
var countOfQuestion = document.querySelector('.number-of-question');
var displayContainer = document.getElementById('display-container');
var scoreContainer = document.querySelector('.score-container');
var restart = document.getElementById('restart');
var userScore = document.getElementById('user-score');
var startScreen = document.querySelector('.start-screen');
var startButton = document.getElementById('start-button');
var questionCount;
var scoreCount = 0;
var count = 11;
var countdown;

var quizArray = [
  {
    id: '0',
    question: 'How many Infinity Stones are there?',
    options: ['3', '5', '6', '10'],
    correct: '6',
  },
  {
    id: '1',
    question: "What's the heavist organ in the human body?",
    options: ['Brain', 'Liver', 'Skin', 'Heart'],
    correct: 'Liver',
  },
  {
    id: '2',
    question:
      'Which of these EU countries does not use the euro as its currency?',
    options: ['Poland', 'Denmark', 'Sweden', 'All of the above'],
    correct: 'All of the above',
  },
];

var quizDisplay = (questionCount) => {
    var quizCards = document.querySelectorAll(".container_mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");

        
    });

    quizCards[questionCount].classList.remove("hide");
};


function quizApp() {
  // This will randomly sort the questions
  quizArray.sort(() => Math.random() - 0.5);

  // Creating the quiz
  for (var i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);

    var div = document.createElement('div');
    div.classList.add("container-mid","hide");

    countOfQuestion.innerHTML = 1 + 'of' + quizArray.length + 'Question';

    var question_div = document.createElement('p');
    question_div.classList.add('question');
    question_div.innerHTML = i.question;
    div.appendChild(question_div);

    div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;

       quizContainer.appendChild(div);
  }
}

function startup(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    quizApp();
    quizDisplay(questionCount);

}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload=() => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
