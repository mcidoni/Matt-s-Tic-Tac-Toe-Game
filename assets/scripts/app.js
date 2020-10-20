'use strict'

const events = require('./auth/events')
$(() => {

  // POST sign-up
  $('#sign-up-form').on('submit', events.onSignUp)
  // POST sign-in
  $('#sign-in-form').on('submit', events.onSignIn)
  // PATCH change-password
  $('#change-password-form').on('submit', events.onChangePassword)
  // DELETE sign-out
  $('#sign-out').on('click', events.onSignOut)

  
  $('#create-game').on('click', events.onCreateGame)

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  let currentPlayer = '✕'

  const gameBoard = ['','','','','','','','','']

  // Our box click event handler
  const onSquareClick = (event) => {
    console.log('click')
    
    // Select the box that was clicked, event.target
    const box = $(event.target)
    const index = box.data("num")
    
    // only execute code below if empty square is clicked
    
    if(!box.text()) {
          // If the value at "index" in the gameBoard array ==="", I should "return" and do nothing 
    gameBoard[index] = currentPlayer
    console.log(gameBoard)

    // Then set the text to the current player
    box.text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
    }
  }

  // function checkWin(currentPlayer) {

  // }
  // Select all of the squares, $('.box'), add an event listener so that `on`
  // every 'click' the `onSquareClick` event handler is called.
  $('.square').on('click', onSquareClick)
})





