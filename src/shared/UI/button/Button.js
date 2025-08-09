import React, { useState, useEffect } from 'react';

const Button = ({text, onClick}) => {

    // useEffect(() => {
        // useEffect больше для асинхронных побочных действий типа запросов к бэку
    //     const timer = setTimeout(() => {
    //         setButtonText("Click!");
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, []);

    const handleClick = () => {
        onClick("Photo Button Clicked");
    };

    return (
        <div>
            <span>Button for Photo page</span>
            <br />
            <button onClick={handleClick}>{text}
            </button>
        </div>
    );
};

export default Button;