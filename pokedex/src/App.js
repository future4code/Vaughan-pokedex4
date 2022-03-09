import Rotas from "./Rotas/Rotas"
import {BrowserRouter} from "react-router-dom";
import Contexto from "./Contexto/Contexto";
import React, { useState } from "react";

function App() {

  const [adicionados, setAdicionados]= useState([]);

  const adicionarPokemons= pokemon => {
    setAdicionados([...adicionados, pokemon])
  }

  return (
    <Contexto.Provider value={[adicionados, adicionarPokemons]}>
      
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>

    </Contexto.Provider>
  );
}

export default App;
