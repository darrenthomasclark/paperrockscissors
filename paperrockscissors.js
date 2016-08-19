let yourMove = ''
let computerMove = ''

// TEXT INSTRUCTIONS
const initialize = () => {
  document.querySelector('.output1').textContent = 'Choose Paper, Rock or Scissors'

  let rock = document.querySelector('.rock')
  let scissors = document.querySelector('.scissors')
  let paper = document.querySelector('.paper')

  // FOR LOOP CONTAINING MATH LOGIC
  let startGame = () => {
    computerMove = Math.random()
    if (computerMove < 0.33) {
        computerMove = "Rock"
    } else if (computerMove <= 0.64) {
      computerMove = 'Paper'
    } else {
      computerMove = 'Scissors'
    }
  // I DONT WANT THIS TEXT AREA---JUST WIN, LOSE OR DRAW
    document.querySelector('.computerreturn').textContent = '{I chose... ' + computerMove + "}"
    compare(yourMove, computerMove)
  }
  // VARIABLE COMPARISONS

  let compare = (choice1, choice2) => {
    console.log("your move: ", choice1, 'comp move: ', choice2);
    if (choice1 == choice2) {
      console.log('working');
      document.querySelector('.textstatus').textContent = 'A Draw!'
    }else if (choice1 === 'Scissors') {
      if (choice2 === 'Paper') {
        document.querySelector('.textstatus').textContent = 'You Win!'
      } else {
        document.querySelector('.textstatus').textContent = 'You Lose!'
      }
    }else if (choice1 === 'Paper') {
      if (choice2 === 'Rock') {
        // var node = document.createElement("img")  //<img/>
        // node.setAttribute('src','./images/rocksmall.png') //<img src='./images/rocksmall.png' />
        // const parentDiv = document.querySelector('.statuscontainerinternal')
        // const childDiv = document.querySelector('.textstatus')
        // parentDiv.insertBefore(node, childDiv)
        document.querySelector('.textstatus').textContent = 'You Win!'
      } else {
        document.querySelector('.textstatus').textContent = 'You Lose!'
      }
    }else if (choice1 === 'Rock') {
      if (choice2 === 'Scissors') {
        document.querySelector('.textstatus').textContent = 'You Win!'
      } else {
        document.querySelector('.textstatus').textContent = 'You Lose!'
      }
    }
  }

  // CLICK FUNCTIONALITY
  rock.addEventListener('click', function () {
    yourMove = 'Rock'
    startGame()
  })
  scissors.addEventListener('click', function () {
    yourMove = 'Scissors'
    startGame()
  })
  paper.addEventListener('click', function () {
    yourMove = 'Paper'
    startGame()
  })
}

document.addEventListener('DOMContentLoaded', initialize)
