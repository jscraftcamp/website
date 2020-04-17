import React from "react"

import style from "./JsccLogo.module.scss"
import logo from "./Pink.svg"

export default () => (
  <div className={style.root}>
    <img src={logo}  alt="JSCraftcamp logo"/>
  </div>
)
