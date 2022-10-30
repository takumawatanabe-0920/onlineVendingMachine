import { Cart } from '../cart'

export abstract class Payment {
  protected cart: Cart
  constructor(cart: Cart) {
    this.cart = cart
  }
  abstract pay(): void
  abstract cancel(): void
}
