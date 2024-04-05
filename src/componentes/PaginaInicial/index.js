import React, { useState } from 'react';
import estiloPaginaInicial from './PaginaInicial.module.css';

export default function PaginaInicial() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  }
  
  return(
    <div className={estiloPaginaInicial.conteudo_centralizado}>
      <h3>Número aleatório:</h3>
      <h1>{numeroAleatorio}</h1>

      <div className={estiloPaginaInicial.area_botao}>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>
        
        <button className={estiloPaginaInicial.botao} onClick={gerarNumero}>
          Gerar número
        </button>
      </div>
    </div>
  );
}