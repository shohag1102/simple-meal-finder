import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getAllMeals(): Observable<any[]> {
    return this.http
      .get<any[]>('https://meal-finder-api-wkvs.vercel.app/foods')
      .pipe(
        map((response) => {
          console.log('API Response:', response);
          return response;
        })
      );
  }

  findMealsByName(query: string): Observable<any[]> {
    return this.http
      .get<any[]>('https://meal-finder-api-wkvs.vercel.app/foods')
      .pipe(
        map((meals) =>
          meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(query.toLowerCase())
          )
        )
      );
  }
}
