import React from "react"

export default function NumeroAleatorio (props) {

    const {min, max} = props
    const num = parseInt(Math.random() * ((max + 1) - min)) + min

    return(
        <div>
            <h2>Numéro Aleatório</h2>
            <p>
                <strong>Número mínimo:</strong> {min}
            </p>
            <p>
                <strong>Número máximo:</strong> {max}
            </p>
            <p>
                <strong>Número escolhido:</strong> {num}
            </p>
            
        </div>
    )

}