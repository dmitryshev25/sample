import React, { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState("John Button");

    const handleClick = () => {
        setButtonText("John Button Clicked");
    };

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
};

export default Button;