import React from "react";

import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
  getCartTotal,
  getCartItemsCount
} from "../../redux/actions/cartAction";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            dispatch(removeItem(cartItem));
            dispatch(getCartTotal());
            dispatch(getCartItemsCount());
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div
          className="arrow"
          onClick={() => {
            dispatch(addItem(cartItem));
            dispatch(getCartTotal());
            dispatch(getCartItemsCount());
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(clearItemFromCart(cartItem));
          dispatch(getCartTotal());
          dispatch(getCartItemsCount());
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
