import { graphql, useStaticQuery } from 'gatsby';

const usePaquetes = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaquete {
                nodes {
                    titulo
                    id
                    slug
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
    `);

    return data.allDatoCmsPaquete.nodes.map(paquete => ({
        titulo: paquete.titulo,
        id: paquete.id,
        contenido: paquete.contenido,
        sintoma: paquete.sintoma,
        tratamiento1: paquete.tratamiento1,
        tratamiento2: paquete.tratamiento2,
        tratamiento3: paquete.tratamiento3,
        tratamiento4: paquete.tratamiento4,
        tratamiento5: paquete.tratamiento5,
        tratamiento6: paquete.tratamiento6,
        tratamiento7: paquete.tratamiento7,
        tratamiento8: paquete.tratamiento8,
        tratamiento9: paquete.tratamiento9,
        tratamiento10: paquete.tratamiento10,
        tratamiento11: paquete.tratamiento11,
        tratamiento12: paquete.tratamiento12,
        imagen: paquete.imagen,
        slug: paquete.slug,
    }))
}
 
export default usePaquetes;