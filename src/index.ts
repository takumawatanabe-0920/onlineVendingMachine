import { Cart } from './cart'
import displaySingleton from './display'
import { DrinkPayment } from './payment/drinkPayment'
import { FoodPayment } from './payment/foodPayment'

const main = () => {
  const cart = new Cart(displaySingleton)
  const selectProduct = [
    'Coffee',
    'Coffee',
    'YakiOnigiri',
    'Tea',
    'Coffee',
  ] as const
  for (const productName of selectProduct) {
    cart.addProduct(productName)
  }
  const unselectProduct = ['Coffee', 'Tea'] as const
  for (const productName of unselectProduct) {
    cart.removeProduct(productName)
  }
  const drinkPayment = new DrinkPayment(cart)
  const foodPayment = new FoodPayment(cart)
  for (const payment of [drinkPayment, foodPayment]) {
    payment.pay()
  }
  cart.clearCart()
}

main()
