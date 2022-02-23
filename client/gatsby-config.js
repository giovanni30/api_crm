module.exports = {
  siteMetadata: {
    title: `Bioseikatsu`,
    description: `El objetivo de BioSeikatsu es ayudar al fortalecimiento del Sistema Inmune, logrando sanar las patologías...  `,
    author: `@bioseikatsuecu`,
    siteUrl: `https://www.bioseikatsu.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/YinYan10.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `88f72c9d5309d449966feeba1bb99a`,
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
          printRejected: false,
          develop: false,
          tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TS3FPHV",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Defaults to false
        enableWebVitalsTracking: true,
   
      },
    },




    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}