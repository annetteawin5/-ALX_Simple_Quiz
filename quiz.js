function checkAnswer() {
    const correctAnswer = "4";
}

let  checkedradiobutton = document.querySelector('input[name="quiz"]:checked');


const userAnswer = selectedradiobutton.value;

if (username === correctAnswer) {
    feedbackElement.textcontent = "Correct! Well done.";
} else {
    feedbackElement.textcontent = "That's incorrect. Try again!";
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
