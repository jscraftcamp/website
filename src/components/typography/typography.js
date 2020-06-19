import React from "react"
import style from "./typography.module.scss"
import cn from "classnames"

export default ({ className, component, children, ...props }) => {
  // if no component is given we use <span> as default tag
  const Component = component || "span"

  return (
    <Component
      className={cn(
        className,
        style.root,
        style[Component] // Component returns the "string" of the tag not a node
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
