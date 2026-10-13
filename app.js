// main user data and tracking flags
const portfolioOwner = "William Mitchell Peterson";
let hasDownloadedResume = false;

// Wait 2 seconds, show the resume pop-up, and make sure it only runs once
document.getElementById('downloadBtn').addEventListener('click', function() {
    if (!hasDownloadedResume) {
        setTimeout(function() {
            alert("Your resume is downloaded successfully!");
            hasDownloadedResume = true; // Flips our flag to true so it blocks future alerts
        }, 2000); // 2000ms = 2 second delay
    }
});

// Figure out if it's morning, afternoon, or evening to make a custom welcome message
function showGreeting(name) {
    let currentHour = new Date().getHours();
    let timeGreeting = "Welcome";

    if (currentHour < 12) {
        timeGreeting = "Good Morning";
    } else if (currentHour < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }

    return `${timeGreeting}, my name is ${name}! Welcome to my portfolio!`;
}

// Automatically print the welcome banner onto the page when it loads
document.getElementById('greetingContainer').innerText = showGreeting(portfolioOwner);

// Date math: calculate exactly how many days are left until a deadline
function daysUntilDeadline(targetDateString) {
    let currentDate = new Date();
    let targetDeadline = new Date(targetDateString);

    // Subtracting timestamps gives us the remaining time in raw milliseconds
    let timeDifference = targetDeadline - currentDate;

    // Convert milliseconds to a whole number of days
    let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

// Set our sample project deadline date (YYYY-MM-DD)
let projectDeadline = "2026-12-15"; 
let remainingDays = daysUntilDeadline(projectDeadline);

// Print the remaining days in the browser console terminal for testing
console.log(`Days remaining until project deadline: ${remainingDays}`);

// Update our ongoing project card automatically with the countdown number
document.getElementById('daysLeft').innerText = remainingDays;