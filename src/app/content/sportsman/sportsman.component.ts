import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiContentService } from 'src/app/api/api.content.service';
import { FoundedUser } from './sportsman';

@Component({
  selector: 'app-sportsman',
  templateUrl: './sportsman.component.html',
  styleUrls: ['./sportsman.component.css']
})
export class SportsmanComponent implements OnInit {

  data: FoundedUser[] = [];

  Sportsman!: FormGroup

  constructor(private formBuilder: FormBuilder, private sportsmanService: ApiContentService) { 
    this.Sportsman = this.formBuilder.group({
      name: ''
    })
  }

  ngOnInit(): void {
  }

  getSportsman() {
    this.sportsmanService.getSportsman(this.Sportsman.value).subscribe(
      (data: FoundedUser[]) => {
        console.log(data)
        this.data = data;
      }
    )
  }

}
