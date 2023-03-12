import React from "react"

import data from "../../data.json"

import convert4StorybookIfNeeded from "../../gatsbyStylesHandler"
import * as gatsbyStyles from "./team.module.scss"

const style = convert4StorybookIfNeeded(gatsbyStyles)

export const Team = () => (
  <div className={style.theteam}>
    {data.theteam.map(({ name, photo, email }) => {
      return (
        <div key={name}>
          {photo && (
            <img src={`/img/theteam/${photo}`} alt={"member image " + name} />
          )}
          <div>{name}</div>
          {email && (
            <a className={style.mail} href={"mailto:" + email} title={email}>
              {email}
            </a>
          )}
        </div>
      )
    })}
  </div>
)

export default Team
