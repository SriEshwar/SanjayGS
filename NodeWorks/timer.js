// Importing the required modules
const { setInterval } = require('timers');

// Function to send reminder
function sendReminder() {
    console.log("Don't forget to take a break!");
}

// Set interval for sending reminders every 5 seconds
const reminderInterval = setInterval(sendReminder, 5 * 1000);

// Stop the reminders after 20 seconds
setTimeout(() => {
    clearInterval(reminderInterval);
    console.log("No more reminders. Time to focus!");
}, 20 * 1000);
