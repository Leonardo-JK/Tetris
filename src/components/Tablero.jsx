import React, { useContext } from "react";
import { TetrisContexts } from "../contexts/TetrisContexts";
import Row from "./Row";

function Tablero() {
    
    const {tablero} = useContext(TetrisContexts)

    return(
        <div className="tablero">
            {tablero.map((row) => {
                return(
                    <Row 
                        linea = {row}
                    />
                )
            })}
        </div>
    )
}

export default Tablero