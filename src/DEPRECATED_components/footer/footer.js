/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { navigationItems } from "../../_data.json"

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#000"}}>
      <div>
        <h3 className="colorOfTheYear-text text-lighten-5">Sitemap</h3>
        <ul>
          {navigationItems.main.map(item => (
            <li key={item.title}>
              <a href={item.url} className="colorOfTheYear-text text-lighten-5">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="colorOfTheYear-text text-lighten-5">Get in touch</h3>
        <ul>
          <li>
            <a className="colorOfTheYear-text text-lighten-5" href="/theteam">
              The Team
            </a>
          </li>
          <li>
            <a
              className="colorOfTheYear-text text-lighten-5"
              href="https://twitter.com/jscraftcamp"
            >
              Twitter
            </a>
          </li>
          <li>
            <a className="colorOfTheYear-text text-lighten-5" href="/imprint">
              Imprint
            </a>
          </li>
          <li>
            <a className="colorOfTheYear-text text-lighten-5" href="/privacypolicy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1.5 }}>
        <h3 className="colorOfTheYear-text text-lighten-5">Archive</h3>
        <ul>
          {navigationItems.archive.map(item => (
            <li key={item.title}>
              <a className="colorOfTheYear-text text-lighten-5" href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1.5 }}>
        <h3 className="colorOfTheYear-text text-lighten-5">Built with</h3>
        <ul>
          <li>
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" />
            </a>
          </li>
          <li>
            <a href="https://gatsbyjs.org">
              <img
                alt="Gatsby"
                src="https://www.gatsbyjs.org/monogram.svg"
                style={{
                  verticalAlign: "middle",
                  padding: 4,
                  width: 38,
                }}
              />
              <span>Gatsby v2</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
