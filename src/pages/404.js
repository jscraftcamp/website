import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Typography from "../components/typography"
import TextBlock from "../components/text-block"

const NotFoundPage = () => (
  <Page title="404: Not found">
    <Section>
      <TextBlock headlineComponent="h1" headline="not found">
        <Typography paragraph>
          You just hit a route that doesn't exist... the sadness
        </Typography>
      </TextBlock>
    </Section>
  </Page>
)

export default NotFoundPage
