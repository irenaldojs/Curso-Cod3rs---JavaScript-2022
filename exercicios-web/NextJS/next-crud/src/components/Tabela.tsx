import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left  p-4">Código</th>
                <th className="text-left  p-4">Nome</th>
                <th className="text-left  p-4">Idade</th>
                {exibirAcoes ? (<th className="text-right pr-10">Ações</th>) : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, indice) => {
            return (<tr key={cliente.id} className={`${indice % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                {exibirAcoes ? renderizarAcoes(cliente) : false}
            </tr>)
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-end pr-4">
                {props.clienteSelecionado ?
                    (
                        <button className="flex text-green-600 rounded-full p-2 m-1"
                            onClick={() => props.clienteSelecionado?.(cliente)}>
                            {IconeEdicao}
                        </button>
                    )
                    : false}
                {props.clienteExcluido ?
                    (
                        <button className="flex text-red-500 rounded-full p-2 m-1"
                            onClick={() => props.clienteExcluido?.(cliente)}>
                            {IconeLixo}
                        </button>
                    )
                    : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-50
                bg-gradient-to-r from-purple-700 to-purple-900
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}