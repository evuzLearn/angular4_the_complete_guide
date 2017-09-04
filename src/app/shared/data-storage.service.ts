import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private authService: AuthService,
    private recipeService: RecipeService
  ) { }

  storeRecipes() {
    const token = this.authService.getToken();
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://udemy-ng-b1342.firebaseio.com/recipes.json?auth=' + token,
      recipes);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://udemy-ng-b1342.firebaseio.com/recipes.json?auth=' + token)
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
