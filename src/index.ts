import ReminderDataBase from "./reminders";
import * as readline from "readline-sync"; // Imported readline-sync for user input

const rdb = new ReminderDataBase();

rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));
rdb.createReminder("Visit the doctor", new Date("2025-03-12"));
rdb.createReminder("Deadline to finish the NodeJS assignment", new Date("2025-03-11"));

// Displaying all reminders after creation
console.log("\nAll reminders after creation:");
const allReminders = rdb.getAllReminders() || [];
console.log(allReminders);

//displaying the reminder IDs
const reminderIds = allReminders.map(rem => rem.id.toString());
console.log("\nAvailable Reminder IDs: ", reminderIds);

// Marking reminders as completed
let iD = readline.question("Enter the ID of the reminder you want to mark as completed: ");
if (rdb.getReminder(iD)) {
    const rtc = rdb.getReminder(iD);
    if (rtc && rtc.completed) {
        console.log("Reminder is already marked as completed.");
    }
    
    rdb.markReminderAsCompleted(iD);
    console.log(`Reminder with ID ${iD} marked as completed.`);
}

iD = readline.question("Enter the ID of the reminder you want to mark as completed: ");
if (rdb.getReminder(iD)) {
    const rtc1 = rdb.getReminder(iD);
    if (rtc1 && rtc1.completed) {
        console.log("Reminder is already marked as completed.");
    }   
    rdb.markReminderAsCompleted(iD);
    console.log(`Reminder with ID ${iD} marked as completed.`);
}

//unmarking the reminder
iD = readline.question("Enter the ID of the reminder you want to unmark: ");
if (rdb.getReminder(iD)) {
    const reminderToCheck = rdb.getReminder(iD);
    if (reminderToCheck && !reminderToCheck.completed) {
        console.log("Reminder is already marked as not completed.");
    }

    rdb.unmarkReminderAsCompleted(iD);
    console.log(`Reminder with ID ${iD} marked as not completed.`);
}

iD = readline.question("Enter the ID of the reminder you want to unmark: ");
if (rdb.getReminder(iD)) {
    const reminderToCheck1 = rdb.getReminder(iD);
    if (reminderToCheck1 && !reminderToCheck1.completed) {
        console.log("Reminder is already marked as not completed.");
    }
    
    rdb.unmarkReminderAsCompleted(iD);
    console.log(`Reminder with ID ${iD} marked as not completed.`);
}


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

//Displaying all the reminders that are marked as completed
console.log("\nReminders marked as completed:");
const remindersMarkedAsCompleted = rdb.getAllRemindersMarkedAsCompleted() || [];
console.log(remindersMarkedAsCompleted);

//Displaying all the reminders that are not marked as completed
console.log("\nReminders not marked as completed:");
const remindersNotMarkedAsCompleted = rdb.getAllRemindersNotMarkedAsCompleted() || [];
console.log(remindersNotMarkedAsCompleted);

// Getting reminders that are due by today

console.log("Reminders due by today:");
const remindersDueByToday = rdb.getAllRemindersDueByToday() || [];
console.log(remindersDueByToday);

console.log(rdb.getAllReminders());
