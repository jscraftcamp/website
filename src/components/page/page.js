import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import style from "./page.module.scss"

export default ({ header, footer, children, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: site.siteMetadata.description,
          },
        ].concat()}
      />
      <div className={style.root}>
        {header || null}
        <div className={style.main}>{children}</div>
        {footer || null}
      </div>
    </>
  )
}
