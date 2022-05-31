import React from "react"
import Typography from "../../../components/typography"
import style from "./rule.module.scss"

const Rule = ({ icon, text }) => {
  return (
    <li className={style.root}>
      <div className={style.icon}>{icon}</div>
      <Typography paragraph>{text}</Typography>
    </li>
  )
}

export default Rule
