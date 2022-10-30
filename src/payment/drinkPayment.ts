import { Payment } from '.'
import { Cart } from '../cart'

export class DrinkPayment extends Payment {
  constructor(props: Cart) {
    super(props)
  }

  pay() {
    console.log('飲み物を購入しました', { items: this.cart.items })
  }

  cancel() {
    console.log('飲み物を購入しました', { items: this.cart.items })
    this.cart.clearCart()
  }
}
