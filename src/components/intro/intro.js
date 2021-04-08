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
        Unfortunately and due to the current situation, we can not say if or how
        JSCC 2020 will actually take place.
      </Typography>
      <Typography component="p" variant="subline">
        We from the Orga team are observing the situation and will try to make a
        decision as soon as possible.
      </Typography>
      <Typography component="p" variant="subline">
        Until then, it is probably best for you to consider JSCC cancelled <span role="img" aria-label="disappointed face">😞</span>
      </Typography>
      <Typography component="p" variant="subline">We are terribly sorry.</Typography>
    </div>

    <div className={style.logo}>
      <Icon source={logo} />
    </div>
    <div className={style.text}>
      <Typography className={style.headline} component="h1">
        JSCraftCamp 2020
      </Typography>
      { false && // disabled until consideration or current situation
      <Typography variant="subline">
        Will return to Munich, this summer!
        <br />A Barcamp about JavaScript and Crafting Software
      </Typography>
      }
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