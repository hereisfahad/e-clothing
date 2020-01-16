import React from "react";

import CustomButton from "../customButton/custom-button.component";
import CartItem from "../carrtItem/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import { useDispatch, useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";

const CartDopdown = ({ history }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDopdown);
