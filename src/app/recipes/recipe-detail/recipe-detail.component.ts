import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params
      .subscribe((params: Params) => this.setRecipe(params));
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  private setRecipe(params: Params) {
    this.recipe = this.recipeService.getRecipe(+params['id']);
  }
}
