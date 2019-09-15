import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../components/checkoutItem/checkout-item.component';
import StripeCheckoutButton from '../../components/stripebutton/stripe-button.component';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Prive</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total"> 
            <span>Total: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = (state) =>(
    {
        cartItems: selectCartItems(state),
        total: selectCartTotal(state)
    }
);

export default connect(mapStateToProps)(Checkout);