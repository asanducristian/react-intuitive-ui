import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { timeout } from '../../utils/utils'
import PropTypes from 'prop-types'
import '../styles/bubble-button.scss'

export const BubbleButton = ({
  label,
  firstColor = 'red',
  secondColor = 'green'
}) => {
  const buttonRef = useRef(null)
  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = async () => {
    while (true) {
      if (!buttonRef.current.className.includes('animationMove')) {
        buttonRef.current.className += ' animationMove'
      } else {
        const lastIndex = buttonRef.current.className.lastIndexOf(' ')
        buttonRef.current.className = buttonRef.current.className.substring(
          0,
          lastIndex
        )
      }
      await timeout(700)
    }
  }

  return (
    <Button ref={buttonRef} className='bubbleButton'>
      {label}
    </Button>
  )
}

BubbleButton.propTypes = {
  label: PropTypes.string.isRequired,
  firstColor: PropTypes.string,
  secondColor: PropTypes.string
}
