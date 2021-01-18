import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import React from 'react'
import Title from './title'
import ThemeToggle from './themeToggle'
import LigatureToggle from './ligatureToggle'

const Header = ({ siteTitle }) => (
  <nav className="dark:bg-primary-500 bg-primary-700 py-6 relative z-10">
    <header className="flex items-center justify-between px-6 lg:max-w-5xl mx-auto dark:text-black text-white">
      <Link to="/">
        <Title siteTitle={siteTitle} />
      </Link>
      <div className="flex gap-3">
        <LigatureToggle />
        <ThemeToggle />
      </div>
    </header>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
