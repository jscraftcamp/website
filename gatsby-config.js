module.exports = {
  siteMetadata: {
    title: "JSCraftCamp - 10+11 July 2020 in Munich",
    description: "Website for JSCraftCamp - 10+11 July 2020 in Munich.",
    author: "@davelosert, @rhosts, @michaelzoidl, @Narigo",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svg-sprite",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `
          @import "node_modules/sass-mq/_mq.scss";
          @import "${__dirname}/src/config.scss";
        `,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "JSCraftCamp - 10+11 July 2020 in Munich",
        short_name: "JSCraftCamp",
        start_url: "/",
        background_color: "#ececec",
        theme_color: "#ececec",
        display: "minimal-ui",
        icon: "src/assets/images/logo.png",
      },
    },
  ],
}
