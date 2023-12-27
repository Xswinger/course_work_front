import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiContentService {
  private httpOptions: any;

  baseUrl = 'localhost:4200';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  //Sportsman
  getSportsman(name: any) {
    const url = `${this.baseUrl}/person/getSportsman`
    return this.http.post(url, name).pipe(
      map((response: any) => response)
    );
  }

}
