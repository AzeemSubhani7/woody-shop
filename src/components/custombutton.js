import React from "react";
import "./css/custombutton.scss";

const CustomButton = ( { children , ...otherProps} ) => {
    return(
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;