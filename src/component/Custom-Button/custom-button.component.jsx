import React from "react";

import './custom-button.styles.scss';


const CustomButton =  ({children, googleBox, ...otherProps}) => (
    <button className={`${googleBox ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children} </button>
)

export default CustomButton;