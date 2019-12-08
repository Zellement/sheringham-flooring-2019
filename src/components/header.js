import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Logo from '../components/logo'
import Phone from '../components/phone'
import { FaPhone } from "react-icons/fa";

const Header = () => (
  <header className="py-2 pl-2 md:py-8">
    
    <div className="container">
      <div className="flex flex-col md:flex-row items-start mb-4 justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="text-center flex md:text-right self-center pt-4 md:p-0">
          <div className="md:pr-4 text-blue-mid">
            <span className="block sm:inline md:block">Open Monday - Friday 09:00 - 17:00</span>
            &nbsp;Call for a <span className="font-bold">free</span> estimate
          </div>
          <Phone classes="hidden md:block bg-blue-dark rounded-lg" calltag={<FaPhone className="inline" />} linkClasses="text-xl text-white px-4 py-2" />
        </div>
      </div>

      <Nav />

    </div>
  </header>
)

export default Header
