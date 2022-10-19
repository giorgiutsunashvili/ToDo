import { WeekDay } from "./week-day.model";

export class Week 
{
    public monday:WeekDay = new WeekDay("ორშაბათი");
    public tuesday:WeekDay = new WeekDay("სამშაბათი");
    public wednesday:WeekDay = new WeekDay("ოთხშაბათი");
    public thursday:WeekDay = new WeekDay("ხუთშაბათი");
    public friday:WeekDay = new WeekDay("პარასკევი");
    public saturday:WeekDay = new WeekDay("შაბათი");
    public sunday:WeekDay = new WeekDay("კვირა");

    public allWeekDays!:WeekDay[];

    constructor(){
        this.allWeekDays = [this.monday,this.tuesday,this.wednesday,this.thursday,this.friday,this.saturday,this.sunday]
    }
}