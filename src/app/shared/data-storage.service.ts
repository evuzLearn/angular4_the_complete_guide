import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://udemy-ng-b1342.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    return this.http.get('https://udemy-ng-b1342.firebaseio.com/recipes.json')
    .map((res: Response) => {
      const recipes: Recipe[] = res.json();
      for (const recipe of recipes) {
        if (recipe['ingredients']) {
          recipe['ingredientes'] = [];
        }
      }
      return recipes;
    }).subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }

}
