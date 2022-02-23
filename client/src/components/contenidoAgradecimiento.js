import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const ImageBackground = styled(Image)`
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

const Contenedorimg = styled.div`
padding: 2rem;
margin: 0 auto;
width: 100%;
text-align:justify;
background-color: rgb(95,106,76)
`;


const ContenidoAgradecimiento = () => {

    const resultado = useStaticQuery(graphql`
    query{
          allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
                nodes {
                        imagen{
                              fluid {
                                ...GatsbyDatoCmsFluid      
                                }
                            }
                    
                  }
            }
        }
     `);

    //  console.log(informacion.allDatoCmsPagina.nodes[0]);

    const { imagen } = resultado.allDatoCmsPagina.nodes[0];




    return (
        <>

            <div>

                <TextoNosotros>

                    <div className="p-12 mx-auto my-20 w-5/6 text-justify" >
                        <h1 className="text-center m-6">¡Felicidades! lograstes agendar una cita!</h1>
                        <p>Recuperar tu salud es lo más importante para nosotros. Pronto te estaremos llamando para confirmar día y hora de tu cita. Gracias por preferirnos, mientras continua aprendiendo más sobre nuestros tratamientos naturales por la medicina tradicional china. </p>

                        <Link className="py-6 px-5 block text-center w-3/4 mx-auto bg-teal-600 m-10 transition-colors cursor-pointer uppercase rounded-lg hover:bg-teal-400 font-bold rounded text-white" to='/'>Más beneficios de los tratamientos</Link>

                    </div>
                    <Contenedorimg>
                        <ImageBackground fluid={imagen.fluid} />
                    </Contenedorimg>


                </TextoNosotros>





            </div>
        </>
    );

}

export default ContenidoAgradecimiento;