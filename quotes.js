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
userNum = Number(userNum);
const index = userNum % quotes.length;

// Display the selected quote
document.getElementById("quote").textContent = quotes[index];

// Array of 3 favorite website URLs
let websites = [
    "https://www.mozilla.org/",
    "https://www.w3schools.com/",
    "https://developer.mozilla.org/"
];
document.write(websites);
function displayWebsites(arr) {
    const ul = document.getElementById("websites");
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

// Prompt for user's favorite website and add to array
let favSite = prompt("Enter your favorite website URL (include https://):");
websites.push(favSite);

// Delete the first website from the array
websites.shift();

// Display the updated list of websites
displayWebsites(websites);