import Navegador from "../components/Navegador"

function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
      
    }}>
      <Navegador destino="/estiloso" texto="Estilo"/>
      <Navegador destino="/exemplo" texto="Exemplo" cor="darkviolet"/>
      <Navegador destino="/jsx" texto="JSX" cor="crimson"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"></Navegador>
      <Navegador destino="/cliente/sp/123" texto="Navegação #02" cor="blue"></Navegador>
      <Navegador destino="/estado" texto="Componente com Estado" cor="pink"></Navegador>
      <Navegador destino="/integracao_1" texto="Integração com API #01" cor="brown"></Navegador>
      <Navegador destino="/estatico" texto="Conteudo Estático" cor="#fa054a"></Navegador>
    </div>
  )
}


export default Inicio