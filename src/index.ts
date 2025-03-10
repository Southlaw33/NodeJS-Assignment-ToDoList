import ReminderDataBase from "./reminders";

const rdb = new ReminderDataBase();
rdb.createReminder("Buy Milk", new Date("2021-10-10"));
rdb.createReminder("Buy Bread", new Date("2021-10-11"));

const reminders = rdb.getAllReminders();

console.log(reminders);