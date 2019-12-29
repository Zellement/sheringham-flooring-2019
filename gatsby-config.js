require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Sheringham Flooring`,
    description: `Flooring and carpet fitting in Sheringham, Cromer, Fakenham and North Walsham`,
    author: `@Zellenent`,
    phone: '01263 479 728',
    mobile: '07760 478 192',
    address: 'Unit 31, Weybourne Road Industrial Est, Weybourne Road, Sheringham, Norfolk, NR26 8AF',
    email: 'info@sheringhamflooring.com',
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
        whitelist: ['gradient-yellow', 'gradient-blue', 'is-active']
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sheringham-flooring`,
        short_name: `sheringhamflooring`,
        start_url: `/`,
        background_color: `#26486E`,
        theme_color: `#F8F4B3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
