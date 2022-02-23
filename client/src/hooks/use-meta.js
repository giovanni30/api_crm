import { graphql, useStaticQuery } from 'gatsby';

const useMeta = () => {

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
}
  
    `)
  
    
    return data.site.siteMetadata;
    

   

 }


export default useMeta;
