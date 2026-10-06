export const FoodCategory = {
    Breakfast: 'breakfast',
    Lunch: 'lunch',
    Snack: 'snack',
    Dinner: 'dinner'
} as const

export type FoodCategory = typeof FoodCategory[keyof typeof FoodCategory]

export default interface Food {
    id: number;
    name: string;
    description: string;
    category: FoodCategory;
    image: string
}