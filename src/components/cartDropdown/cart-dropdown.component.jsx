import React from 'react';
import CustomButton from '../customButton/custom-button.component'; 

import './cart-dropdown.styles.scss';

const CartDopdown = () => (
    <div className="cart-dropdown">
        <div className="art-items"></div>
        <CustomButton >Go to checkout</CustomButton>
    </div>
);

export default CartDopdown;