const homeElement = document.getElementById('home');
const quizElement = document.getElementById('quiz');
const endElement = document.getElementById('end');
const highscoresElement = document.getElementById('highscores');
const startButton = document.getElementById('start-btn');
const highscoresButton = document.getElementById('highscores-btn');
const questionElement = document.getElementById('question');
const choiceElements = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const timerElement = document.getElementById('timer');
const finalScoreElement = document.getElementById('finalScore');
const usernameElement = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreBtn');
const playAgainButton = document.getElementById('play-again');
const goHomeButton = document.getElementById('go-home');
const returnHomeButton = document.getElementById('return-home');
const highScoresList = document.getElementById('highScoresList');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timer;
let timeLeft = 30;

const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        choice1: "Londres",
        choice2: "Berlín",
        choice3: "París",
        choice4: "Madrid",
        answer: 3
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        choice1: "Vincent van Gogh",
        choice2: "Leonardo da Vinci",
        choice3: "Pablo Picasso",
        choice4: "Miguel Ángel",
        answer: 2
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        choice1: "Tierra",
        choice2: "Marte",
        choice3: "Venus",
        choice4: "Júpiter",
        answer: 4
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        choice1: "1939",
        choice2: "1941",
        choice3: "1945",
        choice4: "1914",
        answer: 1
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        choice1: "Oxígeno",
        choice2: "Hidrógeno",
        choice3: "Carbono",
        choice4: "Hierro",
        answer: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        choice1: "Nilo",
        choice2: "Amazonas",
        choice3: "Misisipi",
        choice4: "Yangtsé",
        answer: 2
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        choice1: "1965",
        choice2: "1969",
        choice3: "1971",
        choice4: "1975",
        answer: 2
    },
    {
        question: "¿Cuál es el país más poblado del mundo?",
        choice1: "India",
        choice2: "Estados Unidos",
        choice3: "China",
        choice4: "Rusia",
        answer: 3
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        choice1: "Federico García Lorca",
        choice2: "Miguel de Cervantes",
        choice3: "Gabriel García Márquez",
        choice4: "Pablo Neruda",
        answer: 2
    },
    {
        question: "¿Cuál es el océano más grande?",
        choice1: "Atlántico",
        choice2: "Índico",
        choice3: "Ártico",
        choice4: "Pacífico",
        answer: 4
    },
    {
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        choice1: "Fémur",
        choice2: "Húmero",
        choice3: "Tibia",
        choice4: "Radio",
        answer: 1
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        choice1: "K2",
        choice2: "Monte Everest",
        choice3: "Aconcagua",
        choice4: "Monte Kilimanjaro",
        answer: 2
    },
    {
        question: "¿Qué científico propuso la teoría de la relatividad?",
        choice1: "Isaac Newton",
        choice2: "Galileo Galilei",
        choice3: "Albert Einstein",
        choice4: "Stephen Hawking",
        answer: 3
    },
    {
        question: "¿Cuál es el animal terrestre más rápido?",
        choice1: "León",
        choice2: "Guepardo",
        choice3: "Tigre",
        choice4: "Gacela",
        answer: 2
    },
    {
        question: "¿En qué continente está ubicado Egipto?",
        choice1: "Asia",
        choice2: "Europa",
        choice3: "África",
        choice4: "Oceanía",
        answer: 3
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15; 

startButton.addEventListener('click', startGame);
highscoresButton.addEventListener('click', showHighscores);
choiceElements.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
            selectedChoice.parentElement.classList.add(classToApply);
        } else {
            selectedChoice.parentElement.classList.add(classToApply);
            
            const correctAnswerElement = choiceElements.find(
                choice => choice.dataset['number'] == currentQuestion.answer
            );
            correctAnswerElement.parentElement.classList.add('correct');
        }

        setTimeout(() => {
            choiceElements.forEach(choice => {
                choice.parentElement.classList.remove('correct', 'incorrect');
            });
            getNewQuestion();
        }, 2000); 
    });
});

usernameElement.addEventListener('keyup', () => {
    saveScoreButton.disabled = !usernameElement.value;
});

saveScoreButton.addEventListener('click', saveHighScore);
playAgainButton.addEventListener('click', startGame);
goHomeButton.addEventListener('click', goToHome);
returnHomeButton.addEventListener('click', goToHome);

function startGame() {
    homeElement.classList.add('hide');
    highscoresElement.classList.add('hide');
    endElement.classList.add('hide');
    quizElement.classList.remove('hide');
    
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    scoreText.innerText = score;
    
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        clearInterval(timer);
        return endGame();
    }
    
    questionCounter++;
    progressText.innerText = `Pregunta ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    
    choiceElements.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    
    clearInterval(timer);
    timeLeft = 30;
    timerElement.innerText = timeLeft;
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        
        if (timeLeft <= 5) {
            timerElement.classList.add('warning');
        } else {
            timerElement.classList.remove('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            
            const correctAnswerElement = choiceElements.find(
                choice => choice.dataset['number'] == currentQuestion.answer
            );
            correctAnswerElement.parentElement.classList.add('correct');
            
            setTimeout(() => {
                choiceElements.forEach(choice => {
                    choice.parentElement.classList.remove('correct', 'incorrect');
                });
                getNewQuestion();
            }, 1500);
        }
    }, 1000);
}

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

function endGame() {
    quizElement.classList.add('hide');
    endElement.classList.remove('hide');
    finalScoreElement.innerText = score;
}

function saveHighScore(e) {
    e.preventDefault();
    
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    const score = {
        score: finalScoreElement.innerText,
        name: usernameElement.value
    };
    
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    goToHome();
}

function showHighscores() {
    homeElement.classList.add('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.remove('hide');
    
    highScoresList.innerHTML = '';
    
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    highScores.forEach(score => {
        const li = document.createElement('li');
        li.className = 'high-score';
        li.innerText = `${score.name} - ${score.score}`;
        highScoresList.appendChild(li);
    });
}

function goToHome() {
    homeElement.classList.remove('hide');
    quizElement.classList.add('hide');
    endElement.classList.add('hide');
    highscoresElement.classList.add('hide');
}