import React from "react"
import * as gatsbyStyles from "./spacer.module.scss"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"

import cn from "classnames"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Spacer = ({ size, className }) => (
  <div className={cn(style.root, className, style[size])} />
)
export default Spacer
