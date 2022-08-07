const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'calculate'],
        correct: 2
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'besides'],
        correct: 2
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['rapid', 'charity'],
        correct: 1
    },
    {
        quiz: ['cat', 'donkey', 'tortoise'],
        options: ['badger', 'garage'],
        correct: 1
    },
    {
        quiz: ['Mustang', 'Ford', 'Volkswagon'],
        options: ['Swift', 'Mercedes'],
        correct: 2
    },
    {
        quiz: ['ham', 'tuna', 'cheese'],
        options: ['pink', 'chicken'],
        correct: 1
    }
]

let score = 0

let clicked = []

scoreDisplay.textContent = score


function populateQuestions() {
    questions.forEach(questions => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "***"
        questionBox.append(logoDisplay)
        
        questions.quiz.forEach(tip => {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)
        })


        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        questions.options.forEach((option, optionIndex) => {
           const questionButton = document.createElement("button")
           questionButton.classList.add('question-button')
           questionButton.textContent = option

           questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1,  questions.correct))

           questionButtons.append(questionButton)
        })


       const answerDisplay = document.createElement('div')
       answerDisplay.classList.add('answer-display')
    questionBox.append(answerDisplay)

        questionDisplay.append(questionBox)
    })
}

populateQuestions()



function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if(optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "Correct!", 'correct')
    }
    else {
        score --
        scoreDisplay.textContent = score
        addResult(questionBox, "Incorrect!", 'incorrect')

    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
    // questionButton.addEventListener.onClick.setEnabled(false)
    
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('incorrect')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer

}
