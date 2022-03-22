// get elements
const question = document.getElementById("question");
// we need to make this an array because it is a collection of classes
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

// this is basically the state of the game
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// this is basically a collection of objects in an array
// question, choices 1-4, and the answer as an integer value
let questions = [];

//fetch questions
fetch("https://opentdb.com/api.php?amount=150&type=multiple")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      // get a random index between 0-3
      formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      // iterate through each answer choice, put them as choice 1,2,3,4, s
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

//CONSTANTS
// how many points per correct answert
const CORRECT_BONUS = 10;
// maximum questions we want to load in the quiz
const MAX_QUESTIONS = 5;

// start the game
startGame = () => {
  // set the state to the start values
  questionCounter = 0;
  score = 0;
  // availableQuestions is all elements in the questions array
  availableQuestions = [...questions];
  // get a new question function
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //set the most recent score to the score
    localStorage.setItem("mostRecentScore", score);

    // go to the end page
    return window.location.assign("end.html");
  }

  // increment the question
  questionCounter++;

  // set the text for the question counter
  progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
  // update the progress bar, this turns the width decimal to a percentage
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // question index (we will be doing 1-3)
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // current question = question[1] etc...
  currentQuestion = availableQuestions[questionIndex];

  // set the inner text of the question
  question.innerText = currentQuestion.question;

  // loop through the question choices
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  // start at the index of 1
  availableQuestions.splice(questionIndex, 1);

  // are we accepting answers
  acceptingAnswers = true;
};

// loop through each choice using the data-number
choices.forEach((choice) => {
  // add a click listner. e is the target for the listener
  choice.addEventListener("click", (e) => {
    // if not accepting answers, return no event
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    // the selected choice is the target on the element
    const selectedChoice = e.target;
    // selected answer is the selected choice in the dataset matching the number
    const selectedAnswer = selectedChoice.dataset["number"];

    // apply a class based on whether choice | if correct else incorrect
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // set a timeout so the styling gets removed
    setTimeout(() => {
      // remove the class that was applied
      selectedChoice.parentElement.classList.remove(classToApply);
      // then load the next question
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// start the game
// startGame();
