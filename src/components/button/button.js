import React from "react"
import * as style from "./button.module.scss"
import Typography from "../typography"
import cn from "classnames"

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
