import { Payment } from '.'
import { Cart } from '../cart'

export class FoodPayment extends Payment {
  constructor(props: Cart) {
    super(props)
  }

  pay() {
    this.hot()
    console.log('食べ物を購入しました', { items: this.cart.items })
  }

  cancel() {
    console.log('キャンセルしました', { items: this.cart.items })
    this.cart.clearCart()
  }

  private hot() {
    console.log('温めます')
  }
}
