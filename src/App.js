import { useState } from 'react';

import './App.css';
import Header from './shared/layout/header/Header';
import Button from './shared/UI/button/Button';
import Input from './shared/UI/input/Input';
import { Footer } from './shared/layout/footer/Footer';
import { Main } from './shared/layout/main/Main';

const App = () => {

    const [buttonText, setButtonText] = useState("Photo Button");

    return (
        <>
            <Header />
            <Main>
                <p>First Component</p>
                <Button 
                    text={buttonText}
                    onClick={setButtonText}
                />
                <Input />
            </Main>
            <Footer />
        </>
    );
};

export default App;