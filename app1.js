// ========Q 13======
// NUMBER GUESSING GAME
const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; //math random: genarate a number b/w 1-100
let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = prompt(`Guess a number between  ${minimum} - ${maximum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < minimum || guess > maximum) {
    alert("please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      alert("To low try again !");
    } else if (guess > answer) {
      alert("To high try again !");
    } else {
      alert(
        `CORRECT THE answer was ${answer}. It took you ${attempts}attempts`
      );
      running = false;
    }
  }
}
// / ======Q 15======
//    COLLECT USER INPUT
//  let userInput ='';
let userInput = prompt("Enter your input");
let k = 0;
do {
  userInput = prompt(`Enter your input `);

  if (userInput.toLowerCase() !== "stop") {
    console.log(`you entered: ${userInput}`);
    k++;
  }
} while (userInput.toLocaleLowerCase() !== "stop");
console.log("user input collection stopped");
