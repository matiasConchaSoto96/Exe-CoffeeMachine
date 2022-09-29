import { IIngredient } from '../interfaces/Ingredient';

export class Product {

  private ingredients : IIngredient[];
  // private measures    : Map<string,number>;
  private name        : string;
  private price       : number;

  constructor(
    ingredients : IIngredient[],
    // measures    : Map<string,number>,
    name        : string,
    price       : number,
  ) {
    this.ingredients = ingredients;
    // this.measures    = measures;
    this.name        = name;
    this.price       = price;
  };

  private checkIngredientsAvailability(): boolean {
    
    const ingredientsReady = this.ingredients.map( ( ingredient ) => {

                                  const readyObj = { isReady: false };

                                  console.log(`-------------Revisando el ingrediente ${ ingredient.name }--------------`);
                                  ingredient.ready().then(( isReady ) => {
                                    readyObj.isReady = isReady;
                                  });

                                  return readyObj.isReady;

                                });

    const areAllIngredientsReady = ingredientsReady.every( ( isReady ) => isReady );

    if( areAllIngredientsReady ) {
      console.log(`-----------Todos los ingredientes están listos------------`);
    } else {
      console.log(`-----------No todos los ingredientes están listos------------`);
    }

    return areAllIngredientsReady;

  }

  async prepare(): Promise<boolean> {
    const areIngredientsAvailability = this.checkIngredientsAvailability();

    if( !areIngredientsAvailability ) console.log(`No se puede preparar el producto ${this.name}`);

    return areIngredientsAvailability;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

}

