import React from "react"
import style from "./text-block.module.scss"
import Typography from "../typography"

export default ({
  headline,
  children,
  beforeNode,
  afterNode,
  headlineComponent = "h2",
}) => (
  <div className={style.root}>
    {beforeNode && <div className={style.beforeNode}>{beforeNode}</div>}
    <Typography className={style.headline} component={headlineComponent}>
      {headline}
    </Typography>
    {children}
    {afterNode && <div className={style.afterNode}>{afterNode}</div>}
  </div>
)
