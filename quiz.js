function checkAnswer() {
  const correctAnswer = "4";

  const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
  let userAnswer;

  if (selectedRadioButton) {
    userAnswer = selectedRadioButton.value;
  }

  const feedbackElement = document.getElementById("feedback");

  if (userAnswer) {
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedbackElement.textContent = "Please select an answer.";
  }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
