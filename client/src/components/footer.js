import React from "react"
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';
import { StaticImage } from "gatsby-plugin-image"

const EnlaceHome = styled(Link)`
color: #fff;
text-align: center;
text-decoration: none;
`;

const Footer = ({ title }) => {

    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-teal-900 p-4">

                <div
                    css={css`
                max-width: 1200px;
                margin: 0 auto;

                @media(min-width: 768px) {
                    display:flex;
                    align-items: center;
                    justify-content: space-between;


                }
            
            `}

                >
                    <Navegacion />
                    <div className=" max-w-md mx-auto md:mr-0 overflow-hidden md:w-5/6">

                        <EnlaceHome className=" md:flex"
                            to='/'>
                            <StaticImage className=" w-full  "
                                src="../images/YinYan.png"
                                alt="Bioseikatsu"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                width={280}


                            />
                        </EnlaceHome>
                    </div>

                </div>

            </footer>
            <section className="bg-teal-900 p-4 text-white text-center m-0 ">
                <p
                    css={css`
                    max-width:1200px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 2rem;4
                    padding-top: 4rem;
                    width: 95%;
                    margin: 0 auto;
                    text-align: left;
                    @media(max-width: 768px) {
                        text-align: center;
                        grid-template-columns: repeat(1, 1fr);
    
                    }
                    
                `}
                >
                    Ciudadela Urdesa Central, Mz 0203, Solar 3, Villa 519E, Calle sexta, Segunda peatonal entre Aven las Monjas y Dátiles detrás de calle Guayacanes y delante del Colegio Santo Domingo de Guzmán. Ecuador
                    <br></br>
                    Email: bioenergeticaseikatsu@gmail.com  <br></br>
                    Tel: +593 98 716 5337
                    <br></br>

                </p>
                Nota ¡Es obligaotorio llamar para confirmar la cita!
            </section>
            <p
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color:rgb(33,44,55)!important;
                    margin:0;
                    padding: 1rem;

                
                `}
            >
                {title}. Todos los derechos reservados {year} &copy;
            </p>
        </>
    );
}

export default Footer;