import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  api = [
    {
      idMeal: '52802',
      strMeal: 'Beef Wellington',
      strInstructions:
        'Preheat the oven to 200C. Roll out the pastry on a lightly floured surface. Spread the mushroom duxelles over the beef, then wrap in the pastry. Brush with beaten egg and bake for 30 minutes. Slice and serve.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
      strTags: 'Beef,Main,Dinner',
    },
    {
      idMeal: '52823',
      strMeal: 'Chicken Alfredo',
      strInstructions:
        'Cook the pasta in boiling water. In a separate pan, heat cream and stir in grated parmesan until smooth. Add cooked chicken pieces, mix with pasta, and serve hot.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
      strTags: 'Pasta,Chicken,Italian',
    },
    {
      idMeal: '52847',
      strMeal: 'Pad Thai',
      strInstructions:
        'Soak rice noodles in water for 30 minutes. Stir-fry garlic, prawns, and tofu. Add noodles, eggs, and Pad Thai sauce. Garnish with peanuts and lime wedges before serving.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
      strTags: 'Thai,Noodles,Quick',
    },
    {
      idMeal: '52918',
      strMeal: 'Vegetable Stir Fry',
      strInstructions:
        'Heat oil in a wok. Add chopped vegetables, garlic, and ginger. Stir-fry for 5-7 minutes. Add soy sauce and a dash of sesame oil. Serve over steamed rice or noodles.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg',
      strTags: 'Vegan,Quick,Healthy',
    },
    {
      idMeal: '52936',
      strMeal: 'Lamb Rogan Josh',
      strInstructions:
        'Marinate lamb in yogurt and spices. Cook onions and tomatoes, then add lamb and simmer with stock for 1 hour until tender. Serve with basmati rice.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg',
      strTags: 'Curry,Indian,Dinner',
    },
    {
      idMeal: '52867',
      strMeal: 'Fish Tacos',
      strInstructions:
        'Marinate fish in lime juice, cumin, and chili powder. Grill fish and serve in corn tortillas with cabbage slaw and a drizzle of sour cream.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      strTags: 'Mexican,Seafood,Snack',
    },
    {
      idMeal: '52965',
      strMeal: 'Chocolate Lava Cake',
      strInstructions:
        'Preheat oven to 180C. Mix chocolate, butter, eggs, sugar, and flour. Pour into ramekins and bake for 12 minutes. Serve warm with vanilla ice cream.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg',
      strTags: 'Dessert,Chocolate,Baking',
    },
    {
      idMeal: '52996',
      strMeal: 'Caprese Salad',
      strInstructions:
        'Slice tomatoes and mozzarella. Arrange alternately on a plate. Drizzle with olive oil, balsamic glaze, and sprinkle with fresh basil.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1520084413.jpg',
      strTags: 'Salad,Italian,Healthy',
    },
    {
      idMeal: '53016',
      strMeal: 'Spaghetti Carbonara',
      strInstructions:
        'Cook spaghetti. In a separate bowl, whisk eggs and parmesan. Fry pancetta, then toss with pasta and egg mixture off the heat. Serve immediately.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
      strTags: 'Pasta,Quick,Italian',
    },
    {
      idMeal: '53045',
      strMeal: 'Bakewell tart',
      strInstructions:
        'Mix flour, sugar, baking powder, milk, and egg. Stir in blueberries. Pour batter onto a hot griddle. Flip when bubbles form and serve with syrup.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
      strTags: 'Breakfast,Quick,Fruity',
    },
  ];

  constructor(private http: HttpClient) {}
  // apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;

  // getAllMeals(): Observable<any[]> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response) => response.meals || []) // Ensure it always returns an array
  //   );
  // }
  // findMealsByName(query: string): Observable<any[]> {
  //   const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
  //   return this.http.get<any>(apiUrl).pipe(
  //     map((response) => {
  //       const meals = response.meals || [];
  //       // Filter meals based on the query
  //       return meals.filter((meal: any) =>
  //         meal.strMeal.toLowerCase().includes(query.toLowerCase())
  //       );
  //     })
  //   );
  // }
  // Method to get all meals from the local array
  getAllMeals(): Observable<any[]> {
    return of(this.api);
  }

  // Method to search for meals by name from the local array
  findMealsByName(query: string): Observable<any[]> {
    return of(this.api).pipe(
      map((meals) =>
        meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }
}
