import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Typography from "../components/typography"
import Spacer from "../components/spacer"

const NotFoundPage = () => (
  <Page title="404: Not found">
    <Section>
      <Spacer size="m" />
      <Typography component="h2">not found</Typography>
      <Typography>
        You just hit a route that doesn't exist... the sadness
      </Typography>
    </Section>
  </Page>
)

export default NotFoundPage
