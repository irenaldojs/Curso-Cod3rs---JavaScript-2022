interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const _cor = props.cor ?? 'green'

    return (
        <button className={`
            bg-gradient-to-r from-${_cor}-600 to-${_cor}-800
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}