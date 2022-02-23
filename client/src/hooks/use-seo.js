import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {

  const data = useStaticQuery(graphql`
    {
        datoCmsSite{
              globalSeo{
                  siteName
          titleSuffix
          fallbackSeo{
                      title
            description
            image {
              url
            }
          }
        }
      }
  }
    `)
    
    
    return data.datoCmsSite.globalSeo;
    

   

 }


export default useSeo;
