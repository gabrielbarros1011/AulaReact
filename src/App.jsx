import './App.css'
import Botao from './components/Buttons/Botao'

function App() {

  return (
    <>
       <Botao class = "Enviar" click = {() => alert("Relatorio Enviado!")} conteudo = "Enviar"/>
       <Botao class = "Limpar" click = {() => alert("Tudo Limpo!")} conteudo = "Limpar"/>
    </>
  )
}

export default App
