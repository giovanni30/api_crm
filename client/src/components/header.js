import React from "react"
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav'
import { StaticImage } from "gatsby-plugin-image"


const EnlaceHome = styled(Link)`
color: #fff;
text-align: center;
text-decoration: none;
`;

const Header = () => {
    return (
        <header className="bg-teal-800 p-4">

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
                <div className="max-w-md mx-auto lg:mx-0">
                    <EnlaceHome
                        to='/'>
                        <StaticImage className=" w-full  "
                            src="../images/YinYan.png"
                            alt="Bioseikatsu"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            width={280}


                        />


                    </EnlaceHome>
                </div>

                <Navegacion />
            </div>

        </header >
    );
}

export default Header;