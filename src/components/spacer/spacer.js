import React from "react"
import style from "./spacer.module.scss"

import cn from "classnames"

const Spacer = ({ size, className }) => (
  <div className={cn(style.root, className, style[size])} />
)
export default Spacer
