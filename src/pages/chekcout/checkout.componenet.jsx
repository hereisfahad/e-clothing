import React from "react";

import CheckoutItem from "../../components/checkoutItem/checkout-item.component";
import StripeCheckoutButton from "../../components/stripebutton/stripe-button.component";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const TotalPrice = useSelector(state => state.cartReducer.TotalPrice);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Prive</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${TotalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={TotalPrice} />
    </div>
  );
};

export default Checkout;
