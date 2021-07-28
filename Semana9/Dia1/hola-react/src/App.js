import {useState} from 'react'
import Footer from './components/Footer'

export default function App() {
  //const [estado, funcDelEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["pasear al perro"])

  const anadirTarea = () => {
    setTareas([...tareas, "lavar la ropa"])
  }

  const miTitulo = "Mi App"

  return (
    <div>
      <h1>{miTitulo}</h1>
      <ul>
        {tareas.map((tar, indice) => (
          <li key={indice}>{tar}</li>
        ))}
      </ul>
      <hr/>
      <button onClick={anadirTarea}>
        Anadir Tarea
      </button>
      <Footer mensaje={"Empresa1"}/>
      <Footer mensaje={"Empresa2"}/>
    </div>
  )
}
