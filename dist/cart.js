"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const config_1 = require("./config");
class Cart {
    constructor(display) {
        this._items = [];
        this._display = display;
    }
    get items() {
        return this._items;
    }
    addProduct(productName) {
        if (!this._display.isExistStock(productName)) {
            throw new Error('在庫がありません');
        }
        const product = config_1.products.find((product) => product.name === productName);
        if (!product) {
            throw new Error('商品が見つかりません');
        }
        this._items.push(product);
        this._display.removeStock(productName);
    }
    removeProduct(productName) {
        const productIndex = this._items.findIndex((product) => product.name === productName);
        if (productIndex === -1) {
            throw new Error('カートに該当商品がありません');
        }
        this._items.splice(productIndex, 1);
        this._display.addStock(productName);
    }
    clearCart() {
        this._items.forEach((product) => {
            this._display.addStock(product.name);
        });
        this._items = [];
    }
}
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map