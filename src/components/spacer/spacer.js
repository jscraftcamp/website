import React from "react"
import style from "./spacer.module.scss"

import cn from "classnames"

export default ({ size, className }) => (
  <div className={cn(style.root, className, style[size])} />
)
