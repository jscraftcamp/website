import React from "react"

import data from "../../data.json"

import styles from "./team.module.scss"
import "./team.scss"

export const Team = () => (
  <div className="row">
    {data.theteam.map((member) => (
      <div className="col s12 m4 l3" key={member.name}>
        <div>
          {member.photo && (
            <img
              className={styles.responsive_img}
              alt={"member image " + member.name}
              src={"/img/theteam/" + member.photo}
            />
          )}
          <div className={styles.content}>
            <div className={styles.title}>
              <span>{member.name}</span>
              <br />
              {member?.email && (
                <a className={styles.mail} href={"mailto:" + member.email}>
                  {member.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Team
