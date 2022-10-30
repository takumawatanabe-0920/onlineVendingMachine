const productStocks = [
  {
    stock: 5,
    product: {
      type: 'drink',
      name: 'Coffee',
      price: 150,
    } as const,
  },
  {
    stock: 2,
    product: {
      type: 'drink',
      name: 'Tea',
      price: 100,
    } as const,
  },
  {
    stock: 3,
    product: {
      type: 'food',
      name: 'Sandwich',
      price: 200,
    } as const,
  },
  {
    stock: 1,
    product: {
      type: 'food',
      name: 'YakiOnigiri',
      price: 300,
    } as const,
  },
]

const products = productStocks.map((productStock) => productStock.product)

type productName = typeof products[number]['name']

export { productStocks, products, productName }
