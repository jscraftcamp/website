import React from "react"

const Icon = ({ className, source : Source }) => {
debugger
  return (
  <svg
    className={className}
    version="1.1"
    viewBox={Source.defaultProps?.viewBox}
    width={Source.defaultProps?.width}
    height={Source.defaultProps?.height}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Source />
   </svg>
)
}
export default Icon
