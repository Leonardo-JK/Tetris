import React from "react";

function Celda(props) {
    
    return(
        <div className="celda">
            <p>{props.valor}</p>
        </div>
    )
}

export default Celda