import ReactDOM from "react-dom"
import React from "react"

import "./index.css"

const el = document.getElementById("root")
const tag = <strong>Olá, React!</strong>

ReactDOM.render(
    <div>
        {tag}
    </div>,
    el
)