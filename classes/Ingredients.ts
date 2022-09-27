class Water {

  public maxCapacity : number;
  public measureUnit : number;
  public name        : string;
  public stock       : number;

  constructor(
    maxCapacity : number,
    measureUnit : number,
    name        : string,
    stock       : number,
  ) {
    this.maxCapacity = maxCapacity;
    this.measureUnit = measureUnit;
    this.name        = name;
    this.stock       = stock;
  }

  refill(): void {
    this.stock = this.maxCapacity;
  }

  getName(): string {
    return this.name;
  }

  getStock(): number {
    return this.stock;
  }

  getMeasureUnit(): number {
    return this.measureUnit;
  }

  setStock(stock: number): void {
    this.stock = stock;
  }

}