module.exports = {
  siteMetadata: {
    title: "JSCraftCamp - 2021 in Munich",
    description: "Website for JSCraftCamp - 2021 in Munich",
    author: "@davelosert, @rhosts, @michaelzoidl, @Narigo",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          esModule: true,
          modules: {
             namedExport: false,
          },
        },
        additionalData: `
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
        name: "JSCraftCamp - 2021 in Munich",
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
