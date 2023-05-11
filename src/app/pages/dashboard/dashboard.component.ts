import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  years: any[] = [];
  selected_year: number = (new Date()).getFullYear();

  nodes: any[] = [];
  selectedNode: any = '';

  constructor() { }

  ngOnInit(): void {
    for (let i = 2023; i < 2100; i++) {
      this.years.push({ name: i, code: i })
    }
    this.nodes = [
      {
        "label": "Nord",
        "data": "nord",
        "selectable": false,
        "children": [{
          "label": "Agence 1",
          "data": "agence_1",
          "selectable": false,
          "children": [{ "label": "Technicien1", "data": "TECH01" }, { "label": "Technicien2", "data": "TECH02" }]
        },
        {
          "label": "Agence 2",
          "data": "agence_2",
          "selectable": false,
          "children": [{ "label": "Technicien3", "data": "TECH03" }, { "label": "Technicien4", "data": "TECH04" }]
        },]
      },
      {
        "label": "IDF",
        "data": "idf",
        "selectable": false,
        "children": [{
          "label": "Agence 3",
          "data": "agence_3",
          "selectable": false,
          "children": [{ "label": "Technicien5", "data": "TECH05" }, { "label": "Technicien6", "data": "TECH06" }]
        },
        {
          "label": "Agence 4",
          "data": "agence_4",
          "selectable": false,
          "children": [{ "label": "Technicien7", "data": "TECH07" }, { "label": "Technicien8", "data": "TECH08" }]
        },]
      },
    ];
  }

}
