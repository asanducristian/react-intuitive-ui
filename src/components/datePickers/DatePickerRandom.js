import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { getFormattedBirthdate, getRandomArbitrary } from '../../utils/utils'

export const DatePickerRandom = ({
  selectLabel,
  resetLabel,
  selectVariant = 'contained',
  selectColor = 'success',
  resetVariant = 'contained',
  resetColor = 'success',
  questionLabel = 'Is this your birthdate?',
  onSubmit
}) => {
  const [birthdate, setBirthdate] = useState(new Date())

  useEffect(() => {
    getRandomDate()
  }, [])

  const getRandomDate = () => {
    const currentDate = new Date()
    const startDate = new Date('01/01/1900')
    const birthdateTmp = new Date(
      getRandomArbitrary(startDate.getTime(), currentDate.getTime())
    )
    setBirthdate(birthdateTmp)
  }

  return (
    <React.Fragment>
      <div className='fontsize__m flex_center language_container mt__30'>
        <div className='mr__30'>{questionLabel}</div>
        <h3 className=''>{getFormattedBirthdate(birthdate)}</h3>
      </div>

      <div className='fontsize__m flex_center language_container'>
        <Button
          variant={resetVariant}
          color={resetColor}
          className='mr__10'
          onClick={getRandomDate}
        >
          {resetLabel}
        </Button>
        <Button
          variant={selectVariant}
          color={selectColor}
          className='mr__10'
          onClick={() => {
            onSubmit(birthdate)
          }}
        >
          {selectLabel}
        </Button>
      </div>
    </React.Fragment>
  )
}

DatePickerRandom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  questionLabel: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  selectVariant: PropTypes.string,
  selectColor: PropTypes.string,
  resetVariant: PropTypes.string,
  resetColor: PropTypes.string
}
