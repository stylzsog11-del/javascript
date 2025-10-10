// Separate arrays for questions and answers
var questions = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "What is the largest ocean on Earth?"
];

var answers = [
    ["berlin", "madrid", "paris"], // Question 1 answers
    ["earth", "mars", "jupiter"],  // Question 2 answers
    ["atlantic ocean", "indian ocean", "pacific ocean"] // Question 3 answers
];

var correctAnswers = [2, 1, 2]; // Correct answer indices (0, 1, 2)

// Counter to track questions and attempts
var count = 0;
var totalScore = 0;
var attempts = 0;
var maxAttempts = 3;

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
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", 
                     "July", "August", "September", "October", "November", "December"];
    
    var dayName = dayNames[now.getDay()];
    var monthName = monthNames[now.getMonth()];
    var day = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    var userFriendlyDate = dayName + ", " + monthName + " " + day + ", " + year + " at " + hours + ":" + minutes + " " + ampm;
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
    var randomIndex = Math.floor(Math.random() * 5); // Generate number between 0 and 4
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
        attempts = 0; // Reset attempts for new question
        displayQuestion();
    } else {
        // All questions completed
        endGame();
    }
}

// Function to display current question
function displayQuestion() {
    // Display question
    document.getElementById('question').innerHTML = '<h3>Question ' + (count + 1) + ':</h3><p>' + questions[count] + '</p>';
    
    // Display answer choices for reference
    var answersList = '<p><strong>Answer choices:</strong></p><ul>';
    for (var i = 0; i < answers[count].length; i++) {
        answersList += '<li>' + answers[count][i] + '</li>';
    }
    answersList += '</ul>';
    
    document.getElementById('answers').innerHTML = answersList;
    document.getElementById('prompt').innerHTML = '<p>Type your answer (Attempt ' + (attempts + 1) + ' of ' + maxAttempts + '):</p><button onclick="getAnswer()">Submit Answer</button>';
    document.getElementById('feedback').innerHTML = '';
}

// Function to get user's string answer
function getAnswer() {
    var userAnswer = prompt("Enter your answer:");
    if (userAnswer !== null) {
        // Convert user answer to lowercase for comparison
        userAnswer = userAnswer.toLowerCase().trim();
        checkAnswer(userAnswer);
    }
}

// Function to check the answer
function checkAnswer(userAnswer) {
    attempts++;
    var feedback = '';
    var correctIndex = correctAnswers[count];
    var correctAnswer = answers[count][correctIndex]; // Get the correct answer string
    
    // Compare lowercase user answer with stored lowercase correct answer
    if (userAnswer === correctAnswer) {
        // Correct answer
        var pointsEarned = 4 - attempts; // 3 points for 1st attempt, 2 for 2nd, 1 for 3rd
        feedback = '<p style="color: green; font-weight: bold;">Correct! You earned ' + pointsEarned + ' points.</p>';
        totalScore += pointsEarned;
        
        // Move to next question after delay
        setTimeout(function() {
            count++;
            playGame();
        }, 2000);
        
    } else {
        // Wrong answer
        if (attempts < maxAttempts) {
            feedback = '<p style="color: red; font-weight: bold;">Incorrect. Try again! (' + (maxAttempts - attempts) + ' attempts remaining)</p>';
            // Allow another attempt
            setTimeout(function() {
                document.getElementById('prompt').innerHTML = '<p>Type your answer (Attempt ' + (attempts + 1) + ' of ' + maxAttempts + '):</p><button onclick="getAnswer()">Submit Answer</button>';
            }, 1500);
        } else {
            // No more attempts
            feedback = '<p style="color: red; font-weight: bold;">Incorrect. No more attempts. The correct answer was: ' + correctAnswer + '</p>';
            
            // Move to next question after delay
            setTimeout(function() {
                count++;
                playGame();
            }, 3000);
        }
    }
    
    document.getElementById('feedback').innerHTML = feedback;
}

// Function to end the game
function endGame() {
    // Calculate percentage by dividing score by total points possible (9)
    var maxPossibleScore = 9; // 3 points max per question, 3 questions
    var percentage = (totalScore / maxPossibleScore) * 100;
    
    // Use number function to round to 2 decimal places
    var roundedPercentage = Math.round(percentage * 100) / 100;
    
    document.getElementById('score').innerHTML = '<h3>Game Complete!</h3><p>Your final score: ' + totalScore + ' out of ' + maxPossibleScore + ' points</p><p>Percentage: ' + roundedPercentage.toFixed(2) + '%</p>';
    document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
    document.getElementById('question').innerHTML = '';
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
}