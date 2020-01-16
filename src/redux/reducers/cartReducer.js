import {
  addItemToCart,
  removeItemFromCart,
  getCartItemsCount,
  getCartTotal,
  filterItemFromCart
} from "../utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartTotal: 0,
  TotalPrice: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: filterItemFromCart(state.cartItems, action.payload)
      };
    case "GET_CART_ITEMS_COUNT":
      return {
        ...state,
        cartTotal: getCartItemsCount(state.cartItems)
      };
    case "GET_CART_TOTAL":
      return {
        ...state,
        TotalPrice: getCartTotal(state.cartItems)
      };
    default:
      return state;
  }
};

export default cartReducer;
