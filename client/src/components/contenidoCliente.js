import React from 'react';
import { useState, useEffect } from 'react';
import Cliente from '../components/cliente'



const ContenidoCliente = () => {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        const obtenerClientesAPI = async () => {

            try {
                const url = process.env.GATSBY_API_URL
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado);
                console.error(resultado);
            } catch (error) {
                console.error(error);

            }
        }
        obtenerClientesAPI();
    }, [])

    const handleEliminar = async id  => {
        const confirmar = window.confirm('¿Desear Eliminar este cliente?')
        console.log(confirmar)
        if(confirmar){
            try{
                const url = `${process.env.GATSBY_API_URL}/${id}`
                const respuesta = await fetch(url, {
                    method: 'Delete'
                })
                const arrayClientes = clientes.filter(cliente => cliente.id !== id)
                setClientes(arrayClientes)
                await respuesta.json()
            }catch (error) {
                console.log(error);
            }

        }

    }

    return (
        <>

            <div className="min-h-screen w-3/4 mx-auto" >
                <div className="m-20" >
                    <h1 className="font-black text-4xl mt-10 text-blue-900">Clientes</h1>
                    <p className="mt-3 ">Administra tus clientes</p>
                </div>
                <table className="w-5/6 m-20 table-auto shadow bg-white">
                    <thead className="bg-blue-800 text-white">

                        <tr>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2 ">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <Cliente
                                key={cliente.id}
                                cliente={cliente}
                                handleEliminar={handleEliminar}
                            />
                        ))}
                    </tbody>
                </table>




            </div>
        </>
    );

}

export default ContenidoCliente;