import React from 'react';
import './App.css'

function Imagem({ url }) {
  return (
    <div className="imagem">
      <img src={url} alt="Imagem" />
    </div>
  );
}

export default Imagem;
