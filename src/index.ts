import ReminderDataBase from "./reminders";
import * as readline from "readline-sync"; // Import readline-sync for user input

const rdb = new ReminderDataBase();

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Create sample reminders
rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));
rdb.createReminder("Visit the doctor", new Date("2025-03-12"));
rdb.createReminder("Deadline to finish the NodeJS assignment", new Date("2025-03-11"));

function displayReminders() {
    console.log("\nAll reminders:");
    const allReminders = rdb.getAllReminders() || [];
    console.log(allReminders);
}

// Function to get user input for ID
function getUserReminderId(): string | null {
    displayReminders();
    const reminderIds = rdb.getAllReminders()?.map(rem => rem.id.toString()) || [];
    console.log("\nAvailable Reminder IDs:", reminderIds);
    
    const id = readline.question("Enter the Reminder ID: ");
    return reminderIds.includes(id) ? id : null;
}

// Main Menu Loop
while (true) {
    console.log("Todo App\nchoose an option");
    console.log("1. View all reminders");
    console.log("2. View a specific reminder");
    console.log("3. Create a reminder");
    console.log("4. Update a reminder");
    console.log("5. Remove a reminder");
    console.log("6. Mark reminder as completed");
    console.log("7. Unmark reminder as completed");
    console.log("8. View completed reminders");
    console.log("9. View non-completed reminders");
    console.log("10. View reminders due by today");
    
    console.log("11. Exit");

    const choice = readline.questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
            displayReminders();
            break;

        case 2:
            const viewId = getUserReminderId();
            if (viewId) console.log(`Reminder:`, rdb.getReminder(viewId));
            else console.log("Invalid ID.");
            break;

        case 3:
            const title = readline.question("Enter reminder title: ");
            const dateInput = readline.question("Enter reminder date (YYYY-MM-DD): ");
            const date = new Date(dateInput);
            rdb.createReminder(title, date);
            console.log("Reminder created successfully!");
            break;

        case 4:
            const updateId = getUserReminderId();
            if (updateId) {
                const newTitle = readline.question("Enter new title: ");
                const newDateInput = readline.question("Enter new date (YYYY-MM-DD): ");
                const newDate = new Date(newDateInput);
                rdb.updateReminder(updateId, newTitle, newDate);
                console.log("Reminder updated successfully!");
            } else console.log("Invalid ID.");
            break;

        case 5:
            const removeId = getUserReminderId();
            if (removeId) {
                rdb.removeReminder(removeId);
                console.log(`Reminder ID ${removeId} removed.`);
            } else console.log("Invalid ID.");
            break;

        case 6:
            const markId = getUserReminderId();
            if (markId) {
                const reminder = rdb.getReminder(markId);
                if (reminder?.completed) {
                    console.log("Reminder is already marked as completed.");
                } else {
                    rdb.markReminderAsCompleted(markId);
                    console.log(`Reminder ID ${markId} marked as completed.`);
                }
            } else console.log("Invalid ID.");
            break;

        case 7:
            const unmarkId = getUserReminderId();
            if (unmarkId) {
                const reminder = rdb.getReminder(unmarkId);
                if (!reminder?.completed) {
                    console.log("Reminder is already marked as not completed.");
                } else {
                    rdb.unmarkReminderAsCompleted(unmarkId);
                    console.log(`Reminder ID ${unmarkId} marked as not completed.`);
                }
            } else console.log("Invalid ID.");
            break;

        case 8:
            console.log("\nReminders marked as completed:");
            console.log(rdb.getAllRemindersMarkedAsCompleted() || []);
            break;

        case 9:
            console.log("\nReminders not marked as completed:");
            console.log(rdb.getAllRemindersNotMarkedAsCompleted() || []);
            break;

        case 10:
            console.log("\nReminders due by today:");
            console.log(rdb.getAllRemindersDueByToday() || []);
            break;

        case 11:
            console.log("Exiting...");
            process.exit(0);

        default:
            console.log("Invalid choice. Please try again.");
    }
    delay(3000);
}
