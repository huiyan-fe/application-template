import {useState} from 'react';
import {Button} from 'an';
import './App.less';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello Vite + React!</p>
                <p>
                    <Button onClick={() => setCount(count => count + 1)}>
                        count is: {count}
                    </Button>
                </p>
            </header>
        </div>
    );
}

export default App;
