import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiContentService } from 'src/app/api/api.content.service';
import { SportsmanInfo } from './sportsman-profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sportsman-profile',
  templateUrl: './sportsman-profile.component.html',
  styleUrls: ['./sportsman-profile.component.css']
})
export class SportsmanProfileComponent implements OnInit {

  profileInfo: SportsmanInfo = {
    id: 1, 
    fullName: "Кроль Игорь Брасыч",
    yob: "02.10.2003",
    rank: "КМС",
    sportschool: 1
  };

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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private infoService: ApiContentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getInfo({id: params["id"]})
    });
  }

  getInfo(id: any) {
    this.infoService.getSportsmanById(id).subscribe(
      (data: any) => {
        console.log(data);
        this.profileInfo = data[0];
      }
    )
  }

}
