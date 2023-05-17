import React from "react";
import { Character } from "@/app/characters/models";
import Image from "next/image";
interface Props {
  data: Character;
}

export default function card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= " No type";
  return (
    <div className=" bg-gray-600 text-white rounded-xl m-5 shadow-xl p-8 ">
      <p>Name: {data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created: {data.created}</p>
      <Image width="100" height="100" alt="Image " src={data.image} />
    </div>
  );
}
