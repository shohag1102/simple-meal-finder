import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.scss',
})
export class MealListComponent {
  @Input() meals!: any[];
  @Output() mealSelected = new EventEmitter<any>();
  constructor(private http: HttpClient, private mealService: MealService) {}

  selectMeal(meal: any) {
    console.log(meal);
    this.mealSelected.emit(meal);
  }
}
