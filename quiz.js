// Array of questions and answers
const questions = [
    "What color is the sky?",
    "What is the capital of France?",
    "What do bees make?"
];
const answers = [
    "blue",
    "paris",
    "honey"
];

// Quiz function
function quiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let userAnswer = "";
        while (guesses > 0) {
            let input = prompt(questions[i] + " (" + guesses + " tries left)");
            if (input === null) {
                alert("Quiz cancelled.");
                return score;
            }
            userAnswer = input.toLowerCase();
            if (userAnswer === answers[i]) {
                score += guesses;
                alert("Correct! +" + guesses + " points.");
                break;
            } else {
                guesses--;
                if (guesses > 0) {
                    alert("Incorrect. Try again.");
                } else {
                    alert("Out of tries! The correct answer was: " + answers[i]);
                }
            }
        }
    }
    return score;
}

// Run the quiz and display the result
const totalScore = quiz();
document.getElementById("quiz-result").textContent = "Your total score: " + totalScore;