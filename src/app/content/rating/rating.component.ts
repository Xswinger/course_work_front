import { Component, OnInit } from '@angular/core';
import { CompetitionResults } from './rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  data: CompetitionResults[] = [
    {
      name: "Лига плавания 4-й этап",
      location: "Санкт-Петербург",
      date: new Date("10-10-2023"),
      distances: [{
        name: "50 брасс",
        results: [{
          place: 1,
          name: "Аллаяров Игорь Олегович",
          result: "31.50"
        }]
      }]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
