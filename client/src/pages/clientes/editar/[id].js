import React from 'react'
import Layout from "../../../components/layout"
import { useEffect, useState } from 'react'
import SignUpForm from "../../../components/signUpForm";
import { navigate } from 'gatsby';


const EditarCliente = (props) => {

  const [cliente, setCliente] = useState({})
  // const [clienteerror, setClienteerror] = useState({})
  const [cargando, setCargando] = useState(true)

  const id = props.params.id;
  
  useEffect(() => {
    
    const obtenerClienteAPI = async () => {
      try {
        const url = `${process.env.GATSBY_API_URL}/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado[0]);
        // console.log(cliente.nombre);
        // setClienteerror(resultado);
        
      } catch (error) {
        console.log(error);
        
      }
      setCargando(!cargando)
        
      }
      obtenerClienteAPI();
    }, [])


// console.log(cliente);
  return (
    <>
    <Layout>
      <div className="min-h-screen w-3/4 mx-auto my-10" >
        <div className="m-20" >
          <h1 className="font-black text-6xl text-blue-900 my-10 mx-4 font-bold"> Editar Cliente: </h1>
          <p className="my-6 mx-4">Informacion del cliente</p>
          <button
             type="button" className="bg-blue-600 hover:bg-blue-700 block w-80 text-white p-4 uppercase font-bold text-lg my-10 mx-4"
             onClick={() => navigate(`/clientes`)}  
             >Atras</button>
     {cliente?.nombre ? ( 

       <SignUpForm 
       cliente={cliente}
       cargando={cargando}
       />
       ): <p>Cliente id no valido</p>
      }
        </div>
      </div>
      

    </Layout>
      </>

  );


}



export default EditarCliente