import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge"

const ImageBackground = styled(BackgroundImage)`
    heigth: 700px;
`


const Contenedor = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.4), rgba(34,49,63,.4) );
    color: #fff;
    display: flex;
    height:70vh;
    flex-direction: column;
    flex:1;
    align-items: center;
    justify-content: center;
    position:relative;

    }
    p{
     font-size::4rem;
     font-weight:700;   
     @media (min-width:992px){
        font-size::5.6rem
    }
    }
`;



const ImagenTratamiento = () => {

    const { placeholderImage } = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: {eq:"8.jpg"}){
            childImageSharp {
                gatsbyImageData(
                  formats: [WEBP]
                  )
          }
        }
      }
    `);

    const images = getImage(placeholderImage)
    // console.log(images);
    const bgImage = convertToBgImage(images)


    return (

        <ImageBackground
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
        ><Contenedor>
                <h1 className="text-center font-bold text-7xl">Medicina Alternativa para el tratamiento del dolor</h1>
                <h2 className="text-center font-bold text-4xl">Espacio de sanación único</h2>
            </Contenedor>
        </ImageBackground>

        // <StaticImage 
        // src="../images/8.jpg" \
        // alt="please include an alt"
        // formats={["AUTO","WEBP","AVIF"]}  
        // PLACEHOLDER="none"
        // backgroundColor="blue"
        // aspectRatio={21/9}
        // width={500}
        // Layout="fixed"
        // loading="eager"
        // transformerOptions={{grayscale: true. rotate:90}}

        // />

    );
}

export default ImagenTratamiento;
