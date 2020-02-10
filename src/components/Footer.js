/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import _data from '../_data.json'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3 className={_data.baseColor + "-text"}>Sitemap</h3>
        <ul>
          { _data.navigationItems.main.map(item => <li key={item.title}>
            <a href={item.url} className={_data.baseColor + "-text"}>
              {item.title}
            </a>
             </li>)
          }
        </ul>
      </div>
      <div>
        <h3 className={_data.baseColor + "-text"}>Get in touch</h3>
        <ul>
          <li><a className={_data.baseColor + "-text"} href="/theteam">The Team</a></li>
          <li><a className={_data.baseColor + "-text"} href="https://twitter.com/jscraftcamp">Twitter</a></li>
          <li><a className={_data.baseColor + "-text"} href="/imprint.html">Imprint</a></li>
          <li><a className={_data.baseColor + "-text"} href="/privacypolicy">Privacy Policy</a></li>
        </ul>
      </div>
      <div style={{"flex": 1.5}}>
        <h3 className={_data.baseColor + "-text"}>Archive</h3>
        <ul>
          {_data.navigationItems.archive.map(item => <li key={item.title}><a
            className={_data.baseColor + "-text"} href={item.url + '.html'}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </footer>);
}

Footer.propTypes = {
};

export default Footer

