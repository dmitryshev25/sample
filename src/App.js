import './App.css';
import Header from './components/shared/Header';
import Button from './components/photo/Button';
import Input from './components/video/Input';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>First Component</p>
                <Header />
                <Button />
                <Input />
            </header>
        </div>
    );
};

export default App;