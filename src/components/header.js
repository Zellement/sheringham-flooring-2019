import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from '../components/nav'
import Logo from '../components/logo'

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16">
    
    <div className="container">
      <div className="flex flex-wrap items-center mb-4">
        <Link className="font-bold block text-lg md:text-xl inline-block" to="/">
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
