export const FoodCategoryValues = {
    Breakfast: 'breakfast',
    Lunch: 'lunch',
    Snack: 'snack',
    Dinner: 'dinner'
} as const

export type FoodCategory = typeof FoodCategoryValues[keyof typeof FoodCategoryValues]

export default interface Food {
    id: number;
    name: string;
    description: string;
    category: FoodCategory;
    image: string
}