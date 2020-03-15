import React from "react"
import style from "./header.module.scss"

import Typography from "../typography"
import Button from "../button"
import Section from "../section"

import { Link, navigate } from "gatsby"

export default () => (
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
      <Typography component={Link} variant="link" to="/">
        Home
      </Typography>
      <Typography
        component="a"
        variant="link"
        href="https://github.com/jscraftcamp/website/projects/10"
      >
        Sponsoring
      </Typography>
      <Typography component={Link} variant="link" to="/values">
        Values
      </Typography>
      <Button onClick={() => navigate("/register")}>Register</Button>
    </div>
  </Section>
)
