import React from "react"

import _data from '../_data';

export default () => <nav className={_data.baseColor}>
    <div className="nav-wrapper container">
        <a href="/" className="brand-logo">JS CraftCamp</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

        <ul id="nav-desktop" className="right hide-on-med-and-down">
            {_data.navigationItems.main.map(item => (
                <li key={item.title}><a href={item.url} className={item.cssClasses}>{item.title}</a></li>
            ))}
            <li><a href="https://twitter.com/jscraftcamp"><i className="fa fa-twitter fa-fw"/></a></li>
            <li><a href="https://github.com/jscraftcamp/website"><i className="fa fa-github fa-fw"/></a></li>
        </ul>

        <ul id="mobile-demo" className="side-nav">
            {_data.navigationItems.main.map(item => (
                <li key={item.title}><a href={item.url} className={item.cssClasses}>{item.title}</a></li>
            ))}
            <li><a href="https://twitter.com/jscraftcamp"><i className="fa fa-twitter fa-fw"/></a></li>
            <li><a href="https://github.com/jscraftcamp/website"><i className="fa fa-github fa-fw"/></a></li>
        </ul>
    </div>
</nav>