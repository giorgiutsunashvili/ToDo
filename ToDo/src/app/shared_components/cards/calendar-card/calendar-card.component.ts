import { Component, Input, OnInit } from '@angular/core';
import { DayTask } from 'src/app/shared_models/calendar/day-task.model';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnInit {
  @Input()
  dayTaskItem!:DayTask;
  constructor() { }

  ngOnInit(): void {
  }

}
