/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const TeamMember = ({img}) => {
  return <img src={img}></img>;
};

TeamMember.propTypes = {
  img: PropTypes.string,
};

export default TeamMember

