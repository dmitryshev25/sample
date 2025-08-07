import './App.css';
import Header from './components/shared/Header';
import Button from './components/paul/Button';
import Input from './components/john/Input';

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