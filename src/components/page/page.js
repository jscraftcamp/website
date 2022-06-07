import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import Spacer from "../spacer"

// global style
import "./main.css"

// stripped down, minimal global imports
// mostly html default styling
import "./materialcss-global.scss"

// page component styles
import style from "./page.module.scss"

const Page = ({ children, title }) => {
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
        <Spacer size="s" />
        <Header />
        <Spacer size="xs" />
        <div className={style.content}>{children}</div>
        <Spacer size="xxl" />
        <Footer />
      </div>
    </>
  )
}
export default Page
