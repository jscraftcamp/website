import React from "react"

const Icon = ({ className, source : Source }) => {
  return (
  <svg
    className={className}
    version="1.1"
    viewBox={Source.defaultProps?.viewBox ?? Source.viewBox}
    width={Source.defaultProps?.width}
    height={Source.defaultProps?.height}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      {
        // Workaround for storybook
        // in storybook, we only get a BrowserSpriteSVG object instead of
        // a react component
        Source.id ? <use xlinkHref={`#${Source.id}`} /> : <Source />
      }
  </svg>
)
}
export default Icon
