import Tablero from './components/Tablero';
import TetrisProvider from './contexts/TetrisContexts';
import './styles/App.css';

function App() {
    return (
        <TetrisProvider>
            <div className="App">
                <Tablero />
            </div>
        </TetrisProvider>
    );
}

export default App;
