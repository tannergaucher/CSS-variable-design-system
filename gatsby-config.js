module.exports = {
  siteMetadata: {
    title: `Semantic Style System`,
    description: `A CSS only, zero dependency, framework agnostic style system for rapid prototyping.`,
    author: `tannermichaelgaucher@gmail.com`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/manifest.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
