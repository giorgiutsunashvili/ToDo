import { TaskStatus } from "./task-status.enum";

export class DayTask
{
    public id!:string;
    public title!:string;
    public description!:string;
    public hoursFrom!:string;
    public hoursTo!:string;
    public status!:TaskStatus;

    constructor(from:string="",to:string="",title:string="",description:string=""){
        this.title = title;
        this.description = description;
        this.hoursFrom = from;
        this.hoursTo = to;
        this.status = TaskStatus.Todo;
        this.id = this.newGuid();
    }

    public newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}