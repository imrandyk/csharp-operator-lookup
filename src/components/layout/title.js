import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../logo'

const Title = ({ siteTitle }) => (
  <div className="flex items-center">
    <Logo size="50px" />
    <h1 className="text-2xl font-semibold tracking-tight pl-1">
      {siteTitle.split('C#').join('')}
    </h1>
  </div>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title
