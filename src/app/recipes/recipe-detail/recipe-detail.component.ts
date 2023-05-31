import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: Router,
              private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
      );
  }        

  addToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
