import React from 'react'
async function getData(){
    const response = await fetch("https://rickandmortyapi.com/api/character/2");
    return response.json();
  
  }

async function CardCharactert() {
    const data = await  getData();
  
  return (
    <div>CardCharactert</div>
  )
}

export default CardCharactert