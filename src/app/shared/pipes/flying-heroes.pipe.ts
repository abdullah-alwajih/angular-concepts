import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from "../../core/models/hero.model";
@Pipe({
  standalone: true,
  name: 'flyingHeroes',
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter((hero) => hero.canFly);
  }
}
