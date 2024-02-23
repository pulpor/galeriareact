import React from 'react';
import Imagem from './Imagem';
import './App.css'

const imagens = [
  'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://img.olhardigital.com.br/wp-content/uploads/2023/10/conjuncao-Lua-Jupiter.jpg',
  'https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://img.olhardigital.com.br/wp-content/uploads/2021/07/Lua.jpg',
  'https://claudia.abril.com.br/wp-content/uploads/2020/01/mulher-tirando-foto-fotografia-46701-1.jpg?quality=85&strip=info&w=1000&resize=1200,800',
  'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg'
];

function Galeria() {
  return (
    <div className="galeria">
      {imagens.map((url, index) => (
        <Imagem key={index} url={url} />
      ))}
    </div>
  );
}

export default Galeria;
