import React, { createContext, useState } from "react";

export const TetrisContexts = createContext();

function TetrisProvider({children}){
    
    const [tablero, setTablero] = useState([])

    const [validMat, setValidMat] = useState([])

    const [pieza, setPieza] = useState({})

    const piezas = [
        {
            forma: "S",
            coordenadas: [[0, -1, false],[0 , 0, false],[-1, 0, false], [-1, 1, false]],
            color: "green"
        },
        {
            forma: "Z",
            coordenadas: [[0, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
            color: "red"
        },
        {
            forma: "L",
            coordenadas: [[0, 0, false], [0, 1, false], [-1, 0, false], [-2, 0, false]],
            color: "orange"
        },
        {
            forma: "J",
            coordenadas: [[0, -1, false], [0, 0, false], [-1, 0, false], [-2, 0, false]],
            color: "blue"
        },
        {
            forma: "I",
            coordenadas: [[0, 0, false], [0, -1, false], [0, -2, false], [0, -3, false]],
            color: "lightblue"
        },
        {
            forma: "O",
            coordenadas: [[0, 0, false], [0, 1, false], [-1, 0, false], [-1, 1, false]],
            color: "yellow"
        },
        {
            forma: "T",
            coordenadas: [[0, 0, false], [-1, -1, false], [-1, 0, false], [-1, 1, false]],
            color: "brown"
        },
    ]


    const generarMat = (ancho, alto, valor) => {
        let row = []
        let mat = []
        for(let j = 0; j < alto; j++){
            for(let i = 0; i < ancho; i++){
                row.push(valor)
            }
            mat.push(row)
            row = []
        }

        return mat
    }

    if(tablero.length === 0){
        setTablero(generarMat(12,20,""))
        setValidMat(generarMat(12,20, false))
    }
    
    return(
        <TetrisContexts.Provider value={{
            tablero,
            validMat
        }}>
            {children}
        </TetrisContexts.Provider>
    )
}

export default TetrisProvider