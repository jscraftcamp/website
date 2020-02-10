/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const express= require('express');

/*
 * This static routing was needed to serve
 * static html pages (from old gh-pages up to 2019)
 * (in gatsby's develop mode only)
 */
exports.onCreateDevServer=({app})=>{
  app.use(express.static('public'))
}

// You can delete this file if you're not using it
exports.onCreateNode = ({ node }) => {
}