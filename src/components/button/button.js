import React from "react"
import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./button.module.scss"
import Typography from "../typography"
import cn from "classnames"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const Button = ({ children, className, ...props }) => {
  return (
    <Typography
      component="button"
      className={cn(className, style.root)}
      variant="inverted"
      {...props}
    >
      {children}
    </Typography>
  )
}
export default Button
