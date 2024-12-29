import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.scss',
})
export class MealListComponent implements OnChanges {
  @Input() searchText!: string;
  @Output() mealSelected = new EventEmitter<any>();
  meals: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnChanges(): void {
    if (this.searchText) {
      this.fetchMeals(this.searchText)
        .pipe(
          catchError((error) => {
            console.error('Error fetching meals:', error);
            return of([]);
          })
        )
        .subscribe((meals) => {
          this.meals = meals || [];
        });
    }
  }

  fetchMeals(query: string) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
    return this.http.get<any>(apiUrl).pipe(
      debounceTime(30),
      distinctUntilChanged(),
      switchMap((response) => of(response.meals || []))
    );
  }
  selectMeal(meal: any) {
    console.log(meal);
    this.mealSelected.emit(meal);
  }
}
