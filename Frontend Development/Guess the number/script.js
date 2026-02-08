const input = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const prevGuesses = document.querySelector(".guesses");
const guessCount = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowOrHi");
 const randomElement = document.querySelector(".random");
const startOver = document.querySelector(".resultParas");
// prevGuesses = document.querySelector("#guesses");

let prevGuessesList = [];
let playGame = true;
let guessCounting = 10;
const p = document.createElement("p");
let random = parseInt(Math.random() * 100 + 1);

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //   const min = 1;
    //   const max = 100;
    //   let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Random" ,random);
    if (!playGame) return;
    const guess = parseInt(input.value);
    validCheck(guess);
  });
}
//   if (isNaN(input.value) || input.value < 0 || input.value > 100) {
//     console.log("Enter the right number");
//     win.innerHTML = "Enter the correct integer!";

//     return;
//   } else {
//     if (guessCounting == 0) {
//       endGame();
//       return;
//     }
//     if (input.value == random) {
//       win.innerHTML = "YOU GUESSED THE RIGHT!";
//       guessCount.innerHTML = "0";
//       prevGuesses.innerHTML = "0";
//       return;
//     } else {
//       win.innerHTML = "";
//       //   if (input.value < random) lowHigh.innerHTML = "Low";
//       //   else lowHigh.innerHTML = "High";
//       prevGuessesList.push(input.value);
//       // function list(){
//       //     prevGuessesList.forEach(
//       //     function(e){
//       //     console.log(e);
//       //     return e;
//       //     }
//       //     )
//       // }
//       prevGuesses.innerHTML = prevGuessesList.join(",");
//       guessCounting--;
//       guessCount.innerHTML = guessCounting;
//     }

function validCheck(guess) {
  if (isNaN(guess) || guess < 0 || guess > 100) {
    console.log("Enter the right number");
    displayMessage("Enter the right number");
  } else {
    prevGuessesList.push(guess);
    if (guessCounting === 0) {
      let message = "YOU LOOSE BUDDY!";
      displayLowHigh(message);
      displayRandomNo(`Random Number was ${random} 😂`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == random) {
    let message = "YOU GUESSED THE RIGHT!";
    displayLowHigh(message);
    endGame();
  } else if (guess < random) {
    lowHigh.innerHTML = "Low";
    let message = "Low";
    guessCounting--;
    displayLowHigh(message);
    displayMessage();
  } else {
    lowHigh.innerHTML = "High";
    let message = "high";
    guessCounting--;
    displayLowHigh(message);
    displayMessage();
  }
}

function displayLowHigh(message){
    lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayRandomNo(message){
    randomElement.innerHTML = `<h2>${message}</h2>`;
}
function displayMessage() {

  prevGuesses.innerHTML = prevGuessesList.forEach(function (e) {
    console.log(e);
});
prevGuesses.innerHTML = prevGuessesList.join(',');
  guessCount.innerHTML = guessCounting;
}

function endGame() {
  input.setAttribute("disabled", "");
  guessCount.innerHTML = "0";
  prevGuesses.innerHTML = "0";
  //lowHigh.innerHTML = "";
  p.classList.add("button");
  p.innerHTML = `<h2 id="newBtn">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newButton = document.querySelector("#newBtn");
  newButton.addEventListener("click", function f(e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuessesList = [];
    guessCounting = 10;
    guessCount.innerHTML = "10";
    lowHigh.innerHTML = "";
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
