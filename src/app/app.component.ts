import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  searchText: string = '';
  favouriteMeals: any[] = [];
  addToFavorites(meal: any) {
    console.log('from app', meal);
    this.favouriteMeals.push(meal);
  }
  onSearchMeal() {
    console.log(this.searchText);
  }
}
