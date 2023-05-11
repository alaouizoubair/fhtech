import { Component } from '@angular/core';

@Component({
  selector: 'app-month-detail',
  templateUrl: './month-detail.component.html',
  styleUrls: ['./month-detail.component.scss']
})
export class MonthDetailComponent {
  astreintes: any[];
  constructor() {
    this.astreintes = [
      { 'type': "AST1", 'weeks': "S1,S2", 'count': 2 },
      { 'type': "AST3", 'weeks': "S3", 'count': 1 }
    ]
  }
}
