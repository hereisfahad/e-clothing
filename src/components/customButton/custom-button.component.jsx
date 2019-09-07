import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? 'googleSingnIn' : ''} custom-button ${inverted ? 'inverted' : ''}`}  {...otherProps} >
    {children}
  </button>
);
export default CustomButton;
//otherProps is required as we are calling onClick by passing signInWithGoogle as prop
//these are confusing time :)