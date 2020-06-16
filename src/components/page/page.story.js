import React from "react"
import Page from "./"

export default {
  title: "components|Page",
  component: Page,
}

export const base = () => <Page>Hey</Page>

export const customTitle = () => (
  <Page title="hello world">
    // This doesnt work in the storybook but in gatsby
  </Page>
)

export const withHeader = () => (
  <Page header={<div>Iam the header</div>}>Iam the content</Page>
)

export const withFooter = () => (
  <Page footer={<div>Iam the footer</div>}>Iam the content</Page>
)

export const withHeaderAndFooter = () => (
  <Page
    header={<div>Hello iam the header</div>}
    footer={<div>Iam the footer</div>}
  >
    Iam the content
  </Page>
)
