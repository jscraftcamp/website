import React from "react"

import TextBlock from "../../components/text-block"

import * as style from "./sponsors.module.scss"

const Sponsors = () => {
  const sponsors = [
    {
      name: "codecentric",
      src: "/img/sponsor-2022/codecentric.png",
      link: "https://www.codecentric.de/",
    },
    {
      name: "Grollmus",
      src: "/img/sponsor-2022/grollmus.png",
      link: "https://www.grollmus.de/",
    },
    {
      name: "compose.us",
      src: "/img/sponsor-2022/compose-us.png",
      link: "https://www.compose.us/",
    },
    {
      name: "TNG Technology consulting",
      src: "/img/sponsor-2022/tng.png",
      link: "https://www.tngtech.com/",
    },
    {
      name: "Peerigon",
      src: "/img/sponsor-2022/peerigon.png",
      link: "https://www.peerigon.com/",
    },
    {
      name: "Sono Motors",
      src: "/img/sponsor-2022/sono-motors.png",
      link: "https://sonomotors.com/",
    },
    {
      name: "Instana",
      src: "/img/sponsor-2022/instana.png",
      link: "https://www.instana.com/",
    },
    {
      name: "Method park",
      src: "/img/sponsor-2022/method-park.png",
      link: "https://www.instana.com/",
    },
  ]
  return (
    <React.Fragment>
      <TextBlock
        headlineComponent="h1"
        headline="A big thanks to our great sponsors"
      />
      <div className={style.row}>
        {sponsors.map((s, i) => {
          return (
            <div className={style.col} key={s.name}>
              <a href={s.link} rel="noopener noreferrer" target="_blank">
                <div className={style.image}>
                  <img alt={s.name} src={s.src} width="100%" />
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
export default Sponsors
