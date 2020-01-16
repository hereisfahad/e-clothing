import React from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-icon.svg";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import { useDispatch, useSelector } from "react-redux";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const cartItemsCount = useSelector(state => state.cartReducer.cartTotal);
  const dispatch = useDispatch();

  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartHidden())}
      />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
