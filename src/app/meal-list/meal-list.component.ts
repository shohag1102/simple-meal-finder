import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

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
      this.fetchMeals(this.searchText);
    }
  }
  fetchMeals(query: string) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.meals = response.meals || [];
    });
  }
  selectMeal(meal: any) {
    console.log(meal);
    this.mealSelected.emit(meal);
  }
}
