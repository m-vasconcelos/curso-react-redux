import ReactDOM from "react-dom"
import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"

import "./index.css"

const el = document.getElementById("root")

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" numero={9.3}></ComParametro>
        <ComParametro titulo="Segundo Componente" subtitulo="Mais ou menos!" numero={"6,0"}></ComParametro>
    </div>,
    el
)