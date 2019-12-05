require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Sheringham Flooring`,
    description: `Flooring and carpet fitting in Sheringham, Cromer and North Walsham`,
    author: `@zellenent`,
    phone: '01263 479 728',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, 
        whitelistPatterns: [/is-active/],
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'sheringham-flooring-2019',
        accessToken: 'MC5YYzJfQVJFQUFDSUFHcXQw.H2Dvv70pY3tCfe-_vSTvv70zbu-_ve-_ve-_ve-_ve-_vQVyTO-_ve-_ve-_vVcR77-977-9du-_ve-_ve-_vQ',
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
