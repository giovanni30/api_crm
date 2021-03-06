import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import {StaticImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';

const TextoInicio = styled.div`
    padding-top:4rem;
    max-width:1200px;
    width:95%;
    margin:0 auto;

    @media (min-width:768px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        column-gap:2rem;
    }
    p{
        line-height:2;
        marging-top:2rem;

    }
`;

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
          allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
                nodes {
                    titulo
                     contenido
                        imagen{
                              fluid{
                                ...GatsbyDatoCmsFluid      
                                }
                            }
                  }
            }
        }
     `);

    //  console.log(informacion.allDatoCmsPagina.nodes[0]);

    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];


    

    return (
        <>
        <div className="m-12">

        <div className="text-center m-6">

         <StaticImage 
        src="../images/YinYan10.png"
        alt="Yin Yan"
        formats={["WEBP"]}  
        width={80} />
        </div>
        <h2 className="text-center text-5xl">{titulo}</h2>
        <TextoInicio>
            <p>{contenido}</p>
            <Image className="sm:w-3/4 md:w-full mx-auto" fluid={imagen.fluid} />
        </TextoInicio>
        </div>

  
        </>
    );

}

export default ContenidoInicio;