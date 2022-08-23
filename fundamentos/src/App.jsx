import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"

export default function App () {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>  
            <Fragmento></Fragmento>
            <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" numero={9.3}></ComParametro>
            <ComParametro titulo="Segundo Componente" subtitulo="Mais ou menos!" numero={"6,0"}></ComParametro>
            <Primeiro></Primeiro>
        </div>
    )
}

