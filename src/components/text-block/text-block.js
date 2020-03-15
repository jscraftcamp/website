import React from "react"
import style from "./text-block.module.scss"
import Typography from "../typography"
import cn from "classnames"

export default ({
  headline,
  children,
  beforeNode,
  afterNode,
  headlineComponent = "h2",
  className,
}) => (
  <div className={cn(style.root, className)}>
    {beforeNode && <div className={style.beforeNode}>{beforeNode}</div>}
    <Typography className={style.headline} component={headlineComponent}>
      {headline}
    </Typography>
    {children}
    {afterNode && <div className={style.afterNode}>{afterNode}</div>}
  </div>
)
