import React from "react"
import cn from "classnames"
import Typography from "../typography"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./mini-headline.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const MiniHeadline = ({ children, className }) => {
  return (
    <Typography className={cn(style.root, className)}>{children}</Typography>
  )
}

export default MiniHeadline
