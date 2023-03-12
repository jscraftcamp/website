import React from "react"

import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./post-event.module.scss"

import twitter from "../../assets/images/twitter.svg"
import github from "../../assets/images/github.svg"

import Icon from "../../components/icon"
import Spacer from "../../components/spacer"
import TextBlock from "../../components/text-block"
import logo from "../../assets/images/logo.svg"
import Typography from "../../components/typography"

const style = convert4StorybookIfNeeded(gatsbyStyles)

const PostEvent = () => (
  <div className={style.root}>
    <Spacer size="xs" />
    <TextBlock headline="!🎉 Thank you all for #jscc22 🎉!" />
    <div className={style.logo}>
      <Icon source={logo} />
    </div>
    <div className={style.text}>
      <Typography variant="subline" paragraph>
        Thanks to everyone who contributed and participated.
        <br />
        You are what makes this Bar Camp great!
        <Spacer size="xs" />
        Stay in tune, for when{" "}
        <a href="https://twitter.com/hashtag/jscc22">#jscc22</a> becomes{" "}
        <a href="https://twitter.com/hashtag/jscc23">#jscc23</a>
      </Typography>
    </div>
    <Spacer size="xs" />
    <div className={style.social}>
      <a href="https://twitter.com/jscraftcamp">
        <Icon className={style.socialIcon} source={twitter} />
      </a>
      <a href="https://github.com/jscraftcamp/website">
        <Icon className={style.socialIcon} source={github} />
      </a>
    </div>
  </div>
)

export default PostEvent
