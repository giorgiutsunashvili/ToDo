import { Component, OnInit,EventEmitter } from '@angular/core';
import { DayTask } from 'src/app/shared_models/calendar/day-task.model';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css']
})
export class CalendarModalComponent implements OnInit {
  dayTaskItem!:DayTask;
  newTaskAddedEmitter:EventEmitter<DayTask> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTaskAddBtnClick(){
    this.newTaskAddedEmitter.emit(this.dayTaskItem);
  }

}
