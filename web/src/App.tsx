import React from 'react';
import './App.css';

import Header from './Header';

// JSX = sintaxe de XML dentro do JavaScript
// Exemplo: se no return do App() tivesse "return <h1>Ecolete<h1>;"

function App() {
  return ( 
    <div>
      <Header/>      
      <h1>Conteúdo da aplicação</h1>
    </div>
  );
}

export default App;
