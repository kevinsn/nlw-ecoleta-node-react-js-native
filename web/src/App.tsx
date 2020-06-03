import React, { useState } from 'react';
import './App.css';

import Header from './Header';

// JSX = sintaxe de XML dentro do JavaScript
// Exemplo: se no return do App() tivesse "return <h1>Ecolete<h1>;"

function App() {
  const [counter, setCounter] = useState(0); // useState = Retorn um array [valor do estado, função para atualizar o valor do estado]
  function handleButtonClick(){
    setCounter (counter + 1);
  }
  
  return ( 
    <div>
      <Header title= {`Contador: ${counter}`}/>      
      <h1>Conteúdo da aplicação</h1>
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

export default App;
