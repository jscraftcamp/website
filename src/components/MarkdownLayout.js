/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Navigation from "./Navigation"

const MarkdownLayout = ({ children }) =>
  <>
    <header>
      <Navigation/>
    </header>
    <div className="container">
      <div className="row">
        <div className="col s12 m12">

        {children}
        </div>
      </div>
    </div>
    <Footer/>
  </>

MarkdownLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownLayout
