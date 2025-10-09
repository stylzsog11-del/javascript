// Multi-dimensional array with questions (each worth 3 points)
var questions = [
    ["What is the capital of France?", 2, "Berlin", "Madrid", "Paris"],
    ["Which planet is known as the Red Planet?", 1, "Earth", "Mars", "Jupiter"],
    ["What is the largest ocean on Earth?", 2, "Atlantic Ocean", "Indian Ocean", "Pacific Ocean"]
];

// Counter to track questions
var count = 0;
var totalScore = 0;

// Quote of the day array
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle"
];

// Initialize the game when page loads
window.onload = function() {
    displayDateTime();
    displayGreeting();
    displayQuoteOfDay();
    getUserInfo();
    loadPlayButton();
};

// Function to get current date and time in user-friendly format
function displayDateTime() {
    var now = new Date();
    var options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    var userFriendlyDate = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date').innerHTML = '<h3>Current Date & Time:</h3><p>' + userFriendlyDate + '</p>';
}

// Function to create personalized greeting based on time
function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;
    
    switch(true) {
        case (hour >= 5 && hour < 12):
            greeting = "Good Morning";
            break;
        case (hour >= 12 && hour < 17):
            greeting = "Good Afternoon";
            break;
        case (hour >= 17 && hour < 22):
            greeting = "Good Evening";
            break;
        default:
            greeting = "Good Night";
    }
    
    var name = prompt("Please enter your name:");
    if (name) {
        // Convert first letter to uppercase
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        document.getElementById('greeting').innerHTML = '<h3>' + greeting + ', ' + name + '!</h3>';
    }
}

// Function to display random quote of the day
function displayQuoteOfDay() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-of-the-day').innerHTML = '<h3>Quote of the Day:</h3><p><em>' + quotes[randomIndex] + '</em></p>';
}

// Function to get and validate user email
function getUserInfo() {
    var email;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    do {
        email = prompt("Please enter your email address:");
        if (!email) return; // User cancelled
        
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please try again.");
        }
    } while (!emailRegex.test(email));
    
    // Split email at @ symbol
    var emailParts = email.split('@');
    var username = emailParts[0].toUpperCase();
    var domain = emailParts[1];
    
    document.getElementById('user-info').innerHTML = '<h3>User Information:</h3><p>Username: ' + username + '</p><p>Domain: ' + domain + '</p>';
}

// Function to load the Play Game button
function loadPlayButton() {
    document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Game</button>';
}

// Function to play the game
function playGame() {
    if (count < questions.length) {
        // Get current question
        var currentQuestion = questions[count].slice(); // Make a copy
        
        // Display question
        document.getElementById('question').innerHTML = currentQuestion[0];
        
        // Get correct answer index
        var correctIndex = currentQuestion[1];
        
        // Create answer choices
        var answersList = '<ul>';
        for (var i = 2; i < currentQuestion.length; i++) {
            var answerIndex = i - 2; // Convert to 0, 1, 2 indexing
            answersList += '<li><button class="answer-choice" onclick="checkAnswer(' + answerIndex + ', ' + correctIndex + ')">' + currentQuestion[i] + '</button></li>';
        }
        answersList += '</ul>';
        
        document.getElementById('answers').innerHTML = answersList;
        document.getElementById('prompt').innerHTML = '<p>Click the best answer:</p>';
        document.getElementById('feedback').innerHTML = '';
    }
}

// Function to check the answer
function checkAnswer(chosenIndex, correctIndex) {
    var feedback = '';
    
    if (chosenIndex === correctIndex) {
        feedback = '<p style="color: green;">Correct! You earned 3 points.</p>';
        totalScore += 3;
    } else {
        feedback = '<p style="color: red;">Incorrect. The correct answer was: ' + questions[count][correctIndex + 2] + '</p>';
    }
    
    document.getElementById('feedback').innerHTML = feedback;
    count++;
    
    // Check if game is finished
    if (count >= questions.length) {
        // Calculate percentage
        var percentage = (totalScore / 9) * 100;
        var roundedPercentage = Math.round(percentage * 100) / 100; // Round to 2 decimal places
        
        document.getElementById('score').innerHTML = '<h3>Game Complete!</h3><p>Your score: ' + totalScore + ' out of 9 points</p><p>Percentage: ' + roundedPercentage + '%</p>';
        document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
        document.getElementById('question').innerHTML = '';
        document.getElementById('answers').innerHTML = '';
    } else {
        // Continue game
        setTimeout(function() {
            document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Next Question</button>';
        }, 2000);
    }
}