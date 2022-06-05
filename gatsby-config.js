module.exports = {
  siteMetadata: {
    title: "JSCraftCamp - 2022 in Munich",
    description: "Website for JSCraftCamp - 2022 in Munich",
    author: "@davelosert, @rhosts, @michaelzoidl, @Narigo",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
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
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "participants",
        path: `${__dirname}/participants`,
        ignore: [`**/\_*`], // ignore template
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "JSCraftCamp - 2022 in Munich",
        short_name: "JSCraftCamp",
        start_url: "/",
        background_color: "#ececec",
        theme_color: "#ececec",
        display: "minimal-ui",
        icon: "src/assets/images/logo.png",
      },
    },
    "gatsby-plugin-netlify",
  ],
}
