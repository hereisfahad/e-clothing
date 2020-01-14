import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "./shopping-icon.svg";
import { CartContext } from "../../providers/cart/cart.provider";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import { useDispatch } from "react-redux";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartItemsCount } = useContext(CartContext);
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
