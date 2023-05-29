import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientCreated = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 10),
        new Ingredient("Tomatos", 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}