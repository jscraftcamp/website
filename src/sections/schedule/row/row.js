import React from "react"
import style from "./row.module.scss"

const Row = ({ time, children }) => {
  return (
    <div className={style.root}>
      <div className={style.time}>{time}</div>
      <div className={style.children}>{children}</div>
    </div>
  )
}

export default Row
