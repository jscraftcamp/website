import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Intro from "../sections/intro"
import Spacer from "../components/spacer"
import Explanation from "../sections/explanation"

const IndexPage = () => (
  <Page title="JSCraftCamp">
    <Section>
      <Intro />
      <Spacer size="xl" />
      <Explanation />
    </Section>
  </Page>
)

export default IndexPage
