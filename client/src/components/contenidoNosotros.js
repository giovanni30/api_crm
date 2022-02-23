import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ImageBackground = styled(Image)`
    max-width: 500px;
    margin: 0 auto;
`
const ImageBackground2 = styled(Image)`
    max-width: 700px;
    margin: 0 auto;
`

const TextoNosotros = styled.div`
    
    @media (min-width:768px){
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        column-gap:0rem;
    }
    p{
        line-height:2;
        margin:0;

    }
   
`;
const Contenedor = styled.div`
padding: 0 4rem 4rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: #fff;
`;
const Contenedorimg = styled.div`
padding: 2rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(95,106,76)
`;
const Contenedortitulo = styled.div`
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: #fff;
`;
const Contenedortituloimg = styled.div`
padding: 2rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(95,106,76);
`;
const Contenedor2 = styled.div`
padding: 0 4rem 4rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color:rgb(242,236,228);
`;
const Contenedorimg2 = styled.div`
padding: 2rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(235, 223, 207);
`;
const Contenedortitulo2 = styled.div`
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(242,236,228);
`;
const Contenedortituloimg2 = styled.div`
padding: 2rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(235, 223, 207);
`;



const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query{
          allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
                nodes {
                    titulo
                    titulo2
                     contenido
                     contenido2
                        imagen{
                              fluid {
                                ...GatsbyDatoCmsFluid      
                                }
                            }
                            imagen2{
                                fluid {
                                  ...GatsbyDatoCmsFluid      
                                  }
                              }
                  }
            }
        }
     `);

    //  console.log(informacion.allDatoCmsPagina.nodes[0]);

    const { titulo, contenido, imagen, titulo2, contenido2, imagen2 } = resultado.allDatoCmsPagina.nodes[0];




    return (
        <>
            <TextoNosotros>
                <Contenedortitulo>
           
                </Contenedortitulo>
                <Contenedortituloimg>
                </Contenedortituloimg>
            </TextoNosotros>
            <div>

                <TextoNosotros>
                    
                    <Contenedor>
                    <h1
                        css={css`
                        text-align: center;
                        font-size:3rem;
                margin-top:4rem;
                `}
                    >{titulo}</h1>
                        <p>{contenido}</p>
                    </Contenedor>
                    <Contenedorimg>
                        <ImageBackground fluid={imagen.fluid} />
                    </Contenedorimg>


                </TextoNosotros>

                <TextoNosotros>
                    <Contenedortituloimg2>
                    </Contenedortituloimg2>
                    <Contenedortitulo2>
                       
                    </Contenedortitulo2>
                </TextoNosotros>
                <TextoNosotros>
                    <Contenedorimg2>
                        <ImageBackground2 fluid={imagen2.fluid} />
                    </Contenedorimg2>
                    <Contenedor2>
                    <h2
                            css={css`
                        text-align: center;
                        font-size: 3rem; 
                        margin: 0;
                        
                        padding: 2rem;
                        `}
                        >{titulo2}</h2>
                        <p>{contenido2}</p>
                    </Contenedor2>


                </TextoNosotros>
                
               
               



            </div>
        </>
    );

}

export default ContenidoNosotros;