import React from "react"

import FamiliaMembro from "./FamiliaMembro"

export default function Familia(props) {
    return (
        <div>
            <FamiliaMembro nome="Matheus" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Joel" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Gabriel" sobrenome="Cansado"></FamiliaMembro>
        </div>
    )
}