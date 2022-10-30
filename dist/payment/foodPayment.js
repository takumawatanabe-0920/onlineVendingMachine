"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodPayment = void 0;
const _1 = require(".");
class FoodPayment extends _1.Payment {
    constructor(props) {
        super(props);
    }
    pay() {
        this.hot();
        console.log('食べ物を購入しました', { items: this.cart.items });
    }
    cancel() {
        console.log('キャンセルしました', { items: this.cart.items });
        this.cart.clearCart();
    }
    hot() {
        console.log('温めます');
    }
}
exports.FoodPayment = FoodPayment;
//# sourceMappingURL=foodPayment.js.map