module.exports = {
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },
  stories: ["../src/**/*.story.js"],
  addons: [
    "@storybook/preset-scss", // auto scss support
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-toolbars",
    "@storybook/addon-viewport",
  ],
  staticDirs: ["../static"],
  webpackFinal: (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )
    // Workaround:
    // storybook handles svg with the file-loader which overrides our custom loaders, so adapt rule, to ignore svg extension:
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes("svg")) {
        const test = rule.test.toString().replace("svg|", "").replace(/\//g, "")
        return { ...rule, test: new RegExp(test) }
      } else {
        return rule
      }
    })

    // Add new loaders we want to use
    config.module.rules.push(
      // replacing storybook's builtin loader with this one:
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
