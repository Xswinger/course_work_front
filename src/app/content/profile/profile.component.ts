import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any[] = [
    {championship: "Чемпионат ИТМО", results: [
      {distance: "50 брасс", result: 31.50, rank: 1, fina: 500},
      {distance: "50 кроль", result: 31.50, rank: 1, fina: 600},
      {distance: "50 батт", result: 31.50, rank: 1, fina: 700},
    ]},
    {championship: "Чемпионат ИТМО", results: [
      {distance: "50 брасс", result: 31.50, rank: 1, fina: 500},
      {distance: "50 кроль", result: 31.50, rank: 1, fina: 600},
      {distance: "50 батт", result: 31.50, rank: 1, fina: 700},
    ]},
    {championship: "Чемпионат ИТМО", results: [
      {distance: "50 брасс", result: 31.50, rank: 1, fina: 500},
      {distance: "50 кроль", result: 31.50, rank: 1, fina: 600},
      {distance: "50 батт", result: 31.50, rank: 1, fina: 700},
    ]},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
