import React from "react"

import { navigationItems } from "../_data"
import "../fonts/font-awesome/css/font-awesome.css"

export default () => (
  <nav className="colorOfTheYear">
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo left hide-on-small-and-down">
        JS CraftCamp
      </a>
      <ul id="nav-desktop" className="right hide-on-med-and-downX">
        {navigationItems.main.map(item => (
          <li key={item.title}>
            <a href={item.url} className={item.cssClasses}>
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <a href="https://twitter.com/jscraftcamp">
            <i className="fa fa-twitter fa-fw" />
          </a>
        </li>
        <li>
          <a href="https://github.com/jscraftcamp/website">
            <i className="fa fa-github fa-fw" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
