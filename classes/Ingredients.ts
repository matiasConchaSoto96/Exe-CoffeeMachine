import { IIngredient, IIngredientCanBoil, IIngredientCanGrind } from "../interfaces/Ingredient";

export class Water implements IIngredient, IIngredientCanBoil {

  public currentTemp : number;
  public maxCapacity : number;
  public maxTemp     : number;
  public measureUnit : string;
  public minTemp     : number;
  public name        : string;
  public stock       : number;
  private static instance    : IIngredient;

  constructor(
    currentTemp : number, maxCapacity : number,
    maxTemp     : number, measureUnit : string, 
    minTemp     : number, name        : string,
    stock       : number,
  ) {
    this.currentTemp = currentTemp;
    this.maxCapacity = maxCapacity;
    this.maxTemp     = maxTemp;
    this.measureUnit = measureUnit;
    this.minTemp     = minTemp;
    this.name        = name;
    this.stock       = stock;
  }

  async boil(): Promise<boolean> {
    let isBoil = true;

    if( this.currentTemp < this.minTemp ) this.currentTemp = this.maxTemp;
    
    return isBoil;
  }

  async ready(): Promise<boolean> {
    let isReady = true;

    if( this.stock < 0 ) {
      isReady = false;
      console.log(`Stock del ingrediente ${this.name} insuficiente!!!`);
    };

    if( this.currentTemp < this.minTemp ) {
      isReady = false;
      console.log(`Temperatura baja del ingrediente ${this.name}!!!`)
    };

    return isReady;
  }

  refill(): void {
    this.stock = this.maxCapacity;
  }
  
  static getInstance(): IIngredient {
    if (!this.instance) {
      this.instance = new Water( 35, 5, 40,'lt', 30, "agua", 5 );
    }

    return this.instance;
  }

  getName(): string {
    return this.name;
  }

  getStock(): number {
    return this.stock;
  }

  getMeasureUnit(): string {
    return this.measureUnit;
  }

  setStock(stock: number): void {
    this.stock = stock;
  }

}

export class Coffee implements IIngredient, IIngredientCanGrind {

  public maxCapacity : number;
  public measureUnit : string;
  public name        : string;
  public stock       : number;
  private static instance    : IIngredient;

  constructor(
    maxCapacity : number,
    measureUnit : string, 
    name        : string,
    stock       : number,
  ) {
    this.maxCapacity = maxCapacity;
    this.measureUnit = measureUnit;
    this.name        = name;
    this.stock       = stock;
  }

  async grind(): Promise<boolean> {
    console.log('Moliendo los granos de café');

    return true;
  }

  async ready(): Promise<boolean> {
    let isReady = true;

    if( this.stock < 0 ) {
      isReady = false;
      console.log(`Stock del ingrediente ${this.name} insuficiente!!!`);
    };

    return isReady;
  }

  refill(): void {
    this.stock = this.maxCapacity;
  }

  static getInstance(): IIngredient {
    if (!this.instance) {
      this.instance = new Coffee( 200, 'g', 'café en grano', 200 );
    }

    return this.instance;
  }

  getName(): string {
    return this.name;
  }

  getStock(): number {
    return this.stock;
  }

  getMeasureUnit(): string {
    return this.measureUnit;
  }

  setStock(stock: number): void {
    this.stock = stock;
  }

}