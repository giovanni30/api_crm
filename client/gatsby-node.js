exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsPaquete {
                nodes {
                    slug
                }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const Paquetes = resultado.data.allDatoCmsPaquete.nodes;

    Paquetes.forEach(Paquete => {
        actions.createPage({
            path: Paquete.slug,
            component: require.resolve('./src/components/paquetes.js'),
            context: {
                slug: Paquete.slug
            }
        })
    })

    
}