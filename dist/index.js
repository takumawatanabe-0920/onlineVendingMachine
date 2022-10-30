"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("./cart");
const display_1 = require("./display");
const drinkPayment_1 = require("./payment/drinkPayment");
const foodPayment_1 = require("./payment/foodPayment");
const main = () => {
    const cart = new cart_1.Cart(display_1.default);
    const selectProduct = [
        'Coffee',
        'Coffee',
        'YakiOnigiri',
        'Tea',
        'Coffee',
    ];
    for (const productName of selectProduct) {
        cart.addProduct(productName);
    }
    const unselectProduct = ['Coffee', 'Tea'];
    for (const productName of unselectProduct) {
        cart.removeProduct(productName);
    }
    const drinkPayment = new drinkPayment_1.DrinkPayment(cart);
    const foodPayment = new foodPayment_1.FoodPayment(cart);
    for (const payment of [drinkPayment, foodPayment]) {
        console.log({ isInstance: payment instanceof drinkPayment_1.DrinkPayment });
        payment.pay();
    }
};
main();
//# sourceMappingURL=index.js.map