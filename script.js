const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }




function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }


}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions = [
    {
        question : 'What is my middle name?',
        answers: [
            { text: 'Anne', correct: true},
            { text: 'Sentry', correct: false},
            { text: 'Futuristic Baddie', correct: false},
            { text: 'Karen', correct: false}
            
        ]
    },
    {
        question : 'How old am I??',
        answers: [
            { text: 'mentally, 12', correct: true},
            { text: '20', correct: true},
            { text: '19 forever', correct: false},
            { text: '35', correct: false}
            
        ]
    },
    {
        question : 'Is Yam mid?',
        answers: [
            { text: 'No', correct: true},
            { text: 'Non', correct: true},
            { text: 'Nein', correct: true},
            { text: '番号', correct: true}
            
        ]
    },
    { 
        question : 'Who is my favourite comic book writer?',
        answers: [
            { text: 'Brian Bendis', correct: false},
            { text: 'J*son A*ron', correct: false},
            { text: 'Ed Brubaker', correct: true},
            { text: 'Greg Rucka', correct: false}
            
        ]
    },
    {
        question : 'What color am i wearing today?',
        answers: [
            { text: 'Blue', correct: false},
            { text: 'Black', correct: true},
            { text: 'Red', correct: false},
            { text: 'Yellow', correct: false}
            
        ]
    },
    {
        question : 'What is my favourite fruit?',
        answers: [
            { text: 'Watermelon', correct: false},
            { text: 'Bananas', correct: true},
            { text: 'Apples', correct: false},
            { text: 'Grapes', correct: false}
            
        ]
    },
    {
        question : 'Are you bored yet?',
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: true},
            
            
        ]
    },
    {
        question : 'Are you awesome?',
        answers: [
            { text: 'YES', correct: true},
            { text: 'bitch, duhhh', correct: true},
            { text: 'no <3', correct: true},
            { text: 'ok', correct: true}
            
        ]
    }

]




   
   













