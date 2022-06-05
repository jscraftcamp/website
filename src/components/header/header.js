import React from "react"
import style from "./header.module.scss"

import Typography from "../typography"
import Section from "../section"

import { Link } from "gatsby"

const Header = () => (
  <Section className={style.root}>
    <div className={style.logoWrapper}>
      <Typography
        className={style.logo}
        component={Link}
        variants={["link", "noselect", "poppins"]}
        to="/"
      >
        JSCraftCamp
      </Typography>
    </div>
    <div className={style.navigation}>
      <Typography component={Link} variant="link" to="/register">
        Registration
      </Typography>
      <Typography component={Link} variant="link" to="/participants">
        Participants
      </Typography>
      <Typography component={Link} variant="link" to="/sponsoring">
        Sponsoring
      </Typography>
      <Typography component={Link} variant="link" to="/values">
        Values
      </Typography>
    </div>
  </Section>
)
export default Header
