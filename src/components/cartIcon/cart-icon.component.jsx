import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-icon.svg";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
