let yourMove = ''
let computerMove = ''

// TEXT INSTRUCTIONS
const initialize = () => {
  document.querySelector('.output1').textContent = 'Choose Paper, Rock or Scissors'
}

document.addEventListener('DOMContentLoaded', initialize)

let rock = document.querySelector('.rock')
let scissors = document.querySelector('.scissors')
let paper = document.querySelector('.paper')

// FOR LOOP CONTAINING MATH LOGIC
let startGame = () => {
  computerMove = Math.random()
  if (computerMove < 0.33) {
    computerMove = 'rock'
    console.log('rock')
  } else if (computerMove <= 0.64) {
    computerMove = 'paper'
    console.log('paper')
  } else {
    computerMove = 'scissors'
    console.log('scissors')
  }

// I DONT WANT THIS TEXT AREA---JUST WIN, LOSE OR DRAW
  document.querySelector('textstatus').textContent = 'I chose...' + computerMove
  compare(yourMove, computerMove)

// VARIABLE COMPARISONS
}
let compare = (choice1, choice2) => {
  if (choice1 === choice2) {
    document.querySelector('.textstatus').textContent = 'A Draw!'
  } if (choice1 === 'scissors') {
    if (choice2 === 'paper') {
      document.querySelector('.output').textContent = 'You Win!'
    } else {
      document.querySelector('.output').textContent = 'You Lose!'
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      document.querySelector('.output').textContent = 'You Win!'
    } else {
      document.querySelector('.output').textContent = 'You Lose!'
    }
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      document.querySelector('.output').textContent = 'You Win!'
    } else {
      document.querySelector('.output').textContent = 'You Lose!'
    }
  }
}

// CLICK FUNCTIONALITY
rock.addEventListener('click', function () {
  yourMove = 'rock'
  startGame()
})
scissors.addEventListener('click', function () {
  yourMove = 'scissors'
  startGame()
})
paper.addEventListener('click', function () {
  yourMove = 'paper'
  startGame()
})
