import {Gender} from "../../../shared/enums/gender.enum";



export class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string,
    public gender?: Gender,
  ) {
  }
}
