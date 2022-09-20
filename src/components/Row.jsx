import React, { useEffect } from "react";
import Celda from "./Celda";

function Row(props) {
    
    useEffect(() => {

    })

    return(
        <div className="row">
            {props.linea.map((celd) => {
                return(
                    <Celda 
                        valor = {celd}
                    />
                )
            })}
        </div>
    )
}

export default Row