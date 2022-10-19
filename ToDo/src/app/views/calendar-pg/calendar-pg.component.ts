import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarModalComponent } from 'src/app/shared_components/modals/calendar-modal/calendar-modal.component';
import { DayTask } from 'src/app/shared_models/calendar/day-task.model';
import { WeekDay } from 'src/app/shared_models/calendar/week-day.model';
import { Week } from 'src/app/shared_models/calendar/week.model';

@Component({
  selector: 'app-calendar-pg',
  templateUrl: './calendar-pg.component.html',
  styleUrls: ['./calendar-pg.component.css']
})
export class CalendarPgComponent implements OnInit {
  week: Week = new Week();

  constructor(public dialog: MatDialog) { }

  openDialog(task: DayTask) {
    const dialogRef = this.dialog.open(CalendarModalComponent);
    dialogRef.componentInstance.dayTaskItem = task;
    dialogRef.componentInstance.newTaskAddedEmitter.subscribe(result => {

    });
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<WeekDay>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data.tasks,
        event.container.data.tasks,
        event.previousIndex,
        event.currentIndex,
      );
    }
    var newWeekDay = this.week.allWeekDays.find(day => day.title == event.container.data.title);
    var deletedTask = newWeekDay?.tasks.splice(event.currentIndex+1, 1);
    if (deletedTask != undefined) {
      var currentWeekDay = this.week.allWeekDays.find(day => day.title == event.previousContainer.data.title);
      currentWeekDay?.tasks.splice(event.previousIndex, 0, deletedTask[0]);
    }
  }

}
