import React from 'react'

const Footer = () => (
  <footer className="mx-6 pt-6 lg:max-w-5xl lg:mx-auto dark:text-white text-black">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
