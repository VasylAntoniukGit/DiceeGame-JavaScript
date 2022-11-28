
var player1Random = Math.floor(Math.random() * 6) + 1;
var player2Random = Math.floor(Math.random() * 6) + 1;
var imagePlayer1 = "images/Dice" + player1Random + ".png";
var imagePlayer2 = "images/Dice" + player2Random + ".png";

document.querySelector(".img1").setAttribute("src", imagePlayer1);
document.querySelector(".img2").setAttribute("src", imagePlayer2);

if( player1Random > player2Random) {
   document.querySelector("h1").innerText = "Player 1 Wins";
}
else if (player2Random > player1Random) {
  document.querySelector("h1").innerText = "Player 2 Wins";
}
else {
  document.querySelector("h1").innerText = "Draw!";
}
