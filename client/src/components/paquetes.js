import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from './layout';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsPaquete(filter: { slug: { eq: $slug } }) {
            nodes {
                    titulo
                    contenido
                    sintoma
                    tratamiento1
                    tratamiento2
                    tratamiento3
                    tratamiento4
                    tratamiento5
                    tratamiento6
                    tratamiento7
                    tratamiento8
                    tratamiento9
                    tratamiento10
                    tratamiento11
                    tratamiento12
                    imagen {
                    fluid {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const PaqueteTemplate = ({data: { allDatoCmsPaquete: { nodes } }}) => {

    const { contenido, imagen, titulo, sintoma, tratamiento1, tratamiento2, tratamiento3, tratamiento4, tratamiento5, tratamiento6, tratamiento7, tratamiento8, tratamiento9, tratamiento10, tratamiento11, tratamiento12} = nodes[0];

    return ( 
        <Layout>
            <main className="w-2/3 mx-auto my-8 list-none">
                <h1 className="text-center m-8">{titulo}</h1>
                <b>{contenido} </b>
                <br></br><br></br><b>Sintomas: </b>{sintoma} 
                <br></br><br></br><b>Tratamientos: </b>
                <url> 
                    <li>{tratamiento1}</li>
                    <li>{tratamiento2}</li>
                    <li>{tratamiento3}</li>
                    <li>{tratamiento4}</li>
                    <li>{tratamiento5}</li>
                    <li>{tratamiento6}</li>
                    <li>{tratamiento7}</li>
                    <li>{tratamiento8}</li>
                    <li>{tratamiento9}</li>
                    <li>{tratamiento10}</li>
                    <li>{tratamiento11}</li>
                    <li>{tratamiento12}</li>
                </url>
                <Image className="w-3/5 mx-auto"
                    fluid={imagen.fluid}
                />
            </main>
        </Layout>
     );
}
 
export default PaqueteTemplate;