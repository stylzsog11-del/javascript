/* Question Multi-dimensional array */
var questions = [
   ["What is the capital of France?", 2, "Berlin", "Madrid", "Paris"],
   ["Which planet is known as the Red Planet?", 1, "Earth", "Mars", "Jupiter"],
   ["What is the largest ocean on Earth?", 2, "Atlantic Ocean", "Indian Ocean", "Pacific Ocean"]
];

var count = 0;
var score = 0;

// Initialize the game by loading the Play Game button
function initGame() {
    document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Game</button>';
    document.getElementById('question').innerHTML = '';
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('score').innerHTML = '';
}

// Play Game function
function playGame() {
    if (questions.length === 0) {
        // No more questions, show final score
        document.getElementById('question').innerHTML = 'Game Complete!';
        document.getElementById('answers').innerHTML = '';
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('score').innerHTML = 'Final Score: ' + score + ' out of 3';
        document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
        return;
    }

    // Get current question
    var currentQuestion = questions.shift();
    var questionText = currentQuestion.shift();
    var correctIndex = currentQuestion.shift();
    
    // Display question
    document.getElementById('question').innerHTML = questionText;
    
    // Create answer list
    var answersList = '<li><a href="#" onclick="checkAnswer(0, ' + correctIndex + '); return false;">' + currentQuestion[0] + '</a></li>';
    answersList += '<li><a href="#" onclick="checkAnswer(1, ' + correctIndex + '); return false;">' + currentQuestion[1] + '</a></li>';
    answersList += '<li><a href="#" onclick="checkAnswer(2, ' + correctIndex + '); return false;">' + currentQuestion[2] + '</a></li>';
    
    document.getElementById('answers').innerHTML = answersList;
    document.getElementById('prompt').innerHTML = '<p>Click the best answer:</p>';
    document.getElementById('feedback').innerHTML = '';
}

// Check Answer function
function checkAnswer(selectedIndex, correctIndex) {
    var feedback = document.getElementById('feedback');
    
    if (selectedIndex === correctIndex) {
        feedback.innerHTML = 'Correct! Well done!';
        feedback.className = 'correct';
        score++;
    } else {
        feedback.innerHTML = 'Incorrect! The correct answer was option ' + (correctIndex + 1) + '.';
        feedback.className = 'incorrect';
    }
    
    count++;
    
    // Check if more questions available
    if (questions.length > 0) {
        document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Continue Game</button>';
    } else {
        // Game over
        setTimeout(function() {
            document.getElementById('question').innerHTML = 'Game Complete!';
            document.getElementById('answers').innerHTML = '';
            document.getElementById('feedback').innerHTML = '';
            document.getElementById('score').innerHTML = 'Final Score: ' + score + ' out of 3';
            document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
        }, 2000);
    }
}

// Initialize game when page loads
window.onload = function() {
    initGame();
};