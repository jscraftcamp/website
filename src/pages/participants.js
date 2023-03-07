import React, { useEffect, useState } from "react"
// import { graphql } from "gatsby"
import WordCloud from "react-d3-cloud"

import Page from "../components/page"
import Section from "../components/section"
import TextBlock from "../components/text-block"
import Spacer from "../components/spacer"
import ParticipantCard from "../components/participant-card"
import ParticipantWrapper from "../components/participants"
import ParticipantsCounter from "../components/participants-counter/participants-counter"

// Reuse when registration is open and we have the first participants
// export const query = graphql`
//   query ParticipantData {
//     allParticipantsJson {
//       nodes {
//         company
//         id
//         what_can_i_contribute
//         what_is_my_connection_to_javascript
//         when {
//           friday
//           saturday
//         }
//         twitter
//         tags
//         name
//       }
//       totalCount
//     }
//   }
// `

export default function Participants({ data }) {
  // const { allParticipantsJson } = data
  // const participants = allParticipantsJson.nodes
  const participants = []

  const [tagCloudEnabled, setTagCloudEnabled] = useState(false)

  useEffect(() => {
    setTagCloudEnabled(false)
  })

  const allTags = new Map()
  participants.forEach(({ tags }) => {
    tags.forEach((tx) => {
      const t = tx.toLowerCase()
      allTags.set(t, (allTags.get(t) ?? 0) + 1)
    })
  })

  const wordData = [...allTags].map(([text, value]) => ({
    text,
    value,
  }))
  return (
    <Page title="Participants">
      <Section>
        <TextBlock headline="Participants" />
        {tagCloudEnabled && (
          <WordCloud
            data={wordData}
            width={220}
            height={120}
            font="Poppins"
            fontSize={(word) => Math.log2(word.value) * 3 + 3}
            spiral="rectangular"
            padding={1}
          />
        )}
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
