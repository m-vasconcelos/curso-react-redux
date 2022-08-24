import React from "react"
import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"
import Card from "./components/layout/Card"

export default function App () {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <div className="cards">
                <Card titulo="Número Aleatório">
                    <NumeroAleatorio min = {1} max = {10}></NumeroAleatorio> 
                </Card>

                <Card titulo="Fragmento">
                    <Fragmento></Fragmento> 
                </Card>

                <Card titulo="Componentes com parâmetros">
                    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" numero={9.3}></ComParametro>
                    <ComParametro titulo="Segundo Componente" subtitulo="Mais ou menos!" numero={"6,0"}></ComParametro>
                </Card>

                <Card titulo="Primeiro componente">            
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}

