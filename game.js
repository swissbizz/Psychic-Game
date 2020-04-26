   
//This JS File is linked to index2.html for Psychic Game
var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  var wins = 0;
  var losses = 0;
  var chances = 15;
  var guessArray = [];
  
  var confirmPsychic = confirm("Wit beyond measure is man’s greatest treasure.");
  
  if (confirmPsychic) {
    alert("Is there a chance you have powers of Divination?");
    alert("See if you can guess which letter the Crystal Ball Shows!");
  } else {
    alert("Well, it may have escaped your notice, but life isn’t fair.");
    location.reload();
  }
  
  // Setup event function for key press
  document.onkeyup = function(event) {
    var userGuess = event.key;
  
    var computerGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
    // Checks to insure that the userGuess is in the array of letters.
    if (computerChoices.includes(userGuess)) {
      // If the user guess matches computer guess, you must have ESP
      if (userGuess === computerGuess) {
        wins++;
        guessArray.push(userGuess);
        chances--;
      }
      // If the user guess doesn't match
      else if (userGuess !== computerGuess) {
        losses++;
        guessArray.push(" " + userGuess);
        chances--;
      }
      // Chances = 0
      if (chances === 0) {
        alert("Tut, tut — fame clearly isn’t everything");
        location.reload();
      }
      // Losses Reaches 10
      else if (losses === 10) {
        alert(
          "Avada Kedavra!"
        );
        location.reload();
      }
      // If Wins = 10
      // Big if they get it right
      else if (wins === 10) {
        alert(
          "You're a Wizard Harry..."
        );
        location.reload();
      }
    } else {
      // If the user enters any character other than a letter
      alert("That was not a letter Mister Potter!");
    }
  
    var html =
      "<p>You chose: " +
      userGuess +
      "</p>" +
      "<p>The computer was thinking: " +
      computerGuess +
      "</p>" +
      "<p>You previously guessed: " +
      guessArray +
      "</p>" +
      "<p>Chances:" +
      chances +
      "</p>" +
      "<br/> <p>Wins: <span id='wins'>" +
      wins +
      "</span></p>" +
      "<p>Losses: <span id='losses'>" +
      losses +
      "</span></p>";
  
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  };