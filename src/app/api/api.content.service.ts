import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Training } from '../content/user-training/user-training';

@Injectable({
  providedIn: 'root'
})
export class ApiContentService {
  private httpOptions: any;

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin, Content-Type, X-Auth-Token'",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
      })
    };
  }

  //Sportsman
  getSportsmanByName(name: any) {
    const url = `${this.baseUrl}/person/getSportsmanByName`;
    return this.http.post(url, name, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  getSportsmanById(id: any) {
    const url = `${this.baseUrl}/person/getSportsmanById`;
    return this.http.post(url, id, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  //Coach
  getCoachByName(name: any) {
    const url = `${this.baseUrl}/person/getCoachByName`;
    return this.http.post(url, name, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  getCoachById(id: any) {
    const url = `${this.baseUrl}/person/getCoachById`;
    return this.http.post(url, id, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  //Competition
  getCompetitions() {
    const url = `${this.baseUrl}/competition/getAllCompetitions`;
    return this.http.post(url, {}, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  //User training
  getTrainingsById(id = {userId: 1}) {
    const url = `${this.baseUrl}/training/exercisesByUserId`;
    return this.http.post(url, id, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

  addTraining(addedTraining: Training) {
    const url = `${this.baseUrl}/training/createTraining`;
    return this.http.post(url, addedTraining, this.httpOptions).pipe(
      map((response: any) => response)
    );
  }

}
