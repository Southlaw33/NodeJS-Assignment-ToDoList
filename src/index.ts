import ReminderDataBase from "./reminders";
import * as readline from "readline-sync"; // Import readline-sync for user input

const rdb = new ReminderDataBase();


rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));
rdb.createReminder("Visit the doctor", new Date("2025-03-12"));
rdb.createReminder("Deadline to finish the NodeJS assignment", new Date("2025-03-14"));


console.log("\nAll reminders after creation:");
const allReminders = rdb.getAllReminders() || [];
console.log(allReminders);

//displaying the reminder IDs
const reminderIds = allReminders.map(rem => rem.id.toString());
console.log("\nAvailable Reminder IDs: ", reminderIds);

//getting the user input for the reminder ID
const getId = readline.question("Enter the ID of the reminder you want to view: ");
const reminder = rdb.getReminder(getId);
if (reminder) {
    console.log(`Reminder with ID ${getId}:`, reminder);
} else {
    console.log("Reminder not found.");
}

// Updating the reminder based on the ID
const updateId = readline.question("Enter the ID of the reminder you want to update: ");
if (rdb.getReminder(updateId)) {
    const newTitle = readline.question("Enter the new title: ");
    const newDateInput = readline.question("Enter the new date (YYYY-MM-DD): ");
    const newDate = new Date(newDateInput);
    rdb.updateReminder(updateId, newTitle, newDate);
    console.log(`Reminder updated (ID: ${updateId}):`, rdb.getReminder(updateId));
} else {
    console.log("Reminder not found.");
}

// Remove a reminder using its ID
const removeId = readline.question("Enter the ID of the reminder you want to remove: ");
if (rdb.getReminder(removeId)) {
    rdb.removeReminder(removeId);
    console.log(`Reminder with ID ${removeId} removed.`);
} else {
    console.log("Reminder not found.");
}

// Remove expired reminders
console.log("\nRemoving expired reminders...");
rdb.removeExpiredReminders();
console.log("All reminders after removing expired ones:");
console.log(rdb.getAllReminders());
