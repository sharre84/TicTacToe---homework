var game = {
  player1: {
    marker: "X"

  },
  player2:{
    marker: "O"
  }
}

var currentPlayer = game.player1
function switchTurns(){
  if(currentPlayer == game.player1){
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}

var squares = document.querySelectorAll(".square");

//   square.addEventListener("clicks", function(){
//     console.log("Clicked")
// })
for(var i = 0; i < squares.length; i += 1)  {
  squares[i].addEventListener("click", function() {
    console.log(this)


// check if the square has already been marked
// mark an x or an o
// check to see if thers a winner

  switchTurns()

  })
}
