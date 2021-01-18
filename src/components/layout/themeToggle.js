import React, { useState } from 'react'
import { useTransition } from 'react-spring'
import Button from '../button'
import Icon from '../icon'

const ThemeToggle = () => {
  const [toggle, set] = useState(localStorage.theme !== 'light')
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', top: 0, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const change = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (toggle) {
      document.querySelector('html').classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.querySelector('html').classList.add('dark')
      localStorage.theme = 'dark'
    }
    set(!toggle)
  }

  return (
    <Button
      className="w-7 h-7"
      onClick={() => change()}
      aria-label={`Activate ${toggle ? 'Dark' : 'Light'} Mode`}
    >
      {transitions.map(({ item, key, props }) =>
        item ? (
          <Icon icon="sun" key={key} style={props} className="w-7 h-7" />
        ) : (
          <Icon icon="moon" key={key} style={props} className="w-7 h-7" />
        )
      )}
    </Button>
  )
}

ThemeToggle.propTypes = {}

ThemeToggle.defaultProps = {}

export default ThemeToggle
