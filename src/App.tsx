import { FiTrash } from "react-icons/fi"
import { api } from './services/api'
import { useEffect, useState } from "react"


interface CustomerProps{
  id: string,
  name: string,
  password: string, 
  status: boolean;
}










export default function App(){

const[customers, setCustomers] = useState<CustomerProps[]>([])
  useEffect(() =>{
    LoadCustom();
  }, [])

async function LoadCustom(){
  const response = await api.get("/Custom")
  setCustomers(response.data);
}




  return(
      <div className="w-full min-h-screen bg-gray-700 flex justify-center px-4">
       <main className="my-10 w-full md:max-w-2x1">
        <h1 className="font-bold text-4xl text-center text-lime-300">Meu teste </h1>


   <form className="flex flex-col my-6">
     <label htmlFor="Nome" className="font-medium text-white">Nome:</label>
     <input
     type="text"
     placeholder="Digite seu nome completo"
     id="nome"
     className="w-full mb-5 p-2 rounded"
     />





<label htmlFor="Password" className="font-medium text-white">Password:</label>
     <input
     type="Password"
     placeholder="Digite seu nome completo"
     id="Password"
     className="w-full mb-5 p-2 rounded"
     />

     <input type="submit" value="Cadastrar" className="cursor-pointer w-full p-2 bg-green-400 font-medium" />
   </form>

     <section className="flex flex-col">
      <article 
      className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
      >
        <p><span className="font-medium">Nome:</span> Eduardo</p>
        <p><span className="font-medium">Senha:</span> Eduardo</p>
        <p><span className="font-medium">Status:</span> Ativo</p>

     <button className="bg-red-400 w-7 h-7 items-center justify-center rounded-lg absolute right-0 -top-2">
<FiTrash size={18} color="#FFF" className="items-center justify-center"/>
     </button>
     
      </article>

     </section>

       </main>
      </div>
  )
}