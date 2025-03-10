class Reminder {
    id: string;
    title: string;
    description: string;
    date: Date;
    constructor(id: string, title: string, description: string, date: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
    }
}
class ReminderDatabase {
    reminders: Reminder[] = [];
    createReminder(id: string, title: string, description: string, date: Date): void {
        this.reminders.push(new Reminder(id, title, description, date));
    }
    getAllReminders(): Reminder[] {
        return this.reminders;
    }
    getReminder(id: string): Reminder | null {
        console.log("reminder found");
        return this.reminders.find(reminder => reminder.id === id) || null;
    }
    removeReminder(id: string): void {
        this.reminders = this.reminders.filter(reminder => reminder.id !== id);
    }
    exists(id: string): string | null {
         if(this.reminders.some(reminder => reminder.id === id)){
            return "Reminder exists";
         }
         else{
            return "Reminder does not exist";
         }
    }
}
// Example usage:
const reminderDB = new ReminderDatabase();
reminderDB.createReminder("1", "Meeting", "Team meeting at 10 AM", new Date("2025-03-11T10:00:00"));
reminderDB.createReminder("2", "Appointment with the doctor", "Meet dr.varun tomorrow", new Date("2025-03-11T13:00:00"));
console.log(reminderDB.getAllReminders());

console.log(reminderDB.getReminder("1"));
reminderDB.removeReminder("1");
console.log(reminderDB.getAllReminders());
console.log(reminderDB.exists("1"));