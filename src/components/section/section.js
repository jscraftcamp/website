import React from "react"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./section.module.scss"

import cn from "classnames"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Section = ({ className, children }) => (
  <div className={cn(style.root)}>
    <div className={cn(style.content, className)}>{children}</div>
  </div>
)
export default Section
