import { Component, OnInit } from '@angular/core';
import { ApiContentService } from 'src/app/api/api.content.service';
import { Task, UserExercises} from './user-training';
import { error } from 'console';

@Component({
  selector: 'app-user-training',
  templateUrl: './user-training.component.html',
  styleUrls: ['./user-training.component.css']
})
export class UserTrainingComponent implements OnInit {

  trainings: UserExercises[] = [];

  tasks: Task[] = [{
    description: "",
    count: 0
  }];

  constructor(private userTrainingService: ApiContentService) { }

  ngOnInit(): void {
    this.getTrainings();
  }

  getTrainings() {
    this.userTrainingService.getTrainingsById().subscribe(
      (data: UserExercises[]) => {
        console.log(data);
        this.trainings = data;
      }
    )
  }

  addTraining() {
    console.log(this.tasks);
    this.userTrainingService.addTraining({coachId: 1, sportsmanId: 1, exercises: this.tasks}).subscribe(
      (data: any) => {
        console.log(data);
      }, error => {
        this.getTrainings();
      }
    )
  }

  addTask() {
    this.tasks.push({
      description: "",
      count: 0
    });
  }

  removeTask() {
    this.tasks.pop();
  }

}
