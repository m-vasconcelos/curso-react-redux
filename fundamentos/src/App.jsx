import React from "react"
import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"

export default function App () {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

                <Card titulo="Rederização Condicional" color="#E94C6F">
                    <ParOuImpar numero={20}></ParOuImpar>
                </Card>

                <Card titulo="Tabela de Produtos" color="#E8B71A">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="Componentes com Filhos" color="#00C8F8">
                    <Familia sobrenome="Vasconcelos">
                        <FamiliaMembro nome="Matheus" ></FamiliaMembro>
                        <FamiliaMembro nome="Joel" ></FamiliaMembro>
                        <FamiliaMembro nome="Gabriel" ></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="Número Aleatório" color="#FA6900">
                    <NumeroAleatorio min = {1} max = {10}></NumeroAleatorio> 
                </Card>

                <Card titulo="Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento> 
                </Card>

                <Card titulo="Componentes com parâmetros" color="#E8B71A">
                    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" numero={9.3}></ComParametro>
                    <ComParametro titulo="Segundo Componente" subtitulo="Mais ou menos!" numero={"6,0"}></ComParametro>
                </Card>

                <Card titulo="Primeiro componente" color="#588C73">            
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}

