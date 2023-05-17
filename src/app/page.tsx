import Image from "next/image";
async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image width={320} height={320} alt="main image" src="/RMmain.png"/>
    </main>
  );
}
export default Home;
