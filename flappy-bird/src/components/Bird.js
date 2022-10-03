

import { Bird_Width, Bird_Height, Bird_Left } from "../constants";
import { memo } from "react";

const Bird = ({ birdY, angle }) => {

    return (
        <div style={{
            width: Bird_Width,
            height: Bird_Height,
            position: "absolute",
            top: birdY,
            left: Bird_Left,
            backgroundImage: "url('/images/bird.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transform: `rotate(${angle}deg)`,
            transition: 'transform 300ms, top 300ms'
        }}></div>
    )

}

export default memo(Bird);