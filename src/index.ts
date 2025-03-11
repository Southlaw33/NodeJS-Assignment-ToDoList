import ReminderDataBase from "./reminders";

const rdb = new ReminderDataBase();
rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));
rdb.createReminder("visit the doctor", new Date("2025-3-12"));

rdb.createReminder("Deadline to finish the NodeJS assignment", new Date("2025-3-14"));
const reminders = rdb.getAllReminders();

console.log("The reminders present are:",reminders);





//rdb.removeExpiredReminders();

//console.log("The reminders present after removing expired reminders are:",rdb.getAllReminders());