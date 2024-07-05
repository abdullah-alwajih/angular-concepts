import {Component, inject} from '@angular/core';
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  display = '';


  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
