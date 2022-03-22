// get elements
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

// save the most recent score to the local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");

// set the final score inner text
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// add an event listener whener we have a keyup event in username input
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

// function to save the high score
saveHighScore = (e) => {
  console.log("save button clicked");
  e.preventDefault();

  const score = {
    // score set to random for testing purposes
    score: mostRecentScore,
    // username value gets saved
    name: username.value,
  };

  // push the score into the highScores array
  highScores.push(score);

  // if b score is higher than a, put b before a. sort the array basically
  highScores.sort((a, b) => b.score - a.score);

  // cut off everything after index[max high score]
  highScores.splice(MAX_HIGH_SCORES);

  // update the highscores in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Hit save button, go to the home screen
  window.location.assign("./index.html");
};
