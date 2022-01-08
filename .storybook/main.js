module.exports = {
 core: {
    builder: 'webpack5',
  },
  stories: [
    "../src/components/**/*.story.js",
    "../src/*.story.js",
    "../src/DEPRECATED_components/**/*.story.js"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
  ],
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

    // Workaround:
    // storybook handles svg with the file-loader which overrides our custom loaders, so adapt rule, to ignore svg extension:
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString().includes("svg")) {
        const test = rule.test
          .toString()
          .replace("svg|", "")
          .replace(/\//g, "")
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    })

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
              resources: ["node_modules/sass-mq/_mq.scss", "./src/config.scss"],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.js$/, // Prevent usage of icon sprite outside of js
        use: [
          {
            loader: "svg-sprite-loader",
          },
          {
            loader: "svgo-loader",
          },
        ],
      }
    )

    return config
  },
}
