import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? 'googleSingnIn' : ''} custom-button`} {...otherProps} >
    {children}
  </button>
);
export default CustomButton;
//otherProps is required as we are calling onClick by passing signInWithGoogle as prop