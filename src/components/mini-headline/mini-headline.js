import React from "react"
import cn from "classnames"
import Typography from "../typography"
import * as style from "./mini-headline.module.scss"

const MiniHeadline = ({ children, className }) => {
  return (
    <Typography className={cn(style.root, className)}>{children}</Typography>
  )
}

export default MiniHeadline
