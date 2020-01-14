import React, { useContext } from "react";

import CustomButton from "../customButton/custom-button.component";
import CartItem from "../carrtItem/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import { useDispatch } from "react-redux";
import "./cart-dropdown.styles.scss";

import { CartContext } from "../../providers/cart/cart.provider";

const CartDopdown = ({ history }) => {
  const { cartItems } = useContext(CartContext);
  const dispatch = useDispatch();
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
