import { React } from "react";

/*
const padrao = (props) =>
    <Fragment>
        <h1>Bom dia {props.nome}!!</h1>
        <h2>Até breve</h2>
    </Fragment>
*/

const padrao = (props) => [
    <h1 key='h1'>Bom dia {props.nome}!!</h1>,
    <h2 key='h2'>Até breve</h2>
]

export default padrao