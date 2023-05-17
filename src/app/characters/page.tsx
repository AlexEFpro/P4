import React from "react";
import { getCharacters } from "./services";
import { Card } from "@/components/Card";
async function fetchCharacters() {
  return await getCharacters();
}

export default async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      {characters.map(
        (
          character 
        ) => (
          <Card key={character.id} data={character} />
        )
      )}
    </>
  );
}
