import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Slider } from '@mui/material'
import { getFormattedBirthdate } from '../../utils/utils'

export const DatePickerSlider = ({
  submitLabel,
  variant = 'contained',
  color = 'success',
  onSubmit
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const start = -2208995064000

  return (
    <React.Fragment>
      <h3 className='fontsize__m mt__30'>
        {getFormattedBirthdate(selectedDate)}
      </h3>

      <Slider
        className='birthday_slider'
        defaultValue={start}
        min={start}
        max={new Date().getTime()}
        onChange={(event, value) => {
          setSelectedDate(new Date(value))
        }}
      />

      <Button
        variant={variant}
        color={color}
        className='mr__10 mb__30'
        onClick={() => {
          onSubmit(selectedDate)
        }}
      >
        {submitLabel}
      </Button>
    </React.Fragment>
  )
}

DatePickerSlider.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string
}
