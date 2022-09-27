export interface IIngredient {
  maxCapacity    : number;
  measureUnit    : string;
  name           : string;
  stock          : number;
  getMeasureUnit : () => string;
  getName        : () => string;
  getStock       : () => number;
  ready          : () => Promise<boolean>;
  refill         : () => void;
  setStock       : (stock: number) => void;
}