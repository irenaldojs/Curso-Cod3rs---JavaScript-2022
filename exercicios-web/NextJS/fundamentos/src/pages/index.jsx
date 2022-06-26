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
    </div>
  )
}


export default Inicio