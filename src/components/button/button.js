import React from "react"
import style from "./button.module.scss"
import Typography from "../typography"
import cn from "classnames"

export default ({ children, className, ...props }) => {
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
