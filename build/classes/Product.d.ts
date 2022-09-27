import { IIngredient } from '../interfaces/Ingredient';
export declare class Product {
    private ingredients;
    private name;
    private price;
    constructor(ingredients: IIngredient[], name: string, price: number);
    getName(): string;
    getPrice(): number;
    checkIngredientsAvailability(): boolean;
}
