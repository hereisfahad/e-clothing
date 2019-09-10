import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../customButton/custom-button.component'; 
import CartItem from '../carrtItem/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.styles.scss';

const CartDopdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length
                ?
                cartItems.map( (item) => <CartItem key={item.id} item={item}/>)
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}>Go to checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) =>(
    {
        cartItems: selectCartItems(state)
    }
);

export default withRouter(connect(mapStateToProps)(CartDopdown));