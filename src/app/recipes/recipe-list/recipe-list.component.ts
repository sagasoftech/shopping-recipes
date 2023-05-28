import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output('recipeWasSelected') recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('The test recipe', 'This is just a test Recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/a/a1/Kollukattai-Vinayagar-Chathurthi-Recipes.jpg'),
    new Recipe('The test recipe2', 'This is just a test Recipe2', 
    'https://upload.wikimedia.org/wikipedia/commons/a/a1/Kollukattai-Vinayagar-Chathurthi-Recipes.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
