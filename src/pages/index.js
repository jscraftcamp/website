import React from "react"
import Page from "../components/page"
import Section from "../components/section"
import Intro from "../components/intro"
import Spacer from "../components/spacer"
import Explanation from "../components/explanation"

export default () => (
  <Page title="Location">
    <Section>
      <Spacer size="xl" />
      <Intro />
      <Spacer size="xl" />
      <Explanation />
    </Section>
  </Page>
)
