"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class Display {
    constructor() {
        this._productStocks = config_1.productStocks;
    }
    get productStocks() {
        return this._productStocks;
    }
    addStock(productName) {
        const product = this._productStocks.find((product) => product.product.name === productName);
        if (product) {
            product.stock += 1;
        }
    }
    removeStock(productName) {
        const product = this._productStocks.find((product) => product.product.name === productName);
        if (product) {
            if (!this.isExistStock(productName)) {
                throw new Error('在庫がありません');
            }
            product.stock -= 1;
        }
    }
    isExistStock(productName) {
        const product = this._productStocks.find((product) => product.product.name === productName);
        if (product) {
            return product.stock > 0;
        }
        return false;
    }
}
const displaySingleton = new Display();
exports.default = displaySingleton;
//# sourceMappingURL=display.js.map