

import { Game_Width, Ground_Height } from "../constants";
import { memo } from "react";

const Ground = () => {
    return (
        <div style={{
            width: Game_Width,
            height: Ground_Height,
            backgroundColor: "brown",
            position: "absolute",
            bottom: 0,
            backgroundImage: "url('/images/ground.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}></div>
    )
}

export default memo(Ground);