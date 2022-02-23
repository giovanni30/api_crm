import React from 'react';
import { useLocation  } from '@reach/router';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './header';
import Footer from './footer';
import useSeo from '../hooks/use-seo';
import useMeta from '../hooks/use-meta';
import "./layout.css";


const Layout = (props) => {
  const seo = useSeo();
  const { fallbackSeo: { description, title , image} } = seo;

  
  const meta = useMeta();
  
  const location = useLocation ();

  // console.log(location);

  const canonical = meta.siteUrl + location.pathname;


  return (
    <>
      <Global
        styles={css`
        html{
          font-size:62.5%;
          box-sizing:border-box;
        }
        *, *:before, *:after{
          box-sizing:inherit;
        }

        body {
            font-size:18px;
            font-size:1.8rem;
            line-height:1.5;
            font-family:'PT Sans', sans-serif;
            }
        h1,h2,h3{
          margin:0;
          line-height:1.5;
        }
        h1,h2{
          font-family:'Roboto', serif;
        }
        h3{
          font-family:'PT Sans', sans-serif;
        }
        ul {
            list-styles:none;
            margin:0;
            padding:0;
            }


        `}
      />
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta content="es_MX" property="og:locale" />
        <meta content="Bioseikatsu" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content={image.url} property="og:image" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="@bioseikatsuecu" name="twitter:creator" />
        <meta content="@bioseikatsuecu" name="twitter:site" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image.url} name="twitter:image" />
        <meta name="robots" content="index, follow"></meta>
        <meta content={canonical} property="og:url"></meta>
        <meta name="theme-color"></meta>
        <base href="/"> </base>
        <link rel="alternate" href={canonical} hreflang="es-MX"/>
        <link id="canonical" rel="canonical" href={canonical}/>

      </Helmet>

      <Header />
      {props.children}
      <Footer title={title}
      />

    </>


  );
}

export default Layout;