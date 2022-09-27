"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(ingredients, 
    // measures    : Map<string,number>,
    name, price) {
        this.ingredients = ingredients;
        // this.measures    = measures;
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    checkIngredientsAvailability() {
        const ingredientsReady = this.ingredients.map(async (ingredient) => {
            const isReady = await ingredient.ready();
            return isReady;
        });
        const areAllIngredientsReady = ingredientsReady.every((isReady) => isReady);
        return areAllIngredientsReady;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map