const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

const questions = [
    { question: 'O céu é azul.', answer: true },
    { question: 'A grama é roxa.', answer: false },
    { question: 'HTML é uma linguagem de programação.', answer: false },
    { question: 'JavaScript é usado para adicionar interatividade a páginas web.', answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
        resultText.textContent = 'Correto!';
        score++;
    } else {
        resultText.textContent = 'Incorreto!';
    }
    scoreDisplay.textContent = `Pontuação: ${score}`;
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
    } else {
        resultText.textContent = `Fim do jogo! Sua pontuação final é: ${score} de ${questions.length}`;
        nextBtn.style.display = 'none';
    }
}

trueBtn.addEventListener('click', () => checkAnswer(true));
falseBtn.addEventListener('click', () => checkAnswer(false));
nextBtn.addEventListener('click', nextQuestion);

loadQuestion();