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

// Use modulus to get a quote index, default to 0 if invalid
let index = 0;
if (!isNaN(userNum) && userNum !== null) {
    index = Math.abs(userNum) % quotes.length;
}

// Display the selected quote
const quoteElem = document.getElementById("quote");
if (quoteElem) {
    quoteElem.textContent = quotes[index];
}

// Array of favorite website URLs
let websites = [
    "https://www.mozilla.org/",
    "https://www.w3schools.com/",
    "https://developer.mozilla.org/",
];

// Function to display an array of URLs as clickable links
function displayWebsites(arr) {
    const ul = document.getElementById("websites");
    if (!ul) return;
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = arr[i];
        a.textContent = arr[i];
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    }
}

// Display the initial list of websites
displayWebsites(websites);

// Prompt the user for their favorite website URL
let favSite = prompt("Enter your favorite website URL (include https://):");

// Add the new site to the end of the array using push(), if input is valid
if (favSite && favSite.startsWith("http")) {
    websites.push(favSite);
    // Delete the first website from the array using shift()
    websites.shift();
}

// Display the updated list of websites
displayWebsites(websites);