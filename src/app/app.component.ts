import { Component, inject } from '@angular/core';
import { MealService } from './meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  meals: any[] = [];
  mealService: MealService = inject(MealService);
  constructor() {
    this.mealService.getAllMeals().subscribe((meals) => (this.meals = meals));
  }
  searchText: string = '';
  favouriteMeals: any[] = [];
  filteredMeals: any[] = [];
  addToFavorites(meal: any) {
    console.log('from app', meal);
    this.favouriteMeals.push(meal);
  }
  onSearch() {
    if (this.searchText.trim()) {
      this.mealService
        .findMealsByName(this.searchText)
        .subscribe((filteredMeals) => {
          this.meals = filteredMeals;
        });
    } else {
      this.mealService.getAllMeals().subscribe((meals) => (this.meals = meals));
    }
    console.log(this.searchText, this.meals);
  }
}
