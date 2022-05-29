import React from "react"

import Section from "../../components/section"
import TextBlock from "../../components/text-block"
import Typography from "../../components/typography"

import style from "./sponsors.module.scss"

const Sponsors = () => {
  const sponsors = [
    {
      src: "/img/cc_logo.png",
      link: "https://www.codecentric.de/",
    },
    {
      src: "/img/sponsor-2022/grollmus.png",
      link: "https://www.grollmus.de/",
    },
    {
      src: "/img/sponsor-2022/compose-us.png",
      link: "https://www.compose.us/",
    },
    {
      src: "/img/sponsor-2019/tng.png",
      link: "https://www.tngtech.com/",
    },
    {
      src: "/img/sponsor-2022/peerigon.png",
      link: "https://www.peerigon.com/",
    },
  ]
  return (
    <>
      <Section className={style.root}>
        <TextBlock headlineComponent="h1" headline="Sponsors">
          <Typography paragraph>Our great sponsors:</Typography>
        </TextBlock>
      </Section>
      <div className={style.row}>
        {sponsors.map((s, i) => {
          return (
            <div className={style.col} key={i}>
              <div className={style.image} key={i}>
                <a href={s.link} rel="noopener" target="_blank">
                  <img alt={"sponsor #" + i} src={s.src} width="100%" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Sponsors
