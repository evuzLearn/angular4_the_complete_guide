import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frech Fries', 20)
      ]
    ), new Recipe(
      'Another Test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg',
      [
        new Ingredient('Buns', 3),
        new Ingredient('Meat', 2)
      ]
    )];

  getRecipes() {
    return this.recipes.slice();
  }
}
