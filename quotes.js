// Array of 5 quotes
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today."
];

// Prompt user for a number
let userNum = prompt("Enter a number to get your quote of the day:");

// Convert input to a number (differentiate data types)
userNum = Number(userNum);

// Use modulus to get a random quote index
const index = userNum % quotes.length;

// Display the selected quote
// Use built-in function getElementById
// Use variable index
// Use array access
// Use math operation (modulus)
document.getElementById("quote").textContent = quotes[index];

// Array of 3 favorite website URLs
let websites = [
    "https://www.mozilla.org/",
    "https://www.w3schools.com/",
    "https://developer.mozilla.org/"
];

// Write initial list of websites as links
function displayWebsites(arr) {
    const ul = document.getElementById("websites");
    ul.innerHTML = "";
    arr.forEach(function(url) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = url;
        a.textContent = url;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    });
}
displayWebsites(websites);

// Prompt user for their favorite website
let favSite = prompt("Enter your favorite website URL:");

// Add the new site to the end of the array
websites.push(favSite);

// Delete the first website from the array
websites.shift();

// Display the updated list
displayWebsites(websites);

// End of script
