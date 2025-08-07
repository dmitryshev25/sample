import React, { useState, useEffect } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState("Photo Button");

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonText("Click!");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

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