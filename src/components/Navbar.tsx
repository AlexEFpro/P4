import React from "react";
import Link from "next/link";
import Characters from "@/app/characters/page";

export default function Navbar() {
    
  return (
    <nav className=" flex bg-red-600 text-white justify-between p-10 m-5 rounded-2xl">
      <Link href="/">Integradora U4</Link>
      <Link href="/characters">Characters</Link>
    </nav>
  );
}
