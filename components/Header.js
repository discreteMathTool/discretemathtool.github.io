import React from 'react'
import { Link } from 'react-router'

export default function Header () {
  return (
    <header id="header">
      <nav className="menu">
        <ul>
          <li><Link to="/"><img src="/images/leti.png" className="logo" alt="ЛЭТИ" title="Home" /></Link></li>
          <li><Link to="/about">О проекте</Link></li>
        </ul>
      </nav>
    </header>
  )
}