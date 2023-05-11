import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

import { MonthListComponent } from './dashboard/month-list/month-list.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { WeekDetailComponent } from './dashboard/week-detail/week-detail.component';
import { MonthDetailComponent } from './dashboard/month-detail/month-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    MonthListComponent,
    WeekDetailComponent,
    MonthDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ToolbarModule,
    DropdownModule,
    ButtonModule,
    ProgressBarModule,
    TagModule,
    TreeSelectModule,
    InputNumberModule,
    TabViewModule,
    DividerModule,
    InputTextareaModule,
    TableModule
  ],
})

export class PagesModule { }
