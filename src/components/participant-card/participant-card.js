import React, { useState } from "react"
import ParticipantCardTitle from "./participant-card-title"
import ParticipantCardReveal from "./participant-card-reveal/participant-card-reveal"
import Typography from "../../components/typography"
import * as style from "./participant-card.module.scss"
import cn from "classnames"

const ParticipantCard = ({ data }) => {
  const [revealState, setRevealState] = useState(false)
  const participantData = data
  return (
    <div
      className={cn(style.card, {
        [style.revealActive]: revealState,
        [style.fridayActive]: participantData.when.friday,
        [style.saturdayActive]: participantData.when.saturday,
      })}
    >
      <div className={style.badges}>
        <Typography className={style.badgeFriday}>Fr</Typography>
        <Typography className={style.badgeSaturday}>Sa</Typography>
      </div>
      <div className={style.participantSummary}>
        <ParticipantCardTitle
          name={participantData.name}
          twitter={participantData.twitter}
          onClick={() => setRevealState(true)}
        />

        <ul className={style.tags}>
          {participantData.tags.map((tag) => (
            <li key={tag}>
              <Typography>#{tag}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.participantDetails}>
        <ParticipantCardReveal
          name={participantData.name}
          connection={participantData.what_is_my_connection_to_javascript}
          contribution={participantData.what_can_i_contribute}
          onClick={() => setRevealState(false)}
          twitter={participantData.twitter}
        />
      </div>
    </div>
  )
}
export default ParticipantCard
