import React from 'react'
import { navigate } from 'gatsby';

const Cliente = ({cliente, handleEliminar}) => {

const {nombre, telefono, email, id} = cliente

// console.log(id);

  return (
    
        <tr className="border-b hover:bg-gray-50"> 
        <td className="p-3 text-center">{nombre}</td>
        <td className="p-3">
            <p className="text-center"><span className="text-gray-800  font-bold">Email: {email}</span></p>
            <p className="text-center"><span className="text-gray-800  text-center font-bold">Tel: {telefono}</span></p>
            </td>
        <td className="p-3">
            <button
             type="button" className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-lg "
                onClick={() => navigate(`/clientes/${id}`)}  
                >Ver</button>
            <button
             type="button" className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-lg mt-3"
             onClick={() => navigate(`/clientes/editar/${id}`)}  
             >Editar</button>
            <button
             type="button" className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-lg mt-3 "
             onClick={() => handleEliminar(id)}  
                >Eliminar</button>
        </td>

        </tr>
   
  )
}

export default Cliente