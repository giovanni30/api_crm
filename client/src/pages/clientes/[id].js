import React from 'react'
import Layout from "../../components/layout"
import { useEffect, useState } from 'react'
import Spinner from "../../components/spinner"
import { navigate } from 'gatsby';

const VerCliente = (props) => {

  const [cliente, setCliente] = useState({})
  const [clienteerror, setClienteerror] = useState({})
  const [cargando, setCargando] = useState(true)
  

  console.log(cargando);
  
  
  useEffect(() => {
    
    const obtenerClienteAPI = async  () => {
 
      try {
      const url = `${process.env.GATSBY_API_URL}/${props.params.id}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setCliente(resultado[0]);
      setClienteerror(resultado);

    } catch (error) {
      console.log(error);

    }
    // setTimeout(() => {
    //   setCargando(!cargando)
    // }, 3000)
    setCargando(c =>{

    return(!cargando === c);
    });

  }
  obtenerClienteAPI();
}, [props, cargando])

return (

  cargando ? <Layout><div className="min-h-screen w-3/4 my-10 mx-auto" ><Spinner /></div></Layout> :
    Object.keys(clienteerror).length === 0 ?
      <Layout><div className="min-h-screen w-3/4 my-10 mx-auto" ><p className="text-4xl mt-10 text-gray 600 "> No hay resultado</p></div></Layout> : (
        <Layout>
          <>

            <div className="min-h-screen w-3/4 mx-auto my-10" >
              <div className="m-20" >
                <h1 className="font-black text-6xl text-blue-900 my-10 mx-4 font-bold"> Ver Cliente: {cliente.nombre}</h1>
                <p className="my-6 mx-4">Informacion del cliente</p>
                <button
                  type="button" className="bg-blue-600 hover:bg-blue-700 block w-80 text-white p-4 uppercase font-bold text-lg my-10 mx-4"
                  onClick={() => navigate(`/clientes`)}
                >Atras</button>
                {cliente.nombre && (
                  <p className="text-4xl mt-10 text-gray 600 ">
                    <span className="uppercase  text-gray-800 font-bold mx-4">
                      Cliente:
                    </span>
                    {cliente.nombre}
                  </p>
                )}
                {cliente.email && (
                  <p className="text-4xl mt-4 text-gray 600">
                    <span className="uppercase text-gray-800 font-bold mx-4">
                      Email:
                    </span>
                    {cliente.email}
                  </p>
                )}
                {cliente.telefono && (
                  <p className="text-4xl mt-4 text-gray 600">
                    <span className="uppercase text-gray-800 font-bold mx-4">
                      Telefono:
                    </span>
                    {cliente.telefono}
                  </p>
                )}
              </div>
            </div>
          </>
        </Layout>
      )
)

}

export default VerCliente