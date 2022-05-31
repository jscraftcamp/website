import React from "react"
import { graphql } from "gatsby"

import Page from "../components/page"
import Section from "../components/section"
import Spacer from "../components/spacer"
import ParticipantCard from "../components/participant-card"
import ParticipantWrapper from "../components/participants"
import ParticipantsCounter from "../components/participants-counter/participants-counter"
import TextBlock from "../components/text-block"

export const query = graphql`
  query ParticipantData {
    allParticipantsJson {
      nodes {
        company
        id
        what_can_i_contribute
        what_is_my_connection_to_javascript
        when {
          friday
          saturday
        }
        twitter
        tags
        name
      }
      totalCount
    }
  }
`

export default function Participants({ data }) {
  const { allParticipantsJson } = data
  const participants = allParticipantsJson.nodes
  return (
    <Page title="Participants">
      <Section>
        <TextBlock headline="Participants" />

        <ParticipantsCounter participants={participants} />

        <Spacer size="m" />

        <ParticipantWrapper>
          {participants.map((participant) => (
            <ParticipantCard key={participant.name} data={participant} />
          ))}
        </ParticipantWrapper>
      </Section>
    </Page>
  )
}
