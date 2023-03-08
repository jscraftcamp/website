import React from "react"

import data from "../../data.json"

import * as styles from "./team.module.scss"

export const Team = () => (
  <div className={styles.theTeam}>
    {data.theteam.map(({ name, photo, email }) => {
      return (
        <div key={name}>
          {photo && (
            <img src={`/img/theteam/${photo}`} alt={"member image " + name} />
          )}
          <div>{name}</div>
          {email && (
            <a className={styles.mail} href={"mailto:" + email} title={email}>
              {email}
            </a>
          )}
        </div>
      )
    })}
  </div>
)

export default Team
