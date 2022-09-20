import React, { useContext } from "react";
import { TetrisContexts } from "../contexts/TetrisContexts";

function Start() {
    
    const {start} = useContext(TetrisContexts)

    return(
        <div className="start">
            <button className="start__button" onClick={start}>START</button>
        </div>
    )
}

export default Start