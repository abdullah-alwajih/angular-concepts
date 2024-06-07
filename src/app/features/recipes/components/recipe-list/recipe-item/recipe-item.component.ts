import {Component, Input} from '@angular/core';
import {IRecipe} from "../../../models/recipe.model";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe!: IRecipe
}
