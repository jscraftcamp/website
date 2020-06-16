import React from "react"
import cn from "classnames"

import style from "./icon.module.scss"

export default ({ className, source }) => (
  <svg
    className={cn(style.root, className)}
    version="1.1"
    viewBox={source.viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <use xlinkHref={`#${source.id}`} />
  </svg>
)
