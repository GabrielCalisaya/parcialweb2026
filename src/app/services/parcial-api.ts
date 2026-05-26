import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcialApi {
  constructor(private http: HttpClient) {}

  searchRecipes(name: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '09c12e3b32msh8184c33d1201554p18fbb3jsn2a5a1088e58e',
        'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://low-carb-recipes.p.rapidapi.com/search?name='+name, httpOptions);
  }

  translateText(text: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '09c12e3b32msh8184c33d1201554p18fbb3jsn2a5a1088e58e',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    };
    const body = { q: text, source: 'en', target: 'es' };
    return this.http.post('https://deep-translate1.p.rapidapi.com/language/translate/v2',body, httpOptions);
  }
}
