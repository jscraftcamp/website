import React from "react"
import Typography from "../typography"

const ParticipantCardTitle = ({ name, twitter, onClick }) => (
  <div>
    <Typography
      variants={["uppercase", "wide", "link"]}
      onClick={onClick}
      paragraph
    >
      {name}
    </Typography>
    {twitter && (
      <Typography
        component="a"
        href={"https://twitter.com/" + twitter}
        target="_blank"
        rel="noreferrer noopener"
        paragraph
      >
        @{twitter}
      </Typography>
    )}
  </div>
)

export default ParticipantCardTitle
