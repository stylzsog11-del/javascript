/* Question Multi-dimensional array */
var questions = [
   ["What is the capital of France?", 2, "Berlin", "Madrid", "Paris"],
   ["Which planet is known as the Red Planet?", 1, "Earth", "Mars", "Jupiter"],
   ["What is the largest ocean on Earth?", 2, "Atlantic Ocean", "Indian Ocean", "Pacific Ocean"]
];

// Create working copy of questions array to preserve original
var gameQuestions = [];

// Array to store user answers for review
var userAnswers = [];

// Array to store correct answers
var correctAnswers = [];

var count = 0;
var score = 0;

// Initialize the game by loading the Play Game button
function initGame() {
    // Reset arrays using array methods
    gameQuestions = questions.map(copyQuestion); // Create working copy
    userAnswers = []; // Clear user answers array
    correctAnswers = []; // Clear correct answers array
    count = 0;
    score = 0;
    
    document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Game</button>';
    document.getElementById('question').innerHTML = '';
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('score').innerHTML = '';
}

// Function to create a copy of each question (for map method)
function copyQuestion(question) {
    return question.slice(); // Creates a shallow copy of the array
}

// Play Game function
function playGame() {
    if (gameQuestions.length === 0) {
        // No more questions, show final score and review
        showGameResults();
        return;
    }

    // Get current question using shift() to remove from beginning
    var currentQuestion = gameQuestions.shift();
    
    // Extract question parts using array indexing
    var questionText = currentQuestion[0]; // First element
    var correctIndex = currentQuestion[1]; // Second element
    var answers = [currentQuestion[2], currentQuestion[3], currentQuestion[4]]; // Remaining elements
    
    // Store correct answer for later review
    correctAnswers[count] = correctIndex;
    
    // Display question
    document.getElementById('question').innerHTML = questionText;
    
    // Create answer list using array iteration
    var answersList = '';
    answers.forEach(function(answer, index) {
        answersList += '<li><a href="#" onclick="checkAnswer(' + index + ', ' + correctIndex + '); return false;">' + answer + '</a></li>';
    });
    
    document.getElementById('answers').innerHTML = answersList;
    document.getElementById('prompt').innerHTML = '<p>Click the best answer:</p>';
    document.getElementById('feedback').innerHTML = '';
}

// Check Answer function
function checkAnswer(selectedIndex, correctIndex) {
    var feedback = document.getElementById('feedback');
    
    // Store user answer in array
    userAnswers[count] = selectedIndex;
    
    if (selectedIndex === correctIndex) {
        feedback.innerHTML = 'Correct! Well done!';
        feedback.className = 'correct';
        score++;
    } else {
        feedback.innerHTML = 'Incorrect! The correct answer was option ' + (correctIndex + 1) + '.';
        feedback.className = 'incorrect';
    }
    
    count++;
    
    // Check if more questions available using array length
    if (gameQuestions.length > 0) {
        document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Continue Game</button>';
    } else {
        // Game over - show results after delay
        setTimeout(showGameResults, 2000);
    }
}

// Show final game results with array review
function showGameResults() {
    var reviewHTML = '<h3>Game Complete!</h3>';
    reviewHTML += '<p>Final Score: ' + score + ' out of ' + questions.length + '</p>';
    reviewHTML += '<h4>Answer Review:</h4><ul>';
    
    // Loop through answers using forEach
    questions.forEach(function(question, index) {
        var userAnswer = userAnswers[index];
        var correctAnswer = correctAnswers[index];
        var answerOptions = [question[2], question[3], question[4]];
        
        reviewHTML += '<li><strong>' + question[0] + '</strong><br>';
        reviewHTML += 'Your answer: ' + answerOptions[userAnswer];
        
        if (userAnswer === correctAnswer) {
            reviewHTML += ' ✓ (Correct)';
        } else {
            reviewHTML += ' ✗ (Incorrect - Correct answer: ' + answerOptions[correctAnswer] + ')';
        }
        reviewHTML += '</li>';
    });
    
    reviewHTML += '</ul>';
    
    document.getElementById('question').innerHTML = reviewHTML;
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('score').innerHTML = '';
    document.getElementById('prompt').innerHTML = '<button onclick="restartGame()">Restart Game</button>';
}

// Restart game function
function restartGame() {
    initGame();
}

// Utility function to add new questions to the array
function addQuestion(questionText, correctIndex, answer1, answer2, answer3) {
    var newQuestion = [questionText, correctIndex, answer1, answer2, answer3];
    questions.push(newQuestion); // Add to end of array
}

// Utility function to get a random question (bonus feature)
function getRandomQuestion() {
    if (questions.length === 0) return null;
    
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Utility function to shuffle questions array (bonus feature)
function shuffleQuestions() {
    gameQuestions = questions.map(copyQuestion); // Create working copy
    
    // Simple shuffle algorithm
    for (var i = gameQuestions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = gameQuestions[i];
        gameQuestions[i] = gameQuestions[j];
        gameQuestions[j] = temp;
    }
}

// Initialize game when page loads
window.onload = function() {
    initGame();
};