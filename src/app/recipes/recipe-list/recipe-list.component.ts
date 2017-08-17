import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg'
    ), new Recipe(
      'A test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg'
    ), new Recipe(
      'A test Recipe',
      'This is a simply a test',
      'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
