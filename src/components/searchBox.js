/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useThrottle } from 'use-throttle'

import Logo from './logo'
import Icon from './icon'

const SearchBox = ({ selectedOperator }) => {
  const queryData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            operator
          }
        }
      }
    }
  `)
  const { nodes: data } = queryData?.allMarkdownRemark

  const validKeys = [
    'Backspace',
    'Tab',
    'Delete',
    '+',
    '-',
    '=',
    '?',
    '<',
    '>',
    '.',
    '&',
    '^',
    '%',
    '|',
    '[',
    ']',
    'n',
  ]

  const [enteredValue, setEnteredValue] = useState(selectedOperator)
  const throttledText = useThrottle(enteredValue, 1500)
  const match = data?.filter(x => x?.frontmatter?.operator === throttledText)[0]
  const canNavigate = match && match?.frontmatter?.operator !== selectedOperator

  if (canNavigate) {
    navigate(match?.fields?.slug)
  }

  return (
    <>
      <p className="text-center pb-3 text-lg">
        Enter a{' '}
        <span className="dark:text-primary-500 text-primary-700">
          <Logo size="32px" />
        </span>{' '}
        operator to learn more about it:
      </p>
      <div className="relative flex items-center transition-transform ease-out duration-75 transform origin-center focus-within:scale-110 w-8/12 mx-auto">
        <Icon
          icon="search"
          className="w-6 h-6 absolute left-0 dark:text-primary-500 text-primary-700 ml-2"
        />
        <label className="sr-only" htmlFor="search-box">
          Search for an operator
        </label>
        <input
          type="text"
          id="search-box"
          name="search-box"
          className="w-full py-3 text-center font-mono rounded-full dark:bg-gray-800 bg-gray-100 border dark:border-primary-400 border-primary-600 dark:text-primary-500 text-primary-700 shadow-none transition-shadow ease-out duration-75 focus:shadow-xl focus:outline-none"
          onKeyDown={e => {
            if (!validKeys.includes(e.key)) {
              e.preventDefault()
            }
          }}
          onChange={({ currentTarget }) => setEnteredValue(currentTarget.value)}
          value={enteredValue}
        />
      </div>
    </>
  )
}

SearchBox.propTypes = {
  selectedOperator: PropTypes.string,
}

export default SearchBox
