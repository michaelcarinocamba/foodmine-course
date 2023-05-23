import { Food } from './app/shared/models/foods';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/img-1.jpg',
    tags: ['FastFood', 'Lunch'],
  },
  {
    id: '2',
    name: 'Burger',
    price: 10,
    cookTime: '15-30',
    favorite: true,
    origins: ['italy', 'asia'],
    stars: 4.0,
    imageUrl: 'assets/img-2.jpg',
    tags: ['FastFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Chicken',
    price: 30,
    cookTime: '15-30',
    favorite: true,
    origins: ['italy', 'asia'],
    stars: 4.0,
    imageUrl: 'assets/img-3.jpg',
    tags: ['FastFood', 'Dinner'],
  },
]
