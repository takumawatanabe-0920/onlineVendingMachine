"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.productStocks = void 0;
const productStocks = [
    {
        stock: 5,
        product: {
            type: 'drink',
            name: 'Coffee',
            price: 150,
        },
    },
    {
        stock: 2,
        product: {
            type: 'drink',
            name: 'Tea',
            price: 100,
        },
    },
    {
        stock: 3,
        product: {
            type: 'food',
            name: 'Sandwich',
            price: 200,
        },
    },
    {
        stock: 1,
        product: {
            type: 'food',
            name: 'YakiOnigiri',
            price: 300,
        },
    },
];
exports.productStocks = productStocks;
const products = productStocks.map((productStock) => productStock.product);
exports.products = products;
//# sourceMappingURL=config.js.map