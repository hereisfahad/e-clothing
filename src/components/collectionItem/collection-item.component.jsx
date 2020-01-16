import React from "react";

import CustomButton from "../customButton/custom-button.component";

import "./collection-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  addItem,
  getCartTotal,
  getCartItemsCount
} from "../../redux/actions/cartAction";
const Collectionitem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})` // () must around ${imageUrl}
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          dispatch(addItem(item));
          dispatch(getCartItemsCount());
          dispatch(getCartTotal());
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default Collectionitem;
