import { Component, OnInit } from '@angular/core';
import { Training } from './training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  data: Training[] = [
    {
      sportsman: "Аллаяров Игорь Олегович",
      coach: "Каменьщиков Павел Валерьевич",
      tasks: [
        {
          description: "4 по 50 кроль ускорение",
        },
        {
          description: "4 по 50 кроль ускорение",
        },
        {
          description: "4 по 50 кроль ускорение",
        }
      ]
    }, {
      sportsman: "Аллаяров Игорь Олегович",
      coach: "Каменьщиков Павел Валерьевич",
      tasks: [
        {
          description: "4 по 50 кроль ускорение",
        },
        {
          description: "4 по 50 кроль ускорение",
        },
        {
          description: "4 по 50 кроль ускорение",
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
