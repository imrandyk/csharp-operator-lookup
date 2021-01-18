import PropTypes from 'prop-types'
import React from 'react'

const DocAndPlay = ({ docs, repl }) => {
  const className =
    'mt-6 p-3 rounded-md shadow-inner dark:bg-gray-800 bg-gray-100 grid grid-cols-1'
  if (docs && repl) {
    return (
      <div className={`${className} lg:grid-cols-2`}>
        <div className="lg:text-left text-center">
          Read the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="dark:text-primary-500 text-primary-700 underline"
            href={docs}
          >
            docs
          </a>
        </div>
        <div className="lg:text-right text-center">
          Play with the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="dark:text-primary-500 text-primary-700 underline"
            href={repl}
          >
            Repl
          </a>
        </div>
      </div>
    )
  }
  if (docs) {
    return (
      <div className={`${className}`}>
        <div className="text-center">
          Read the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="dark:text-primary-500 text-primary-700 underline"
            href={docs}
          >
            docs
          </a>
        </div>
      </div>
    )
  }
  return <></>
}

DocAndPlay.propTypes = {
  docs: PropTypes.string,
  repl: PropTypes.string,
}

DocAndPlay.defaultProps = {
  docs: '',
  repl: '',
}

export default DocAndPlay
