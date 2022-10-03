

import { Game_Height, Ground_Height, Pipe_Gap, Pipe_Width } from "../constants";
import { memo } from "react";

const Pipes = ({ pipes }) => {

    return (
        <>
            {pipes.map((pipe, index) => (
                <div key={index}>
                    <div style={{
                        width: Pipe_Width,
                        height: pipe.pipeHeight,
                        position: "absolute",
                        left: pipe.pipeLeft,
                        top: 0,
                        backgroundImage: "url('/images/pipe.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        transform: "rotate(180deg)",
                        transition: 'left 300ms'
                    }}></div>
                    <div style={{
                        width: Pipe_Width,
                        height: Game_Height - pipe.pipeHeight - Pipe_Gap - Ground_Height,
                        position: "absolute",
                        left: pipe.pipeLeft,
                        bottom: Ground_Height,
                        backgroundImage: "url('/images/pipe.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        transition: 'left 300ms'
                    }}></div>
                </div>
            ))}
        </>
    )
}

export default memo(Pipes);