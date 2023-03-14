import React from "react"
import Typography from "../typography"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./participants-counter.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const ParticipantsCounter = ({ participants }) => {
  return (
    <div className={style.root}>
      <Typography variant="subline">
        Friday {participants.filter((p) => p.when.friday).length} (max. 80)
      </Typography>
      <Typography variant="subline">
        Saturday {participants.filter((p) => p.when.saturday).length} (max. 80)
      </Typography>
    </div>
  )
}

export default ParticipantsCounter
