import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Email = ( {classes, calltag, linkClasses} ) => {
  const data = useStaticQuery(graphql`
    query SiteEmailQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  return (
    <>
      <div className={classes}>
        <a className={"block w-100 " + linkClasses} href={"mailto:" + data.site.siteMetadata.email}>
          {calltag} {data.site.siteMetadata.email}
        </a>
      </div>
    </>
  )
}

export default Email
