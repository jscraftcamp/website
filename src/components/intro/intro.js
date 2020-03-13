import React from "react"
import style from "./intro.module.scss"

import Icon from "../icon"
import Typography from "../typography"

import Logo from "../../assets/images/logo.svg"

export default () => (
  <div className={style.root}>
    <div className={style.logo}>
      <Icon source={Logo} />
    </div>
    <div className={style.text}>
      <Typography className={style.headline} component="h1">
        JSCraftCamp 2020
      </Typography>
      <Typography variant="subline">
        Will return to Munich, this summer!
        <br />A Barcamp about JavaScript and Crafting Software
      </Typography>
    </div>
  </div>
)
