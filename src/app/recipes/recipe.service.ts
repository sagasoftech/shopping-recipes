import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Modak', 'Modak are Maharashtrian festive dumplings', 
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/Kollukattai-Vinayagar-Chathurthi-Recipes.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Pedha', 'Peda or Pera is a mithai from the Indian subcontinent', 
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Indian_Sweet_Dessert_Peda_in_a_white_bone_china_plate.jpg?20150611053727',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipeById(index: number){
        return this.recipes[index];
    }

    getRecipes(){
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}