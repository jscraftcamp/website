import React from "react"
import { Link } from "gatsby"
import style from "./footer.module.scss"

import Icon from "../icon"
import Typography from "../typography"
import Section from "../section"

import logo from "../../assets/images/logo.svg"
import netlify from "../../assets/images/netlify.svg"
import gatsby from "../../assets/images/gatsby.svg"
import chromatic from "../../assets/images/chromatic.svg"
import storybook from "../../assets/images/storybook.svg"

const DEFAULT_BRANCH = "master"
// env variable will be set by netlify while building, else use default
const branch = process.env.BRANCH ?? DEFAULT_BRANCH
const chromaticUrl = `https://www.chromatic.com/library?appId=60d36a243a7c1f0049472423&branch=${branch}`
const storybookUrl = `https://${branch}--60d36a243a7c1f0049472423.chromatic.com`

// to temporary disable button and link on page
const storybookChromaticEnabled = false

const InternalLink = ({ to, children }) => (
  <Typography
    className={style.link}
    component={Link}
    to={to}
    variants={["inverted", "small", "nounderline"]}
  >
    {children}
  </Typography>
)

const ExternalLink = ({ href, children }) => (
  <Typography
    className={style.link}
    component="a"
    href={href}
    variants={["inverted", "small", "nounderline"]}
  >
    {children}
  </Typography>
)

const Footer = () => (
  <footer className={style.footer}>
    <Section className={style.root}>
      <div className={style.logo}>
        <Icon className={style.logo} source={logo} />
      </div>
      <div className={style.lists}>
        <div className={style.list}>
          <Typography className={style.listHeadline} variant="inverted">
            Sitemap
          </Typography>
          <div className={style.links}>
            <InternalLink to="/register">Registration</InternalLink>
            <InternalLink to="/">Home</InternalLink>
            <InternalLink to="/sponsoring">Sponsoring</InternalLink>
            <InternalLink to="/values">Values</InternalLink>
            <InternalLink to="/imprint">Privacy Policy</InternalLink>
          </div>
        </div>
        <div className={style.list}>
          <Typography className={style.listHeadline} variant="inverted">
            Get in touch
          </Typography>
          <div className={style.links}>
            <InternalLink to="/theteam">Team</InternalLink>
            <ExternalLink href="https://twitter.com/jscraftcamp">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://github.com/jscraftcamp/website">
              Github
            </ExternalLink>
            <InternalLink to="/imprint">Imprint</InternalLink>
          </div>
        </div>
        <div className={style.list}>
          <Typography className={style.listHeadline} variant="inverted">
            Archive
          </Typography>
          <div className={style.links}>
            <ExternalLink href="https://web.archive.org/web/20190706093953/http://jscraftcamp.org/">
              2019
            </ExternalLink>
            <ExternalLink href="https://web.archive.org/web/20180809182443/http://jscraftcamp.org/">
              2018
            </ExternalLink>
            <ExternalLink href="https://web.archive.org/web/20170715150754/http://jscraftcamp.org:80/">
              2017
            </ExternalLink>
            <ExternalLink href="https://web.archive.org/web/20161011211857/http://jscraftcamp.org:80/">
              2016
            </ExternalLink>
          </div>
        </div>
        <div className={style.list}>
          <Typography className={style.listHeadline} variant="inverted">
            Hosted on
          </Typography>
          <div className={style.links}>
            <a className={style.tech} href="https://www.netlify.com/">
              <Icon className={style.icon} source={netlify} />
              <Typography variants={["inverted", "small"]}>Netlify</Typography>
            </a>
            <a className={style.tech} href="https://gatsbyjs.org">
              <Icon className={style.icon} source={gatsby} />
              <Typography variants={["inverted", "small"]}>
                Gatsby V4
              </Typography>
            </a>
            {storybookChromaticEnabled && (
              <div className={style.tech}>
                <a href={chromaticUrl}>
                  <Icon className={style.icon} source={chromatic} />
                </a>
                <Typography variants={["inverted", "small"]}>
                  Chromatic
                </Typography>
                <a href={storybookUrl}>
                  <Icon className={style.icon} source={storybook} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  </footer>
)

export default Footer
