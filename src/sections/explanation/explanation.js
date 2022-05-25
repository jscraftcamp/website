import React from "react"
import style from "./explanation.module.scss"

import TextBlock from "../../components/text-block"
import Typography from "../../components/typography"
import Icon from "../../components/icon"

import code from "../../assets/images/code.svg"
import rocket from "../../assets/images/rocket.svg"
import camp from "../../assets/images/camp.svg"

const Explanation = () => (
  <div className={style.root}>
    <TextBlock
      className={style.textblock}
      headline="JavaScript"
      beforeNode={<Icon className={style.icon} source={code} />}
    >
      <Typography paragraph>
        The focus of this BarCamp are JavaScript and related technologies.
        Possible topics are: Popular frameworks like Angular and React, the
        latest ECMAScript standard, languages like Elm or TypeScript which
        transpile to JavaScript, server-side programming with node.js, paradigms
        like event driven programming or future technologies like WebAssembly.
      </Typography>
    </TextBlock>
    <TextBlock
      className={style.textblock}
      headline="Crafting Software"
      beforeNode={<Icon className={style.icon} source={rocket} />}
    >
      <Typography paragraph>
        Have you ever struggled with an huge old JavaScript codebase? Or rolled
        your eyes about an 'undefined' is not a function error? We will discuss
        which tools, practices and architecture patterns – from continuous
        integration to modular components – can help to create and maintain
        long-living, evolvable JavaScript applications.
      </Typography>
    </TextBlock>
    <TextBlock
      className={style.textblock}
      headline="Barcamp"
      beforeNode={<Icon className={style.icon} source={camp} />}
    >
      <Typography paragraph>
        A barcamp – also called an unconference – is an event without any
        previously fixed agenda. All the participants meet in the morning and
        decide about the schedule for the day. Everyone can offer a session -
        from a short hands-on workshop to moderating a discussion. The goal is
        to make everything as participative as possible. Read more about BarCamp
        on Wikipedia.
      </Typography>
    </TextBlock>
  </div>
)

export default Explanation
