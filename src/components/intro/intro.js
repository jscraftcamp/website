import React from "react"

import Icon from "../icon"
import Typography from "../typography"
import Spacer from "../spacer"

import style from "./intro.module.scss"

import logo from "../../assets/images/logo.svg"
import twitter from "../../assets/images/twitter.svg"
import github from "../../assets/images/github.svg"
import skyline from "../../assets/images/skyline.svg"

const Intro = () => (
  <div className={style.root}>
    <div className={style.headline}>
      <Typography component="p" variant="subline">
        Good news everyone! We're planning on having a JSCC in 2022! 🎉
      </Typography>
      <Typography component="p" variant="subline">
        The Orga team has kicked off the effort for the next steps to bring this years event into fruition
      </Typography>
      <Typography component="p" variant="subline">
        Stay tuned by following [@JSCraftCamp](https://twitter.com/JSCraftCamp) on Twitter!
      </Typography>
    </div>

    <div className={style.logo}>
      <Icon source={logo} />
    </div>
    <div className={style.text}>
      <Typography className={style.headline} component="h1">
        JSCraftCamp 2022
      </Typography>
      <Typography variant="subline">
        Will return to Munich, this summer!
        <br />A Barcamp about JavaScript and Crafting Software
      </Typography>
      <Spacer size="xs" />
      <div className={style.social}>
        <a href="https://twitter.com/jscraftcamp">
          <Icon className={style.socialIcon} source={twitter} />
        </a>
        <a href="https://github.com/jscraftcamp/website">
          <Icon className={style.socialIcon} source={github} />
        </a>
      </div>
      <Icon className={style.skyline} source={skyline} />
    </div>
  </div>
)
export default Intro
