import React, { useContext } from "react";

import CustomButton from "../customButton/custom-button.component";

import "./collection-item.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";

const Collectionitem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);
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
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default Collectionitem;
