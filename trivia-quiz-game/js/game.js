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

// Play Game function - Modified to match requirements exactly
function playGame() {
    if (count >= questions.length) {
        terminateGame();
        return;
    }

    // Access question at index[count] as specified
    var currentQuestion = questions[count].slice(); // Make a copy to work with
    
    // Post the question to HTML (first element)
    var questionText = currentQuestion[0];
    document.getElementById('question').innerHTML = questionText;
    
    // Remove question from working copy using shift()
    currentQuestion.shift();
    
    // Access correct answer index (now at index[0]) 
    var correctIndex = currentQuestion[0];
    
    // Remove correct answer index using shift()
    currentQuestion.shift();
    
    // Remaining elements are the answer choices
    var answers = currentQuestion; // ["Answer 1", "Answer 2", "Answer 3"]
    
    // Create list of answers with onClick attributes as specified
    var answersList = '';
    answers.forEach(function(answer, index) {
        answersList += '<li><a href="#" onclick="checkAnswer(' + index + ', ' + correctIndex + '); return false;">' + answer + '</a></li>';
    });
    
    // Post answer list to HTML
    document.getElementById('answers').innerHTML = answersList;
    
    // Add prompt for user to click best answer
    document.getElementById('prompt').innerHTML = '<p>Click the best answer:</p>';
    document.getElementById('feedback').innerHTML = '';
}

// Enhanced Check Answer function
function checkAnswer(selectedIndex, correctIndex) {
    var feedback = document.getElementById('feedback');
    var isCorrect = false;
    
    // Store user answer
    userAnswers[count] = selectedIndex;
    
    // Check the submitted answer for correct response
    if (selectedIndex === correctIndex) {
        feedback.innerHTML = 'Correct! Well done!';
        feedback.className = 'correct';
        score++;
        isCorrect = true;
    } else {
        feedback.innerHTML = 'Incorrect! The correct answer was option ' + (correctIndex + 1) + '.';
        feedback.className = 'incorrect';
        isCorrect = false;
    }
    
    // Increment question counter
    count++;
    
    // Check if question counter has exceeded number of available questions
    if (count >= questions.length) {
        // Load Restart Game button as specified
        setTimeout(function() {
            terminateGame();
        }, 2000);
    } else {
        // Load Play Game button to continue as specified
        setTimeout(function() {
            document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Continue Game</button>';
        }, 2000);
    }
    
    return {
        selectedAnswer: selectedIndex,
        correctAnswer: correctIndex,
        isCorrect: isCorrect,
        currentScore: score,
        questionNumber: count,
        totalQuestions: questions.length,
        gameComplete: (count >= questions.length)
    };
}

// Function to terminate the game when all questions have been answered
function terminateGame() {
    // Show results first
    showGameResults();
    
    // Load Restart Game button as specified in requirements
    setTimeout(function() {
        document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
    }, 3000);
}

// Enhanced Show final game results function
function showGameResults() {
    var reviewHTML = '<h3>🎉 Game Complete! 🎉</h3>';
    
    // Calculate percentage score
    var percentage = Math.round((score / questions.length) * 100);
    
    reviewHTML += '<div class="final-score">';
    reviewHTML += '<p><strong>Final Score: ' + score + ' out of ' + questions.length + '</strong></p>';
    reviewHTML += '<p>Percentage: ' + percentage + '%</p>';
    
    // Add performance message based on score
    if (percentage >= 90) {
        reviewHTML += '<p>🌟 Excellent work!</p>';
    } else if (percentage >= 70) {
        reviewHTML += '<p>👍 Good job!</p>';
    } else if (percentage >= 50) {
        reviewHTML += '<p>📚 Keep studying!</p>';
    } else {
        reviewHTML += '<p>💪 Better luck next time!</p>';
    }
    
    reviewHTML += '</div>';
    reviewHTML += '<h4>📋 Answer Review:</h4><ul>';
    
    // Loop through answers using forEach to show detailed results
    questions.forEach(function(question, index) {
        var userAnswer = userAnswers[index];
        var correctAnswer = correctAnswers[index];
        var answerOptions = [question[2], question[3], question[4]];
        
        reviewHTML += '<li class="review-item">';
        reviewHTML += '<strong>Question ' + (index + 1) + ': ' + question[0] + '</strong><br>';
        reviewHTML += 'Your answer: <span class="user-answer">' + answerOptions[userAnswer] + '</span>';
        
        if (userAnswer === correctAnswer) {
            reviewHTML += ' <span class="correct-mark">✓ Correct</span>';
        } else {
            reviewHTML += ' <span class="incorrect-mark">✗ Incorrect</span><br>';
            reviewHTML += 'Correct answer: <span class="correct-answer">' + answerOptions[correctAnswer] + '</span>';
        }
        reviewHTML += '</li>';
    });
    
    reviewHTML += '</ul>';
    
    // Display the complete results
    document.getElementById('question').innerHTML = reviewHTML;
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('score').innerHTML = '';
    document.getElementById('prompt').innerHTML = '<button onclick="restartGame()">🔄 Restart Game</button>';
}

// Enhanced Restart game function
function restartGame() {
    // Confirm restart action
    console.log("Restarting game - Question counter reset from " + count + " to 0");
    
    // Reset all game state
    initGame();
    
    // Optional: Show restart message
    document.getElementById('feedback').innerHTML = '<p style="color: blue;">🎮 New game started! Good luck!</p>';
    setTimeout(function() {
        document.getElementById('feedback').innerHTML = '';
    }, 2000);
}

// Utility function to get current game status
function getGameStatus() {
    return {
        currentQuestion: count + 1,
        totalQuestions: questions.length,
        currentScore: score,
        questionsRemaining: questions.length - count,
        gameProgress: Math.round((count / questions.length) * 100) + '%'
    };
}

// Utility function to check if game should terminate
function shouldTerminateGame() {
    return count >= questions.length;
}

// Initialize the game when page loads
window.onload = function() {
    initGame();
};