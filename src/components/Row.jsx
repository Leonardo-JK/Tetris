import React from "react";
import Celda from "./Celda";

function Row(props) {
    

    return(
        <div className="row">
            {props.linea.map((celd) => {
                return(
                    <Celda />
                )
            })}
        </div>
    )
}

export default Row