import React from 'react';
import './header.styles.scss';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import {ReactComponent as Logo} from './crown.svg'

import HomePage from '../../pages/homepage/homepage.component';
import ShopPage from '../../pages/shopPage/shopPage.component';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


const Header = ({currentUser, handleSignOutState}) => (
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
                    <Link className="option" to="" onClick={handleSignOutState }>SignOut</Link>
                    :
                    (<Link className="option" to="/SignIn">SignIn</Link>)
                }
            </div>
        </div>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/contact/" component={ShopPage} />
        <Route path="/SignIn/" component={SignInAndSignUpPage} />
    </BrowserRouter>
);

export default Header;

// https://reacttraining.com/react-router/web/guides/quick-start
