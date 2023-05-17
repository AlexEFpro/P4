import Image from 'next/image'
async function getData(){
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}


 async function Home() {
  const data = await  getData();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Pagina inicial 
       <Image width={100} height={100} src={data.image} alt='MOrty'/>
        <h1 className='text-white'>:{data.name}</h1>
        
      </div>
     
    </main>
  )
}
export default Home;