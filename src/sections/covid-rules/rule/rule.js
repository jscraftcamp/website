import React from "react"
import Typography from "../../../components/typography"
import convert4StorybookIfNeeded from "../../../gatsbyStylesHandler"
import * as gatsbyStyles from "./rule.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Rule = ({ icon, text }) => {
  return (
    <li className={style.root}>
      <div className={style.icon}>{icon}</div>
      <Typography paragraph>{text}</Typography>
    </li>
  )
}

export default Rule
