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

// Enhanced Check Answer function that checks submitted answers and returns user results
function checkAnswer(selectedIndex, correctIndex) {
    var feedback = document.getElementById('feedback');
    var isCorrect = false;
    
    // Store user answer in array
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
    
    // Check if current question index (count) has reached the total number of questions
    if (count >= questions.length) {
        // All questions have been answered - terminate the game
        setTimeout(function() {
            terminateGame();
        }, 2000); // Give user time to see feedback
    } else {
        // More questions available - continue the game
        setTimeout(function() {
            document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Continue Game</button>';
        }, 2000);
    }
    
    // Return user results object
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
    // Clear any continue buttons
    document.getElementById('prompt').innerHTML = '<p>Game completing...</p>';
    
    // Show results after a brief delay to allow user to see final feedback
    setTimeout(function() {
        showGameResults();
        
        // Prompt the user to restart the game
        setTimeout(function() {
            var restartPrompt = confirm("Would you like to play again?");
            if (restartPrompt) {
                restartGame();
            } else {
                document.getElementById('prompt').innerHTML = '<p>Thanks for playing! <button onclick="restartGame()">Play Again</button></p>';
            }
        }, 3000); // Show restart prompt after 3 seconds
        
    }, 1500); // Brief delay before showing results
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