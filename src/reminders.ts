class reminder{
    id: number;
    title: string;
    date: Date;
    constructor(id: number, title: string, date: Date){
        this.id = id;
        this.title = title;
        this.date = date;
    }
}

class ReminderDataBase{
    reminders: Map<String, reminder> = new Map();
    createReminder(title: string, date: Date){
        const id = Math.floor(Math.random() * 1000);
        const rem = new reminder(id, title, date);
        this.reminders.set(id.toString(), rem);
    }
    getAllReminders(): reminder[] | null{
        return Array.from(this.reminders.values());
    }
    getReminder(id: string): reminder | null{
        return this.reminders.get(id) || null;
    }

    removeReminder(id: string){
        this.reminders.delete(id);
    }
    updateReminder(id: string, title: string, date: Date){ 
        const rem = this.reminders.get(id);
        if(rem){
            if(title){
                rem.title = title;
            }
            if(date){
                rem.date = date;
            }
            this.reminders.set(id, rem);

        }   
    }
    removeExpiredReminders(){
        const now = new Date();
        this.reminders.forEach((rem, id) => {
            if(rem.date < now){
                this.reminders.delete(id);
            }
        });
    }
    exists(id: string): boolean{
        return this.reminders.has(id);
    }
}

export default ReminderDataBase;
