import React from "react"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./participants.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Participants = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
)

export default Participants
