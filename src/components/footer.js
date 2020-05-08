import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Phone from "../components/phone"
import Social from "../components/social"

const Footer = () => {

  const getDate = new Date()
  const getYear = getDate.getFullYear()

  const data = useStaticQuery(graphql`
    query CompanyNameQuery {
      site {
        siteMetadata {
          title
          mobile
          phone
          address
          email
        }
      }
    }
  `)
  return (
    <>
      <footer className="p-10 pb-20 mt-6 bg-blue-dark text-blue-mid md:py-16">

        <div className="container">
          <Social />

          <p className="mb-4">
            <a rel="nofollow, noindex" className="text-blue-mid" href={"tel:" + data.site.siteMetadata.phone}>T: {data.site.siteMetadata.phone}</a><br />
            <a rel="nofollow, noindex" className="text-blue-mid" href={"tel:" + data.site.siteMetadata.mobile}>M: {data.site.siteMetadata.mobile}</a>
          </p>

          <p className="mb-4">A: {data.site.siteMetadata.address}</p>

          <p className="mb-4">E: <a href={"mailto:" + data.site.siteMetadata.email} rel="nofollow, noindex">{data.site.siteMetadata.email}</a></p>

          <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {getYear + " " + data.site.siteMetadata.title}</p>

        </div>

        <p><a href="https://www.zellement.com">Web Design by Zellement</a></p>

      </footer>

      <Phone
        classes="bg-blue-dark fixed bottom-0 left-0 w-full text-center lg:hidden"
        calltag="Call us today on"
        linkClasses="block text-xl text-white py-2"
      />
    </>
  )
}

export default Footer
