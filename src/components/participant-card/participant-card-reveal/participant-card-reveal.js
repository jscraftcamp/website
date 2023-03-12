import React from "react"
import MiniHeadline from "../../mini-headline"
import Typography from "../../typography"
import ParticipantCardTitle from "../participant-card-title"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./participant-card-reveal.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const ParticipantCardReveal = ({
  name,
  contribution,
  connection,
  onClick,
  twitter,
}) => (
  <div className={style.root}>
    <ParticipantCardTitle name={name} twitter={twitter} onClick={onClick} />
    <div>
      <MiniHeadline>Contribution</MiniHeadline>
      <Typography paragraph>{contribution}</Typography>
    </div>
    <div>
      <MiniHeadline>Connection</MiniHeadline>
      <Typography paragraph>{connection}</Typography>
    </div>
  </div>
)

export default ParticipantCardReveal
