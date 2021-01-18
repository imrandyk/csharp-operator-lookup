import PropTypes from 'prop-types'
import React from 'react'
import Icon from './icon'

const Logo = ({ size }) => (
  <Icon
    icon="logo"
    width={size}
    height={size}
    className="transform -rotate-12 fill-current inline-block"
  />
)

Logo.propTypes = {
  size: PropTypes.string,
}

Logo.defaultProps = {
  size: ``,
}

export default Logo
