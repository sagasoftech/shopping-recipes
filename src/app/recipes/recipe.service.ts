import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('The test recipe', 'This is just a test Recipe', 
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Kollukattai-Vinayagar-Chathurthi-Recipes.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('The test recipe2', 'This is just a test Recipe2', 
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Kollukattai-Vinayagar-Chathurthi-Recipes.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}