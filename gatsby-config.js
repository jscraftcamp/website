module.exports = {
  siteMetadata: {
    title: `JSCraftCamp - 2020 in Munich`,
    description: `Website for JSCraftCamp - 2020 in Munich`,
    author: `@davelosert, @rhosts, @michaelzoidl, @Narigo`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `
          @import "${__dirname}/src/config.scss";
        `,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSCraftCamp - 2020 in Munich`,
        short_name: `JSCraftCamp`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
  ],
}
