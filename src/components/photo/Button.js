import React, { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState("Photo Button");

    const handleClick = () => {
        setButtonText("Photo Button Clicked");
    };

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
};

export default Button;