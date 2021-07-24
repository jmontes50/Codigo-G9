import { useState } from "react";
import "./App.css";
import imagenLogo from "./logo.svg";
//?components
import Header from "./components/header";

const App = () => {
  const [numero, setNumero] = useState(0);

  const sumarUnidad = () => setNumero(numero + 1);

  const restarUnidad = () => setNumero(numero - 1);

  return (
    <div>
      <Header nombre="Pepito" />
      <h1 id="titulo">Hola mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis,
        exercitationem fugiat perspiciatis adipisci quia corrupti reprehenderit
        voluptate enim quis. Atque est nemo amet expedita similique itaque ea
        quod delectus.
      </p>
      <h1>{numero}</h1>
      <button onClick={sumarUnidad}>Sumar</button>
      <button onClick={restarUnidad}>Restar</button>
      <img src={imagenLogo} alt="" />
      <div>
        <h2>Linder Hassinger</h2>
      </div>
    </div>
  );
};

export default App;
