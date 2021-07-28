import {useState} from 'react'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'

export default function App() {
  //const [estado, funcDelEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["pasear al perro"])
  const [texto, setTexto] = useState("ordenar")

  const anadirTarea = () => {
    setTareas([...tareas, texto])
  }

  const manejarTexto = (nuevoTexto) => {
    setTexto(nuevoTexto)
  }

  const miTitulo = "Mi App"

  return (
    <div>
      <h1>{miTitulo}</h1>
      <ListaTareas tareas={tareas}/>
      <hr/>

      <input type="text" value={texto} onChange={(e) => {manejarTexto(e.target.value)}}/>

      <button onClick={anadirTarea}>
        Anadir Tarea
      </button>
      <Footer mensaje={"Empresa1"}/>
      <Footer mensaje={"Empresa2"}/>
    </div>
  )
}
