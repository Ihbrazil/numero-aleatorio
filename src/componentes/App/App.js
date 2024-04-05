import React from 'react';
import estiloApp from './App.module.css';
import PaginaInicial from '../PaginaInicial';

function App() {
  return (
    <div className={estiloApp.App}>
      <PaginaInicial />
    </div>
  );
}

export default App;