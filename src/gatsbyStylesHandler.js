const isStorybookBuild = process.env.STORYBOOK_BUILD

export default function convert4StorybookIfNeeded(gatsbyStyles) {
  if (isStorybookBuild) {
    return gatsbyStyles.default
  }
  return gatsbyStyles
}
