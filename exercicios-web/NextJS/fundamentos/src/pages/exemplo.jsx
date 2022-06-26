import React from "react"
import Cabecalho from "../components/cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentss">
            <div>
                <Cabecalho nome="Next.js & React"></Cabecalho>
                <Cabecalho nome="Título"></Cabecalho>
            </div>
        </Layout>
    )
}