import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
import Logo from '../components/logo'

const Header = ({ siteTitle }) => (
  <header className="py-2 pl-2 md:py-16">
    
    <div className="container">
      <div className="flex flex-wrap items-start mb-4">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <Nav />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
