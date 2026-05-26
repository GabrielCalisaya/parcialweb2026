import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcialApi {
  constructor(private http: HttpClient) {

  }
  getCambiar(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '09c12e3b32msh8184c33d1201554p18fbb3jsn2a5a1088e58e',
        'x-rapidapi-host': 'cambiar',
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('cambiar', httpOptions);
}
}