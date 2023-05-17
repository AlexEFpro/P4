import React from "react";
import { getCharacters } from "./services";
async function fetchCharacters() {
  return await getCharacters();
}

export default async  function Characters() {
  const characters = await fetchCharacters();
  return <div>{JSON.stringify(characters)}</div>;
}
