import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/custom-button.component'; 
import CartItem from '../carrtItem/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.styles.scss';

const CartDopdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map( (item) => <CartItem key={item.id} item={item}/>)
            }
        </div>
        <CustomButton >Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) =>(
    {
        cartItems: selectCartItems(state)
    }
);

export default connect(mapStateToProps)(CartDopdown);