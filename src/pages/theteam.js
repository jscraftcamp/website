import React from "react"

import Page from "../components/page"
import Section from "../components/section"
import Spacer from "../components/spacer"
import Typography from "../components/typography"
import TextBlock from "../components/text-block"
import Team from "../sections/team"

const TeamPage = () => {
  return (
    <Page title="Team">
      <Section>
        <TextBlock headlineComponent="h2" headline="The Team">
          <Typography paragraph>
            We are simple developers organizing this event in our spare time. If
            you have any questions or problems before or during the conference,
            don't hesitate to contact one of us!
          </Typography>
          <Spacer size="xs" />
          <Typography paragraph>
            You can always reach us by E-Mail:{" "}
            <a href="mailto: team@jscraftcamp.org">team@jscraftcamp.org</a>
          </Typography>
        </TextBlock>

        <Spacer size="m" />

        <Team />
      </Section>
    </Page>
  )
}

export default TeamPage
