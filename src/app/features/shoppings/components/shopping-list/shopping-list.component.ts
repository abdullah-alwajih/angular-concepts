import {Component, OnInit} from '@angular/core';
import {ShoppingCreateComponent} from "../shopping-create/shopping-create.component";
import {ShoppingItemComponent} from "./shopping-item/shopping-item.component";
import {demoIngredients, IIngredient} from "../../models/ingredient.model";
import {RecipeItemComponent} from "../../../recipes/components/recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    ShoppingCreateComponent,
    ShoppingItemComponent,
    RecipeItemComponent
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients?: IIngredient[];

  ngOnInit() {
    this.ingredients = demoIngredients;
  }
}
