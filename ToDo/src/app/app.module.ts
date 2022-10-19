import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarPgComponent } from './views/calendar-pg/calendar-pg.component';
import { CalendarCardComponent } from './shared_components/cards/calendar-card/calendar-card.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { CalendarModalComponent } from './shared_components/modals/calendar-modal/calendar-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalendarPgComponent,
    CalendarCardComponent,
    CalendarModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
