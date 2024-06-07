import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {RecipesComponent} from "./features/recipes/components/recipes/recipes.component";
import {ShoppingListComponent} from "./features/shoppings/components/shopping-list/shopping-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RecipesComponent, ShoppingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts';
}
