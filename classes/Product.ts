import { IIngredient } from "../interfaces/ingredient";

export class Product {

  private ingredients : IIngredient[];
  private measures    : Map<string,number>;
  private name        : string;
  private price       : number;

  constructor(
    ingredients : IIngredient[],
    measures    : Map<string,number>,
    name        : string,
    price       : number,
  ) {
    this.ingredients = ingredients;
    this.measures    = measures;
    this.name        = name;
    this.price       = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  checkIngredientsAvailability(): boolean {
    
    const ingredientsReady = this.ingredients.map( async ( ingredient ) => {

                                  const isReady = await ingredient.ready();
                                  return isReady;

                                });

    const areAllIngredientsReady = ingredientsReady.every( ( isReady ) => isReady );

    return areAllIngredientsReady;

  }



}

