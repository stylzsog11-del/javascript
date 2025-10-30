# Trivia Quiz Application

## Overview
The Trivia Quiz Application is a web-based quiz game that allows users to test their knowledge on various topics. The application is designed to be interactive and user-friendly, featuring personalized greetings, email validation, and a random quote of the day.

## Project Structure
```
trivia-quiz-app
├── src
│   ├── js
│   │   └── trivia.js        # JavaScript logic for the trivia quiz game
│   ├── css
│   │   └── styles.css       # CSS styles for the trivia quiz web page
│   └── index.html           # Main HTML page for the trivia quiz application
├── assets
│   └── quotes.json          # Array of quotes for the quote of the day
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Features
- **Personalized Greeting**: Displays a greeting based on the time of day.
- **Email Validation**: Prompts users to enter their email address and validates it using regular expressions.
- **Random Quote of the Day**: Selects and displays a random quote from a predefined array.
- **Trivia Quiz**: Users can answer trivia questions, and their scores are calculated and displayed.

## Getting Started
To set up and run the Trivia Quiz Application, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd trivia-quiz-app
   ```

2. **Install Dependencies**:
   If you have npm installed, run:
   ```
   npm install
   ```

3. **Open the Application**:
   Open `src/index.html` in your web browser to start the trivia quiz.

## Usage
- Upon loading the application, users will be prompted to enter their name and email address.
- After validation, users will receive a personalized greeting and can start the trivia quiz.
- The application will display the score and a random quote at the end of the quiz.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.