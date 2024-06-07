import {Component, OnInit} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {demoRecipes, IRecipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes?: IRecipe[];

  ngOnInit() {
    this.recipes = demoRecipes;
  }
}
