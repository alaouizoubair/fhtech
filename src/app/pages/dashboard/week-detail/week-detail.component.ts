import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-detail',
  templateUrl: './week-detail.component.html',
  styleUrls: ['./week-detail.component.scss']
})
export class WeekDetailComponent implements OnInit {

  status: any[] = [];
  selected_status: number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.status = [
      { name: 'Travaillé', code: 1 },
      { name: 'CP', code: 2 },
      { name: 'RTT', code: 3 },
      { name: '0.5 CP', code: 4 },
      { name: '0.5 RTT', code: 5 },
      { name: 'AT ou MAL', code: 5 },
      { name: 'Nouvel EMB', code: 5 },
      { name: 'MAT ou PAT', code: 5 },
      { name: 'FERIE', code: 5 },
      { name: 'REPOS HEBDO', code: 5 },
    ];
  }

}
