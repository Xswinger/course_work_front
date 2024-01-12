import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiContentService } from 'src/app/api/api.content.service';
import { UserFilter } from './sportsman';

@Component({
  selector: 'app-sportsman',
  templateUrl: './sportsman.component.html',
  styleUrls: ['./sportsman.component.css']
})
export class SportsmanComponent implements OnInit {

  data: UserFilter[] = [];

  Sportsman!: FormGroup

  constructor(private formBuilder: FormBuilder, private sportsmanService: ApiContentService) { 
    this.Sportsman = this.formBuilder.group({
      fullName: ''
    })
  }

  ngOnInit(): void {
  }

  getSportsman() {
    this.sportsmanService.getSportsmanByName(this.Sportsman.value).subscribe(
      (data: UserFilter[]) => {
        console.log(data)
        this.data = data;
      }
    )
  }

}
