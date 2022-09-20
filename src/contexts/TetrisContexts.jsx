import React, { createContext, useState } from "react";

export const TetrisContexts = createContext();

function TetrisProvider({children}){
    
    const [tablero, setTablero] = useState([])

    const [validMat, setValidMat] = useState([])

    const [pieza, setPieza] = useState({})

    const [piezas, setPiezas] = useState([
        {
            forma: "S",
            coordenadas: [[0, 6, "p"],[0 , 7, "p"],[1, 5, "p"], [1, 6, "p"]],
            color: "green"
        },
        {
            forma: "Z",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [1, 6, "p"], [1, 7, "p"]],
            color: "red"
        },
        {
            forma: "L",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [0, 7, "p"], [1, 5, "p"]],
            color: "orange"
        },
        {
            forma: "J",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [0, 7, "p"], [1, 7, "p"]],
            color: "blue"
        },
        {
            forma: "I",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [0, 7, "p"], [0, 8, "p"]],
            color: "lightblue"
        },
        {
            forma: "O",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [1, 5, "p"], [1, 6, "p"]],
            color: "yellow"
        },
        {
            forma: "T",
            coordenadas: [[0, 5, "p"], [0, 6, "p"], [0, 7, "p"], [1, 6, "p"]],
            color: "brown"
        }
    ])


    const generarMat = (ancho, alto, valor) => {
        let row = []
        let mat = []
        for(let j = 0; j < alto; j++){
            for(let i = 0; i < ancho; i++){
                if(j === alto - 1){
                    row.push(true)
                } else{
                    row.push(valor)
                }
            }
            mat.push(row)
            row = []
        }

        return mat
    }

    if(tablero.length === 0){
        setTablero(generarMat(13,20," "))
        setValidMat(generarMat(13,20, false))
    }
    

    const start = () => {
        newPiece()
    }

    let hit = false
    let p

    const newPiece = () => {
        let auxTab = tablero
        let auxValMat = validMat

        p = piezas[Math.floor(Math.random() * (piezas.length))]
        console.log(piezas[Math.floor(Math.random() * (piezas.length))]);
        console.log(p);

        for(let i = 0; i < p.coordenadas.length; i++){
            auxTab[p.coordenadas[i][0]][p.coordenadas[i][1]] = p.coordenadas[i][2]            
        }

        setTablero([...auxTab])

        const down = setInterval(() => {

            console.log(p);
            for(let i = 0; i < p.coordenadas.length; i++){
                console.log(auxTab[p.coordenadas[i][0]][p.coordenadas[i][1]]);
                auxTab[p.coordenadas[i][0]][p.coordenadas[i][1]] = " "  
                p.coordenadas[i][0]++
            }

            for(let i = 0; i < p.coordenadas.length; i++){
                console.log(auxTab);
                console.log(p.coordenadas[i][0], p.coordenadas[i][1], p.coordenadas[i][2]);
                console.log(auxTab[p.coordenadas[i][0]][p.coordenadas[i][1]]);
                auxTab[p.coordenadas[i][0]][p.coordenadas[i][1]] = p.coordenadas[i][2] 
            }

            for(let i = 0; i < p.coordenadas.length; i++){
                if(auxValMat[p.coordenadas[i][0] + 1][p.coordenadas[i][1]] === true){
                    hit = true
                    for(let i = 0; i < p.coordenadas.length; i++){
                        auxValMat[p.coordenadas[i][0]][p.coordenadas[i][1]] = true
                    }
                    setValidMat([...auxValMat])
                    setTablero([...auxTab])
                    clearInterval(down)
                    p = {}
                    console.log(p);
                    break;
                }
            }

            if(hit){
                hit = false
                console.log("new piece");
                newPiece()
            }

            setTablero([...auxTab])                       
        }, 300);
    
    }

    return(
        <TetrisContexts.Provider value={{
            tablero,
            validMat,
            newPiece,
            start
        }}>
            {children}
        </TetrisContexts.Provider>
    )
}

export default TetrisProvider