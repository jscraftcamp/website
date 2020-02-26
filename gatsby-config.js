module.exports = {
  siteMetadata: {
    title: `JSCraftCamp - 10+11 July 2020 in Munich`,
    description: `Website for JSCraftCamp - 10+11 July 2020 in Munich.`,
    author: `@davelosert, @rhosts, @michaelzoidl, @Narigo`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-transformer-json`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSCraftCamp - 10+11 July 2020 in Munich`,
        short_name: `JSCraftCamp`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        icon: `src/images/new_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
