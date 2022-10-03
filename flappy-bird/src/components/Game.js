

import { useState, useEffect } from 'react';
import { Game_Width, Game_Height, Bird_Width, Bird_Height, Bird_Jump, Bird_Left, Pipe_Width, Pipe_Gap, Ground_Height, Gravity } from "../constants";
import Bird from './Bird';
import Pipes from './Pipes';
import Ground from './Ground';
import Score from './Score';

const Game = () => {
    const [gameStatus, setGameStatus] = useState('no-playing')
    const [birdY, setBirdY] = useState(Game_Height / 2 - Bird_Width / 2)
    const [angle, setAngle] = useState(0)
    const [time, setTime] = useState(0)
    const [pipes, setPipes] = useState([
        {
            pipeHeight: Math.floor(Math.random() * (Game_Height / 2 - 2 * Bird_Height + 1) + 2 * Bird_Height),
            pipeLeft: Game_Width
        },
        {
            pipeHeight: Math.floor(Math.random() * (Game_Height / 2 - 2 * Bird_Height + 1) + 2 * Bird_Height),
            pipeLeft: Game_Width + 200
        },
    ])
    const [score, setScore] = useState(0)
    const [played, setPlayed] = useState(false)

    const handleOnClick = () => {
        if (gameStatus === 'no-playing' && !played) {
            setGameStatus('playing')
            setPlayed(true)
        }
        if (gameStatus === 'playing') {

            // how to move

            setBirdY(birdY => birdY - Bird_Jump)
            setAngle(-20)
            setTime(0)
        }
    }

    useEffect(() => {
        let timer
        if (gameStatus === 'playing') {
            timer = setTimeout(() => {

                // bird will fall

                setBirdY(birdY => birdY + Gravity + (50 * time * time) / 2000000)
                setAngle(20)
                setTime(time => time + 100)
                //pipes move
                setPipes(pipes => pipes.map((item) => {
                    return {
                        ...item,
                        pipeLeft: item.pipeLeft - 10
                    }
                }))

                // create pipes

                if (pipes[score].pipeLeft + Pipe_Width <= Bird_Left) {
                    const newPipes = [...pipes]
                    newPipes.push(
                        {
                            pipeHeight: Math.floor(Math.random() * (Game_Height / 2 - 2 * Bird_Height + 1) + 2 * Bird_Height),
                            pipeLeft: Game_Width + 200
                        }
                    )
                    setPipes(newPipes)
                    setScore(score => score + 1)
                }
            }, 100)
        }
        return () => {
            if (timer) clearTimeout(timer)
        }
    })

    useEffect(() => {
        let timer
        if (gameStatus === 'playing') {
            timer = setTimeout(() => {
                if (pipes[score].pipeLeft <= Bird_Left + Bird_Width && pipes[score].pipeLeft + Pipe_Width >= Bird_Left) {
                    if (birdY <= pipes[score].pipeHeight || birdY >= pipes[score].pipeHeight + Pipe_Gap) {
                        setGameStatus('no-playing')
                    }
                }
                if (birdY >= Game_Height - Ground_Height - Bird_Height) {
                    setGameStatus('no-playing')
                }
            }, 10)
        }
        return () => {
            if (timer) clearTimeout(timer)
        }
    })

    const newGame = () => {
        setBirdY(Game_Height / 2 - Bird_Width / 2)
        setAngle(0)
        setTime(0)
        setPipes([
            {
                pipeHeight: Math.floor(Math.random() * (Game_Height / 2 - 2 * Bird_Height + 1) + 2 * Bird_Height),
                pipeLeft: Game_Width
            },
            {
                pipeHeight: Math.floor(Math.random() * (Game_Height / 2 - 2 * Bird_Height + 1) + 2 * Bird_Height),
                pipeLeft: Game_Width + 200
            },
        ])
        setScore(0)
        setPlayed(false)
    }

    return (
        <div style={{
            position: "relative",
            width: Game_Width,
            height: Game_Height,
            backgroundColor: "pink",
            backgroundImage: "url('/images/bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden"
        }} onClick={handleOnClick}>
            {gameStatus === 'no-playing' && played && <button style={{
                position: 'absolute',
                width: 155,
                height: 44,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                cursor: 'pointer',
                zIndex: 20,
                backgroundImage: "url('/images/replay.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                mixBlendMode: 'multiply'
            }} onClick={newGame}></button>}
            <Score score={score} />
            <Bird birdY={birdY} angle={angle} />
            <Pipes pipes={pipes} />
            <Ground />
        </div>
    )
}

export default Game;