import React from 'react';
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import {Link} from 'gatsby';

const PaquetePreview = ({ paquete }) => {

    const { contenido, imagen, titulo, slug, sintoma, tratamiento1, tratamiento2, tratamiento3, tratamiento4, tratamiento5, tratamiento6, tratamiento7, tratamiento8, tratamiento9, tratamiento10, tratamiento11, tratamiento12 } = paquete;

    
    return (

        <li  className="sm:w-2/3 md:w-full mx-auto list-none">
            <Image fluid={imagen.fluid}
            />

            <div className="bg-slate-50 p-8">
                <h3
                    css={css`
                        font-size:3rem;
                    `}
                
                    
                    >{titulo}</h3>
                    
                <b>{contenido} </b>
                <br></br><br></br><b>Sintomas: </b>{sintoma} 
                <br></br><br></br><b>Tratamientos: </b>
                    <div>{tratamiento1}</div>
                    <div>{tratamiento2}</div>
                    <div>{tratamiento3}</div>
                    <div>{tratamiento4}</div>
                    <div>{tratamiento5}</div>
                    <div>{tratamiento6}</div>
                    <div>{tratamiento7}</div>
                    <div>{tratamiento8}</div>
                    <div>{tratamiento9}</div>
                    <div>{tratamiento10}</div>
                    <div>{tratamiento11}</div>
                    <div>{tratamiento12}</div>
                <Link className="py-6 px-5 block text-center bg-teal-600 m-10 transition-colors cursor-pointer uppercase rounded-lg hover:bg-teal-400 font-bold rounded text-white" to={slug}>Ver Tratamiento</Link>
            </div>
        </li>
    );

}

export default PaquetePreview;