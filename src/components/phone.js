import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Phone = ( {classes, calltag, linkClasses} ) => {
  const data = useStaticQuery(graphql`
    query SitePhoneQuery {
      site {
        siteMetadata {
          phone
        }
      }
    }
  `)
  return (
    <>
      <div className={classes}>
        <a className={"block w-100 " + linkClasses} href={"tel:" + data.site.siteMetadata.phone}>
          {calltag} {data.site.siteMetadata.phone}
        </a>
      </div>
    </>
  )
}

export default Phone
