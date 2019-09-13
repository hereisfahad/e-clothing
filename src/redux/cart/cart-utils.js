// import CartItem from "../../components/carrtItem/cart-item.component";

export const addItemToCart = (cartItems, itemToAdd) => {
    const existing = cartItems.find( cartItem => cartItem.id === itemToAdd.id);
    if(existing){
        return cartItems.map(  
            cartItem =>
            cartItem.id === itemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity+1}
                : cartItem
        )
    }
    return [...cartItems, { ...itemToAdd, quantity:1 } ]
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existing = cartItems.find( cartItem => cartItem.id === itemToRemove.id);

    if(existing.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id) 
    }
    
    return cartItems.map(
        cartItem =>
        cartItem.id === itemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    )
};