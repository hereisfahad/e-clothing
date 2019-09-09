import React from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-icon.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/car-selectors';

import './cart-icon.styles.scss';

const CartIcon =({ toggleCartHidden, count }) => (
    <div className="cart-icon" onClick={toggleCartHidden}> 
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{count}</span>    
    </div>
);

const mapDispatchToProps = (dispatch) =>(
    {
        toggleCartHidden:()=> dispatch(toggleCartHidden())
    }
);

const mapStateToProps = (state) =>(
    {
    count : selectCartItemsCount(state)
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);