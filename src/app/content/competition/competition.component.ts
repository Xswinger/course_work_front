import { Component, OnInit } from '@angular/core';
import { Competition } from './competition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  data: Competition[] = [
    {
      name: "Лига плавания 4-й этап",
      locationCity: "Санкт-Петербург",
      locationPool: "Центр Плавания",
      date: new Date("10-10-2023")
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
