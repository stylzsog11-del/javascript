// Quote of the Day array
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs", 
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle"
];

// Trivia questions array (all answers in lowercase)
const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "What is 2 + 2?",
        answer: "four"
    },
    {
        question: "What color do you get when you mix red and blue?",
        answer: "purple"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answer: "shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "h2o"
    },
    {
        question: "How many continents are there?",
        answer: "seven"
    },
    {
        question: "What is the fastest land animal?",
        answer: "cheetah"
    },
    {
        question: "What year did World War II end?",
        answer: "1945"
    }
];

let userScore = 0;

// Function to get current date and time in user-friendly format
function getCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
}

// Function to create personalized greeting based on time
function createGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    
    // Switch statement for time-based greeting
    switch (true) {
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
    
    // Get user's name and capitalize first letter
    let userName = prompt("Please enter your name:");
    if (userName) {
        userName = capitalizeFirstLetter(userName);
        return `${greeting}, ${userName}!`;
    }
    return `${greeting}!`;
}

// Function to capitalize first letter of name
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Function to validate email using regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to get and validate user email
function getUserEmail() {
    let email;
    let isValid = false;
    
    while (!isValid) {
        email = prompt("Please enter your email address:");
        if (email && validateEmail(email)) {
            isValid = true;
            // Split email at @ symbol
            const emailParts = email.split('@');
            const username = emailParts[0].toUpperCase();
            const domain = emailParts[1];
            
            alert(`Email validated!\nUsername: ${username}\nDomain: ${domain}`);
        } else {
            alert("Invalid email address. Please try again.");
        }
    }
    return email;
}

// Function to display random quote of the day
function displayQuoteOfDay() {
    const randomIndex = Math.floor(Math.random() * 5); // Random number 0-4
    return quotes[randomIndex];
}

// Function to run the trivia quiz
function runTriviaQuiz() {
    userScore = 0;
    
    for (let i = 0; i < triviaQuestions.length; i++) {
        const question = triviaQuestions[i];
        let userAnswer = prompt(`Question ${i + 1}: ${question.question}`);
        
        if (userAnswer) {
            // Convert user answer to lowercase for comparison
            userAnswer = userAnswer.toLowerCase().trim();
            
            if (userAnswer === question.answer) {
                userScore++;
                alert("Correct!");
            } else {
                alert(`Incorrect. The correct answer is: ${question.answer}`);
            }
        }
    }
    
    // Calculate percentage and round to 2 decimal places
    const percentage = Number(((userScore / triviaQuestions.length) * 100).toFixed(2));
    
    return {
        score: userScore,
        total: triviaQuestions.length,
        percentage: percentage
    };
}

// Main function to initialize everything
function initializeGame() {
    try {
        // Display current date
        document.getElementById('current-date').innerHTML = 
            `<h3>Current Date & Time</h3><p>${getCurrentDate()}</p>`;
        
        // Create and display greeting
        const greeting = createGreeting();
        document.getElementById('greeting').innerHTML = 
            `<h3>Welcome!</h3><p>${greeting}</p>`;
        
        // Get and validate user email
        getUserEmail();
        
        // Display quote of the day
        const quoteOfDay = displayQuoteOfDay();
        document.getElementById('quote-of-the-day').innerHTML = 
            `<h3>Quote of the Day</h3><p>"${quoteOfDay}"</p>`;
        
        // Run trivia quiz
        const quizResults = runTriviaQuiz();
        
        // Display score
        document.getElementById('score').innerHTML = 
            `Your Score: ${quizResults.score} out of ${quizResults.total} (${quizResults.percentage}%)`;
            
    } catch (error) {
        console.error('Error initializing game:', error);
        alert('An error occurred while loading the game. Please refresh and try again.');
    }
}

// Start the game when page loads
window.onload = function() {
    initializeGame();
};