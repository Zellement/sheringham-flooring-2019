import React from "react"
import { Link } from "gatsby"

const Nav = class extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (
      <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
        <div className={`navigation-wrapper navigation-wrapper--${menuActive}`} >
          <ul className="md:bg-red lg:flex lg:w-full lg:flex-row lg:justify-between lg:items-stretch">
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/">Home</Link>
            </li>
            <li className="relative">
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/carpets/" getProps={({ isPartiallyCurrent }) => { return isPartiallyCurrent ? { className: "navigation-wrapper__link is-active" }  : null }}>Carpets</Link>
              <ul className="subnav">
                <li>
                  <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/carpets/carpet-fitting">Carpet Fitting</Link>
                </li>
                <li>
                  <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/carpets/underlays">Underlays</Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/vinyl-flooring/" getProps={({ isPartiallyCurrent }) => { return isPartiallyCurrent ? { className: "navigation-wrapper__link is-active" }  : null }}>Vinyl</Link>
              <ul className="subnav">
                <li>
                  <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/vinyl-flooring/vinyl-cushion-flooring">Vinyl Cushion Flooring
</Link>
                </li>
                <li>
                  <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/vinyl-flooring/luxury-vinyl-tiles">Luxury Vinyl Tiles</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/laminate-flooring/">Laminate</Link>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/wood-flooring/">Wood</Link>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/wetroom-flooring/">Wetroom</Link>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/commercial-flooring/">Commercial</Link>
            </li>
            {/* <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/hints-tips/">Hints &amp; Tips</Link>
            </li> */}
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/about-us/">About Us</Link>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/areas-we-cover/">Areas We Cover</Link>
            </li>
            <li>
              <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/contact-us/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div role="button" tabIndex="0" className={`${burgerActive} navigation-button`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
          <div className={`navigation-button__inside ${burgerActive}`}>
            <span className="navigation-button__lines navigation-button__line-1 left-0"></span>
            <span className="navigation-button__lines navigation-button__line-2 left-0 mt-2"></span>
            <span className="navigation-button__lines navigation-button__line-3 left-0 mt-4"></span>
            <span className="navigation-button__lines navigation-button__line-4 right-0"></span>
            <span className="navigation-button__lines navigation-button__line-5 right-0 mt-2"></span>
            <span className="navigation-button__lines navigation-button__line-6 right-0 mt-4"></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav