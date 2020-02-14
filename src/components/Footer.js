/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { baseColor, navigationItems } from "../_data.json"

const Footer = () => {
  return (
    <footer>
      <div>
        <h3 className={baseColor + "-text"}>Sitemap</h3>
        <ul>
          {navigationItems.main.map(item => <li key={item.title}>
            <a href={item.url} className={baseColor + "-text"}>
              {item.title}
            </a>
          </li>)
          }
        </ul>
      </div>
      <div>
        <h3 className={baseColor + "-text"}>Get in touch</h3>
        <ul>
          <li><a className={baseColor + "-text"} href="/theteam">The Team</a></li>
          <li><a className={baseColor + "-text"} href="https://twitter.com/jscraftcamp">Twitter</a></li>
          <li><a className={baseColor + "-text"} href="/imprint.html">Imprint</a></li>
          <li><a className={baseColor + "-text"} href="/privacypolicy">Privacy Policy</a></li>
        </ul>
      </div>
      <div style={{ "flex": 1.5 }}>
        <h3 className={baseColor + "-text"}>Archive</h3>
        <ul>
          {navigationItems.archive.map(item => <li key={item.title}><a
            className={baseColor + "-text"} href={item.url + ".html"}>{item.title}</a></li>)
          }
        </ul>
      </div>
      <div style={{ "flex": 1.5 }}>
        <h3 className={baseColor + "-text"}>Built with</h3>
        <ul>
          <li><a href="https://www.netlify.com">
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
          </a></li>
          <li><a href="https://gatsbyjs.org">
              <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg"
                   style={{
                     verticalAlign: "middle",
                     padding: 4,
                     width: 38
                   }}
              />
              <span>Gatsby v2</span>
          </a></li>
        </ul>
      </div>
    </footer>);
}

export default Footer


