import React from "react"
import produtos from "../../data/produtos"

import "./TabelaProdutos.css"

export default function TabelaProdutos() {
    const prod = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? "par" : "impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
            </tr> 
        )
    })
    return (
        <div className="tabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {prod  }
                </tbody>
            </table>
        </div>
    )
}