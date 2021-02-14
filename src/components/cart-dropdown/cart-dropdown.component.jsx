import React from 'react'
import './cart-dropdown.style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-botton.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown" >
        <div className="cart-items">
            {cartItems.length?
            cartItems.map(cartItem=>
            <CartItem key={cartItem.id} item = {cartItem}/>//{...cartItem}
            ):
            (
            <span className='empty-message'>your cart is empty</span>
            )
            }</div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>Go to checkout</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
cartItems:selectCartItems
})
// const mapDispatchToProp = dispatch =>({
//     toggleCartHidden:()=>dispatch(toggleCartHidden())
// })
export default withRouter(connect(mapStateToProps)(CartDropdown))
//we can do this with link simply and this wrapping
