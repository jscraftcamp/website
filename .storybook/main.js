module.exports = {
  stories: ["../src/components/**/*.story.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: config => {
    // Prepare storybook for Gatsby
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
    config.module.rules[0].use[0].options.plugins = [
      require.resolve("@babel/plugin-proposal-class-properties"),
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]
    config.resolve.mainFields = ["browser", "module", "main"]

    // Add new loaders we want to use
    config.module.rules.push(
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
              },
            },
          },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "node_modules/modern-normalize/modern-normalize.css",
                "node_modules/sass-mq/_mq.scss",
              ],
            },
          },
        ],
      }
      // {
      //   test: /\.svg$/,
      //   issuer: /\.js$/, // Prevent usage of icon sprite outside of js
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader'
      //     },
      //     {
      //       loader: 'svgo-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.mp4$/,
      //   loader: 'file-loader',
      //   options: {
      //     esModule: false
      //   }
      // }
    )

    return config
  },
}
