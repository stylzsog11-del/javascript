// trivia.js

// Function to get the current date and time and display it in a user-friendly format
function displayCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    document.getElementById('current-date').innerText = formattedDate;
}

// Function to create a personalized greeting based on the time of day
function personalizedGreeting() {
    const name = prompt("Please enter your name:");
    const firstLetterUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
    const hour = new Date().getHours();
    let greeting;

    switch (true) {
        case (hour < 12):
            greeting = "Good Morning";
            break;
        case (hour < 18):
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }

    document.getElementById('greeting').innerText = `${greeting} ${firstLetterUpperCase}!`;
}

// Function to validate email address using regular expressions
function validateEmail() {
    let email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please try again.");
        }
    } while (!emailRegex.test(email));

    const [username, domain] = email.split('@');
    document.getElementById('username').innerText = username.toUpperCase();
    document.getElementById('domain').innerText = domain;
}

// Function to display a random quote of the day
function displayQuoteOfTheDay() {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-of-the-day').innerText = quotes[randomIndex];
}

// Function to calculate and display the user's score and percentage
function calculateScore(userAnswers, correctAnswers) {
    let score = 0;

    userAnswers.forEach((answer, index) => {
        if (answer.toLowerCase() === correctAnswers[index].toLowerCase()) {
            score++;
        }
    });

    const totalPoints = correctAnswers.length;
    const percentage = ((score / totalPoints) * 100).toFixed(2);
    document.getElementById('score').innerText = `Score: ${score} / ${totalPoints} (${percentage}%)`;
}

// Main function to run the trivia quiz
function runTriviaQuiz() {
    displayCurrentDate();
    personalizedGreeting();
    validateEmail();
    displayQuoteOfTheDay();
    // Call the quiz function here (assuming it's defined elsewhere)
    // quizFunction();
} 

// Call the main function when the page loads
window.onload = runTriviaQuiz;