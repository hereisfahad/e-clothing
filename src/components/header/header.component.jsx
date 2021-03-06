//header component needs currentUser for navbar
import React from "react";
import { Link, BrowserRouter, Route, Redirect } from "react-router-dom";

import HomePage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shopPage/shopPage.component";
import Contact from "../../pages/contact/contact.component";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CartIcon from "../../components/cartIcon/cart-icon.component";
import CardDropdown from "../../components/cartDropdown/cart-dropdown.component";
import Checkout from "../../pages/chekcout/checkout.componenet";
import { auth } from "../../firebase/firebase.utils"; //use brakets :) bc of no default export

import { ReactComponent as Logo } from "./crown.svg";
import { useSelector } from "react-redux";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const hidden = useSelector(state => state.cartReducer.hidden);

  return (
    <BrowserRouter>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <Link
              className="option"
              to="/SignIn/"
              onClick={() => auth.signOut()}
            >
              SignOut
            </Link>
          ) : (
            <Link className="option" to="/SignIn">
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CardDropdown />}
      </div>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop/" component={ShopPage} />
      <Route path="/contact/" component={Contact} />
      <Route exact path="/checkout" component={Checkout} />
      <Route
        exact
        path="/SignIn/"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
        }
      />
    </BrowserRouter>
  );
};

export default Header;

// https://reacttraining.com/react-router/web/guides/quick-start
