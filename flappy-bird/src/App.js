import Game from "./components/Game"

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
                
            </div>
        </div>

    )
}

export default App