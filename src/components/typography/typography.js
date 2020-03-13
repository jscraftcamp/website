import React from "react"
import style from "./typography.module.scss"
import cn from "classnames"

export default ({
  className,
  component,
  variant,
  variants = [],
  paragraph,
  children,
  ...props
}) => {
  const Component = component || (paragraph ? "p" : "span")

  return (
    <Component
      className={cn(
        className,
        style.root,
        style[Component], // Component returns the "string" of the tag not a node
        style[variant],
        ...variants.map(v => style[v])
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
