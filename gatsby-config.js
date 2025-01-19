/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Fairway Club`,
    description: `Premium indoor golf simulator experience in a state-of-the-art facility`,
    author: `@thefairwayclub`,
    siteUrl: `https://thefairwayclub.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `The Fairway Club`,
        short_name: `Fairway Club`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2D5A27`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
