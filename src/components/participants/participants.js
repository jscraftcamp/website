import React from "react"
import * as style from "./participants.module.scss"

const Participants = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
)

export default Participants
