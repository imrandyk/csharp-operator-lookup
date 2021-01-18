import React, { useState } from 'react'
import Button from '../button'

const LigatureToggle = () => {
  const [toggle, set] = useState(typeof window !== `undefined` ? localStorage.ligature === 'true' : true)

  const change = () => {
    // On page load or when toggle, best to add inline in `head` to avoid FOUC
    document.querySelector('body').style.cssText = `font-variant-ligatures: ${
      !toggle ? 'common-ligatures' : 'none'
    };`
    document.querySelector(
      '#search-box'
    ).style.cssText = `font-variant-ligatures: ${
      !toggle ? 'common-ligatures' : 'none'
    };`
    localStorage.ligature = !toggle
    set(!toggle)
  }

  return (
    <Button onClick={() => change()} className="px-2">
      {`${toggle ? 'Hide' : 'Show'} Ligatures`}
    </Button>
  )
}

LigatureToggle.propTypes = {}

LigatureToggle.defaultProps = {}

export default LigatureToggle
