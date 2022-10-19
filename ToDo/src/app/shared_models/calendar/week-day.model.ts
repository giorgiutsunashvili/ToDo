import { DayTask } from "./day-task.model";

export class WeekDay {
    public title!:string
    public tasks:DayTask[] = [];

    constructor(title:string){
        this.fillWeekDay();
        this.title = title;
    }

    private fillWeekDay(){
        var index = 0;
        while(index < 24){
            this.tasks.push(new DayTask(`${index}.00`,`${index+1}.00`));
            index++;
        }
    }
}