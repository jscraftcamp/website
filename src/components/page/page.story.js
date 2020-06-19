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

export const bigContent = () => (
  <Page title="hello world">
    <div style={{ height: 1000, display: "block", background: "#eee" }}>
      a lot of content
    </div>
  </Page>
)
