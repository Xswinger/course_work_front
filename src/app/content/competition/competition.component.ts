import { Component, OnInit } from '@angular/core';
import { Competition } from './competition';
import { ApiContentService } from 'src/app/api/api.content.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  nameFilter: string = "";

  data: Competition[] = [];

  filteredData = this.data;
  calendarData = this.data.sort((fc, sc) => new Date(fc.startDate).getDate() - new Date(sc.startDate).getDate()).slice(0, 3).reverse();

  constructor(private competitionService: ApiContentService) { }

  ngOnInit(): void {
    this.getCompetitions();
  }

  filterData() {
    this.filteredData = [];
    this.data.forEach(competition => {
      if (this._includes(competition.name, this.nameFilter) || this.nameFilter == "") {
        this.filteredData.push(competition);
      }
    })
  }

  _includes(str: string, fstr: string) {
    return (!!fstr && fstr.length)
      ? str.includes(fstr)
      : false;
  }

  getCompetitions() {
    this.competitionService.getCompetitions().subscribe(
      (data: any) => {
        console.log(data)
        this.data = data;
        this.filteredData = data;
        this.calendarData = this.data.sort((fc, sc) => new Date(fc.startDate).getDate() - new Date(sc.startDate).getDate()).slice(0, 3).reverse();
      }
    )
  }

}
