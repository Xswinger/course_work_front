import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiContentService } from 'src/app/api/api.content.service';
import { CoachFilter } from './coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  data: CoachFilter[] = [];

  Coach!: FormGroup

  constructor(private formBuilder: FormBuilder, private coachService: ApiContentService) { 
    this.Coach = this.formBuilder.group({
      fullName: ''
    })
  }

  ngOnInit(): void {
  }

  getCoach() {
    this.coachService.getCoachByName(this.Coach.value).subscribe(
      (data: CoachFilter[]) => {
        console.log(data)
        this.data = data;
      }
    )
  }

}
