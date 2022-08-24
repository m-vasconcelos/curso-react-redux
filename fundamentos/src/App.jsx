import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"

export default function App () {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <NumeroAleatorio min = {1} max = {10}></NumeroAleatorio>  
            <Fragmento></Fragmento>
            <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" numero={9.3}></ComParametro>
            <ComParametro titulo="Segundo Componente" subtitulo="Mais ou menos!" numero={"6,0"}></ComParametro>
            <Primeiro></Primeiro>
        </div>
    )
}

