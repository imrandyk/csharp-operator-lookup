import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={`relative focus:ring-2 dark:focus:ring-black focus:ring-white rounded-sm focus:outline-none ${className}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Button
