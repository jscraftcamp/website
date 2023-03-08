import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Intro from "../sections/intro"
import Spacer from "../components/spacer"
import Explanation from "../sections/explanation"
// uncomment when show new sponsors import Sponsors from "../sections/sponsors"

const IndexPage = () => (
  <Page title="JSCraftCamp">
    <Section>
      <Intro />
      {/*<Spacer size="xl" />
      <Sponsors />
      */}
      <Spacer size="xl" />
      <Explanation />
      <Spacer size="xl" />
    </Section>
  </Page>
)

export default IndexPage
