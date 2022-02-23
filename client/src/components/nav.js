import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    paddin-bottom:0;
    text-align: center;
    }
`;

const NavLink = styled(Link)`
    color:#ffffff;
    font-size:1.6rem;
    font-weight:500;
    line-height:4.5rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right:0;
    }
    &.pagina-actual {
        background-color:rgb(15 118 110)
    }
    

    
`;



const Navegacion = () => {
    return (
        <Nav>
            <NavLink className="focus:rounded-lg hover:bg-teal-700 transition-colors rounded-lg"
                to={'/'}
                activeClassName="pagina-actual"
            >Medicina alternativa</NavLink>
            <NavLink className="hover:bg-teal-700 transition-colors rounded-lg"
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >¿Quiénes Somos?</NavLink>
            {/* <NavLink
                to={'https://api.whatsapp.com/send/?phone=+593987165337&text=Hola%2C+Me+gustar%C3%ADa+agenda+una+cita+%20+&app_absent=0'}
                activeClassName="pagina-actual"
            >Agenda una cita</NavLink> */}
        </Nav>
    );
}


export default Navegacion;
