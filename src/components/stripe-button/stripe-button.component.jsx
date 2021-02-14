import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";
    const onToken = token =>{
        alert("payment succesful")
    }
    return(
        <StripeCheckout
        name="Clothing"
        label="Pay Now"
        stripeKey = {publishableKey}
        token = {onToken}
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description = {`you amount is $${price}`}
        amount = {priceForStripe}
        panelLabel="Pay Now"
        />
    )
}
export default StripeCheckoutButton