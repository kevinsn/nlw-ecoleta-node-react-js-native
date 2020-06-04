// import React, { useState } from 'react';
// import Header from './Header';

// JSX = sintaxe de XML dentro do JavaScript
// Exemplo: se no return do App() tivesse "return <h1>Ecolete<h1>;"

/*
Dentro do App():

const [counter, setCounter] = useState(0); // useState = Retorn um array [valor do estado, função para atualizar o valor do estado]
  function handleButtonClick(){
    setCounter (counter + 1);
  }
Return do App():

<div>
  <Header title= {`Contador: ${counter}`}/>      
  <h1>Conteúdo da aplicação</h1>
  <h1>{counter}</h1>
  <button type="button" onClick={handleButtonClick}>Increment</button>
</div>
*/

import React from 'react';
import './App.css';

import Routes from './routes'

function App() {  
  return ( 
    <Routes />
  );
}

export default App;
