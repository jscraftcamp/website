import React from "react"
import convert4StorybookIfNeeded from "../../../gatsbyStylesHandler"
import * as gatsbyStyles from "./row.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Row = ({ time, children }) => {
  return (
    <div className={style.root}>
      <div className={style.time}>{time}</div>
      <div className={style.children}>{children}</div>
    </div>
  )
}

export default Row
