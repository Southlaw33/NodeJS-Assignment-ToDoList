import ReminderDataBase from "./reminders";

const rdb = new ReminderDataBase();

// Create reminders and store their IDs
rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));
rdb.createReminder("Visit the doctor", new Date("2025-03-12"));
rdb.createReminder("Deadline to finish the NodeJS assignment", new Date("2025-03-14"));

console.log("All reminders after creation:");
const allReminders = rdb.getAllReminders() || []; 
console.log(allReminders);

// Extract generated IDs
const reminderIds = allReminders.map(rem => rem.id.toString());

// Get a specific reminder (first one)
if (reminderIds.length > 0) {
    const firstId = reminderIds[0];
    console.log(`Reminder with ID ${firstId}:`, rdb.getReminder(firstId));
}

// pdating a reminder (second one)
if (reminderIds.length > 1) {
    const updateId = reminderIds[1];
    rdb.updateReminder(updateId, "Updated Title", new Date("2025-04-01"));
    console.log(`Reminder after update (ID: ${updateId}):`, rdb.getReminder(updateId));
}

// removing a specific reminder (in this case, the third one)
if (reminderIds.length > 2) {
    const removeId = reminderIds[2];
    rdb.removeReminder(removeId);
    console.log(`Remaining reminders after removing ID ${removeId}:`);
    console.log(rdb.getAllReminders());
}

// removing the expired reminders
console.log("Removing expired reminders...");
rdb.removeExpiredReminders();
console.log("All reminders after removing expired ones:");
console.log(rdb.getAllReminders());
