import React from "react"
import * as style from "./text-block.module.scss"
import Typography from "../typography"
import cn from "classnames"

const TextBlock = ({
  headline,
  children,
  beforeNode,
  afterNode,
  headlineComponent = "h2",
  className,
}) => (
  <div className={cn(style.root, className)}>
    {beforeNode && <div className={style.beforeNode}>{beforeNode}</div>}
    <Typography
      className={style.headline}
      component={headlineComponent}
      variants={["uppercase", "wide"]}
    >
      {headline}
    </Typography>
    {children}
    {afterNode && <div className={style.afterNode}>{afterNode}</div>}
  </div>
)
export default TextBlock
