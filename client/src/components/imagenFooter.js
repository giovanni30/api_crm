import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge"

const ImageBackground = styled(BackgroundImage)`
    heigth: 600px;
`


const Contenedor = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.7), rgba(34,49,63,.7) );
    color: #fff;
    display: flex;
    height:50vh;
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



const ImagenFooter = () => {

    const { placeholderImage } = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: {eq:"9.jpg"}){
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
                <h2 className="text-center font-bold text-5xl m-12 w-500">​"El sanador que has estado buscando
es tu propio valor para conocerte y amarte por completo"</h2>
                <h3 className="text-center font-bold text-4xl">Yung Pueblo</h3>
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

export default ImagenFooter;
