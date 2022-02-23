import * as React from "react"
import styled from "@emotion/styled";
import Layout from "../components/layout"
import ImagenTratamiento from "../components/imagenTratamiento";
import ImagenFooter from "../components/imagenFooter";
import ImagenReview from "../components/imagenReview";
import ContenidoInicio from "../components/contenidoInicio";
import PaquetePreview from '../components/paquetePreview';
import usePaquetes from "../hooks/use-paquetes";
import SignUpForm from "../components/signUpForm";

const ListadoPaquetes = styled.ul`
  max-width:1200px;
  width:95%;
  margin:4rem auto 0 auto;

  @media (min-width:768px){
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }

`
const IndexPage = () => {


  const paquetes = usePaquetes();
  // console.log(process.env.API_KEY);  

  return (

    <Layout>
      <ImagenTratamiento />
      <SignUpForm />
      <ContenidoInicio />

      <div className="bg-orange-100 py-12">

        <h2 className="text-center py-4 text-5xl">
          Nuestros Tratamientos
        </h2>

        <ListadoPaquetes>
          {paquetes.map(paquete => (
            <PaquetePreview
              key={paquete.id}
              paquete={paquete}


            />
          ))}
        </ListadoPaquetes>

      </div>
      
      <ImagenReview />
      <ImagenFooter />
      <SignUpForm />
    </Layout>
  )
}

export default IndexPage
