import React from "react"
import style from "./section.module.scss"

import cn from "classnames"

const Section = ({ className, children }) => (
  <div className={cn(style.root)}>
    <div className={cn(style.content, className)}>{children}</div>
  </div>
)
export default Section