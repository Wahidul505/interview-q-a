import {
    htmlQuestions,
    cssQuestions,
    jsQuestion, reactQuestion,
    nodeMongoQuestion
} from './questions.js';



let questions = htmlQuestions;
let newQuestions = [];
const questionBtn = document.getElementById('question-btn');
const questionContainer = document.getElementById('question-container');
const aside = document.getElementById('aside');
const asideBtn = document.getElementsByClassName('aside-btn');
const topicContainer = document.getElementById('topic-container')


aside.addEventListener('click', function (e) {
    const topicBtn = e.target;
    const currentTopic = topicBtn.innerText;
    switch (currentTopic) {
        case "HTML":
            questions = htmlQuestions;
            topicContainer.innerText = currentTopic;
            newQuestions = [];
            break;
        case "CSS":
            questions = cssQuestions;
            topicContainer.innerText = currentTopic;
            newQuestions = [];
            break;
        case "JavaScript":
            questions = jsQuestion;
            topicContainer.innerText = currentTopic;
            newQuestions = [];
            break;
        case "ReactJS":
            questions = reactQuestion;
            topicContainer.innerText = currentTopic;
            newQuestions = [];
            break;
        case "Node|Mongo":
            questions = nodeMongoQuestion;
            topicContainer.innerText = currentTopic;
            newQuestions = [];
            break;

        default:
            break;
    }
});



function createRandomIndex() {
    const randomNum = Math.round(Math.random() * 100);
    if (randomNum >= questions.length) {
        return createRandomIndex();
    }
    else {
        return randomNum;
    }
};

function addQuestions() {
    const index = createRandomIndex();
    const exist = newQuestions.find(question => questions[index] === question);
    if (newQuestions.length < questions.length) {
        if (exist) {
            return addQuestions();
        }
        else {
            newQuestions.push(questions[index]);
            questionContainer.innerText = questions[index];
            console.log(newQuestions)
        }
    }
    else {
        newQuestions = [];
        questionContainer.innerText = "Completed!!!"
    }
}

questionBtn.addEventListener('click', function () {
    addQuestions();
})
