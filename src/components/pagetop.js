// components/pagetop.js
import React, { useState, useEffect } from 'react'
import "../styles/all.scss"


const PageTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <div onClick={handleClick} id="scrollBtn" aria-label="to top">
          <p>PAGE TOP</p>
        </div>
      )}
    </div>
  )
}
export default PageTop