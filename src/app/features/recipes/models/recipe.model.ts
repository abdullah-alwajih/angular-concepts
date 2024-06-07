export interface IRecipe {
  name: string;
  description: string;
  imageURL: string;
}

export const demoRecipes: IRecipe[] = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    imageURL: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
  },
  {
    name: "Chicken Curry",
    description: "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
    imageURL: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    name: "Caprese Salad",
    description: "A simple Italian salad made with fresh tomatoes, mozzarella cheese, and basil.",
    imageURL: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    name: "Beef Tacos",
    description: "Mexican-style beef tacos served with fresh salsa, guacamole, and sour cream.",
    imageURL: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    name: "Chocolate Cake",
    description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    imageURL: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
  }
];
