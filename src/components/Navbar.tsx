import React from "react";
import Link from "next/link";
import Characters from "@/app/characters/page";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" flex bg-red-600 text-white justify-between p-10 m-5 rounded-2xl content-center">
      <Link  href="/">Integradora U4</Link>
      <div>
      <h2 className=" font-extrabold">Rick & Morty CHARACTErS</h2>
      <Image className="rounded-full" width={100} height={100} alt="navbarLogo" src="/RMlog.png"/>
      </div>

      <Link href="/characters">Characters</Link>
    </nav>
  );
}
