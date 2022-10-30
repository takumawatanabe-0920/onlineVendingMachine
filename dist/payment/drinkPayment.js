"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkPayment = void 0;
const _1 = require(".");
class DrinkPayment extends _1.Payment {
    constructor(props) {
        super(props);
    }
    pay() {
        console.log('飲み物を購入しました', { items: this.cart.items });
    }
    cancel() {
        console.log('飲み物を購入しました', { items: this.cart.items });
        this.cart.clearCart();
    }
}
exports.DrinkPayment = DrinkPayment;
//# sourceMappingURL=drinkPayment.js.map