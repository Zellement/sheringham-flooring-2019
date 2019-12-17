import React from "react"
// import { Link } from "gatsby"
// import Nav from '../components/nav'
// import Logo from '../components/logo'
import Phone from '../components/phone'

const Header = () => (
  <footer className="py-2 pl-2 pb-20 md:py-16">

    <Phone classes="bg-blue-dark fixed bottom-0 left-0 w-full text-center lg:hidden" calltag="Call us today on" linkClasses="block text-xl text-white py-2" />

  </footer>
)

export default Header
