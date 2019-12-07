import React from "react"
import { Link } from "gatsby"
//import { GoLinkExternal } from 'react-icons/go';

const Nav = class extends React.Component {

  state = { showMenu : false }

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
        <ul className="md:bg-red md:flex md:w-full md:flex-row md:justify-start md:items-stretch">
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/">Home</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/carpets/">Carpets</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/carpets/carpet-fitting">Carpet Fitting</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/vinyl-flooring/">Vinyl</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/laminate-flooring/">Laminate</Link>
          </li>
          <li>
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/wood-flooring/">Wood</Link>
          </li>
        </ul>
      </div>
      <div className={`${burgerActive} navigation-button`} onClick={this.toggleMenu}>
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
  )}
}

export default Nav