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
// Uses Date object methods: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes()
function getCurrentDate() {
    const now = new Date();
    
    // Arrays for converting numeric values to names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Using multiple Date object methods
    const dayName = days[now.getDay()];           // getDay() method
    const monthName = months[now.getMonth()];     // getMonth() method
    const date = now.getDate();                   // getDate() method
    const year = now.getFullYear();               // getFullYear() method
    const hours = now.getHours();                 // getHours() method
    const minutes = now.getMinutes();             // getMinutes() method
    
    // Format time with leading zeros if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    
    return `${dayName}, ${monthName} ${date}, ${year} at ${displayHours}:${formattedMinutes} ${ampm}`;
}

// Function to create personalized greeting based on time
// Uses switch statement as required
function createGreeting() {
    const now = new Date();
    const hour = now.getHours();  // Using getHours() method
    let greeting;
    
    // Switch statement for time-based greeting (REQUIRED)
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
    
    // Get user's name and capitalize first letter (REQUIRED)
    let userName = prompt("Please enter your name:");
    if (userName && userName.length > 0) {  // Using length property
        userName = capitalizeFirstLetter(userName);
        return `${greeting}, ${userName}!`;
    }
    return `${greeting}!`;
}

// Function to capitalize first letter of name (REQUIRED)
// Uses string methods: charAt(), toUpperCase(), slice(), toLowerCase()
function capitalizeFirstLetter(name) {
    if (name.length === 0) return name;  // Using length property
    
    // Using string methods as required
    const firstChar = name.charAt(0).toUpperCase();  // charAt() and toUpperCase()
    const restOfName = name.slice(1).toLowerCase();  // slice() and toLowerCase()
    
    return firstChar + restOfName;  // String concatenation
}

// Function to validate email using regular expression (REQUIRED)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to get and validate user email (REQUIRED)
// Uses string methods: split(), toUpperCase()
function getUserEmail() {
    let email;
    let isValid = false;
    
    while (!isValid) {
        email = prompt("Please enter your email address:");
        if (email && validateEmail(email)) {
            isValid = true;
            
            // Split email at @ symbol (REQUIRED string method)
            const emailParts = email.split('@');  // split() method
            const username = emailParts[0].toUpperCase();  // toUpperCase() method
            const domain = emailParts[1];
            
            // Display username and domain separately (REQUIRED)
            const userInfo = document.createElement('div');
            userInfo.innerHTML = `<p><strong>Email validated!</strong><br>Username: ${username}<br>Domain: ${domain}</p>`;
            document.getElementById('greeting').appendChild(userInfo);
        } else {
            alert("Invalid email address. Please try again.");
        }
    }
    return email;
}

// Function to display random quote of the day (REQUIRED)
// Uses Math.random() and Math.floor()
function displayQuoteOfDay() {
    const randomIndex = Math.floor(Math.random() * 5); // Random number 0-4 (REQUIRED)
    return quotes[randomIndex];
}

// Function to run the trivia quiz (REQUIRED improvements)
function runTriviaQuiz() {
    userScore = 0;
    const totalQuestions = triviaQuestions.length;  // Using length property
    
    for (let i = 0; i < totalQuestions; i++) {
        const question = triviaQuestions[i];
        let userAnswer = prompt(`Question ${i + 1}: ${question.question}`);
        
        if (userAnswer) {
            // Convert user answer to lowercase for comparison (REQUIRED)
            userAnswer = userAnswer.toLowerCase().trim();  // toLowerCase() method
            
            if (userAnswer === question.answer) {
                userScore++;
                alert("Correct!");
            } else {
                alert(`Incorrect. The correct answer is: ${question.answer}`);
            }
        }
    }
    
    // Calculate percentage and round to 2 decimal places (REQUIRED)
    const percentage = (userScore / totalQuestions) * 100;
    const roundedPercentage = percentage.toFixed(2);  // toFixed() method for 2 decimal places
    
    return {
        score: userScore,
        total: totalQuestions,
        percentage: Number(roundedPercentage)  // Number() method to convert back to number
    };
}

// Main function to initialize everything
function initializeGame() {
    try {
        // Display current date using Date object methods (REQUIRED)
        document.getElementById('current-date').innerHTML = 
            `<h3>Current Date & Time</h3><p>${getCurrentDate()}</p>`;
        
        // Create and display greeting with switch statement (REQUIRED)
        const greeting = createGreeting();
        document.getElementById('greeting').innerHTML = 
            `<h3>Welcome!</h3><p>${greeting}</p>`;
        
        // Get and validate user email with regex (REQUIRED)
        getUserEmail();
        
        // Display quote of the day with random selection (REQUIRED)
        const quoteOfDay = displayQuoteOfDay();
        document.getElementById('quote-of-the-day').innerHTML = 
            `<h3>Quote of the Day</h3><p>"${quoteOfDay}"</p>`;
        
        // Run trivia quiz with string improvements (REQUIRED)
        const quizResults = runTriviaQuiz();
        
        // Display score with percentage calculation (REQUIRED)
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