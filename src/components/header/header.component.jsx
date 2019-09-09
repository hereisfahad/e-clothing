//header component needs currentUser for navbar
import React from 'react';
import { Link, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../../pages/homepage/homepage.component';
import ShopPage from '../../pages/shopPage/shopPage.component';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CartIcon from '../../components/cartIcon/cart-icon.component';
import CardDropdown from '../../components/cartDropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';//use brakets :)

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectHiddenStatus } from '../../redux/cart/cart-selectors';

import {ReactComponent as Logo} from './crown.svg'
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <BrowserRouter>
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ?
                    <Link className="option" to="/SignIn/" onClick={() => auth.signOut()}>SignOut</Link>
                    :
                    (<Link className="option" to="/SignIn">SignIn</Link>)
                }
                <CartIcon />
            </div>
            {
                hidden? null:<CardDropdown/>
            }
            
        </div>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/contact/" component={ShopPage} />
        <Route exact path="/SignIn/"  render={()=> currentUser ? ( <Redirect to='./'/>) :<SignInAndSignUpPage/>} />
    </BrowserRouter>
);

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectHiddenStatus(state)
});
export default connect(mapStateToProps)(Header);

// https://reacttraining.com/react-router/web/guides/quick-start
