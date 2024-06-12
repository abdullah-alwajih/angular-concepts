export enum Gender {
  male = 1,
  female = 2,
}

export const GENDER = {
  1: "male",
  2: "female",
}

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
