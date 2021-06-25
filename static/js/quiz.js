console.log("quiz.js running");

const quizData = [
    {
        question: "Where has Matt lived?",
        a: "Minneapolis, MN",
        b: "Seoul, South Korea",
        c: "Winchester, VA",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What programming language does Matt know?",
        a: "JavaScript",
        b: "Python",
        c: "SQL",
        d: "All of the above", 
        correct: "d",
    },
    {
        question: "What are Matt's best soft skills?",
        a: "Team Player",
        b: "Quick Learner",
        c: "Problem Solver",
        d: "All of the above", 
        correct: "d",
    },
    {
        question: "Should you hire Matt?",
        a: "Yes!",
        b: "Of Course!",
        c: "Duh - it's a no brainer!",
        d: "All of the above", 
        correct: "d",
    },
];

console.log(quizData);

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>

                <button class="quiz" onclick="location.reload()">Reload</button>
            `
        }
    }
})