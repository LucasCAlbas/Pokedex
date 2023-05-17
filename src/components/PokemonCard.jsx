/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Importamos as dependências necessárias
import React, { useEffect, useState } from 'react';

// Primeiro, vamos criar o componente PokemonCard
// Este componente recebe um pokemon como prop e exibe o nome e a imagem do pokemon
export default function PokemonCard({pokemon}) {
  
  return (
    <div>
      <h2>{pokemon.name}</h2>
       <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <div>
          {pokemon.types.map((item) =>(<h3>{item.type.name}</h3>))}
          {pokemon.types[0].type.name}
       </div>
    </div>
  );
}
