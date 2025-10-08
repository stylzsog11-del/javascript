// trivia.js

// Function to get the current date and time and display it in a user-friendly format
function displayCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-date').innerText = `Today is ${formattedDate}, ${formattedTime}`;
}

// Function to create a personalized greeting based on the time of day
function personalizedGreeting() {
    const name = prompt("Please enter your name:");
    const currentHour = new Date().getHours();
    let greeting;

    switch (true) {
        case (currentHour < 12):
            greeting = "Good Morning";
            break;
        case (currentHour < 18):
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }

    const capitalizedName = name && name.trim() !== ""
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : "Guest";
    document.getElementById('greeting').innerText = `${greeting} ${capitalizedName}!`;
}

// Function to validate email address using regular expressions
function validateEmail() {
    let email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
    } while (email !== null && !emailRegex.test(email));
        }
    } while (!emailRegex.test(email));

    const [username, domain] = email.split('@');
    document.getElementById('username').innerText = `Username: ${username.toUpperCase()}`;
    const domainElement = document.getElementById('domain');
    if (domainElement) {
        domainElement.innerText = `Domain: ${domain}`;
    }
        usernameElem.innerText = `Username: ${username.toUpperCase()}`;
    }
    const domainElem = document.getElementById('domain');
    if (domainElem) {
        domainElem.innerText = `Domain: ${domain}`;
    }
}

// Function to get a random quote from the quotes array
function getRandomQuote() {
    fetch('assets/quotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            document.getElementById('quote-of-the-day').innerText = data[randomIndex];
        })
        .catch(error => {
            document.getElementById('quote-of-the-day').innerText = "Could not load quote. Please try again later.";
            console.error('Error fetching quote:', error);
        });
}

// Function to display the score and calculate percentage
function displayScore(score, totalQuestions) {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    document.getElementById('score').innerText = `Your score: ${score} out of ${totalQuestions} (${percentage}%)`;
}

// Main function to run the trivia quiz
function runTriviaQuiz() {
    displayCurrentDate();
    personalizedGreeting();
    validateEmail();
    getRandomQuote();
    // Call the quiz function here (assuming it's defined elsewhere)
    // quizFunction();
}

// Call the main function to start the quiz
runTriviaQuiz();