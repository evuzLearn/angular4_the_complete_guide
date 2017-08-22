import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg'
    ), new Recipe(
      'Another Test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg'
    )];

    getRecipes() {
      return this.recipes.slice();
    }
}
