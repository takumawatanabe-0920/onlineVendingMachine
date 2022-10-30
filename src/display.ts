import { productName, productStocks } from './config'

class Display {
  private _productStocks = productStocks

  get productStocks() {
    return this._productStocks
  }

  addStock(productName: productName) {
    const product = this._productStocks.find(
      (product) => product.product.name === productName
    )
    if (product) {
      product.stock += 1
    }
  }

  removeStock(productName: productName) {
    const product = this._productStocks.find(
      (product) => product.product.name === productName
    )
    if (product) {
      if (!this.isExistStock(productName)) {
        throw new Error('在庫がありません')
      }
      product.stock -= 1
    }
  }

  isExistStock(productName: productName) {
    const product = this._productStocks.find(
      (product) => product.product.name === productName
    )
    if (product) {
      return product.stock > 0
    }
    return false
  }
}

const displaySingleton = new Display()

export default displaySingleton
