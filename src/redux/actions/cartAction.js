export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN"
});
export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});
export const removeItem = item => ({
  type: "REMOVE_ITEM",
  payload: item
});
export const clearItemFromCart = item => {
  console.log("sdfs");
  return {
    type: "CLEAR_ITEM_FROM_CART",
    payload: item
  };
};
export const getCartTotal = () => ({
  type: "GET_CART_TOTAL"
});
export const getCartItemsCount = () => ({
  type: "GET_CART_ITEMS_COUNT"
});
