import {BiRupee} from 'react-icons/bi'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalCost = () => {
        const priceList = cartList.map(each => each.quantity * each.price)
        const reducer = (previousValue, currentValue) =>
          previousValue + currentValue
        const price = priceList.reduce(reducer)
        return price
      }

      const onPlaceOrder = () => {
        alert('please wait, your order will be placed shortly')
      }

      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="cart-value-cont">
            <div className="cart-value">
              <h1>Price</h1>
              <h1 className="rupees">
                <BiRupee /> {totalCost()} /-
              </h1>
            </div>
            <button
              className="order-desktop-btn"
              onClick={onPlaceOrder}
              type="button"
            >
              Place Order
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
