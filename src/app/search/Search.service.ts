import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

constructor( private http: HttpClient) { }

getMeals(mealName: any): Observable<any>{
  return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
}

}
