

import Game from "./components/Game";
import './App.css';


const App = () => {
    return (
        <div>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: "skyblue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Game />
            </div>
            <div>
                <footer className="footer">
                    <span className="footer-span">&#10052;</span>
                    <span> By WinterKnights </span>
                    <span className="footer-span">&#10052;</span>
                </footer>
            </div>
        </div>

    )
}

export default App;