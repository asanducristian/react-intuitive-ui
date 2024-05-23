import { Button } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const DatePickerAdd = ({
  submitLabel,
  variant = 'contained',
  color = 'success',
  onSubmit
}) => {
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  return (
    <React.Fragment>
      <div className='flex flex__center'>
        <div className='textalign__center'>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              setDay(day + 1)
            }}
          >
            add
          </span>
          <h3 className='fontsize__m'>{('0' + day).slice(-2)}</h3>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              if (day - 1 > -1) setDay(day - 1)
            }}
          >
            remove
          </span>
        </div>
        <h3 className='fontsize__m'>-</h3>
        <div className='textalign__center'>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              setMonth(month + 1)
            }}
          >
            add
          </span>
          <h3 className='fontsize__m'>{('0' + month).slice(-2)}</h3>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              if (month - 1 > -1) setMonth(month - 1)
            }}
          >
            remove
          </span>
        </div>
        <h3 className='fontsize__m'>-</h3>
        <div className='textalign__center'>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              setYear(year + 1)
            }}
          >
            add
          </span>
          <h3 className='fontsize__m'>{('000' + year).slice(-4)}</h3>
          <span
            className='material-symbols-outlined pointer'
            onClick={() => {
              if (year - 1 > -1) setYear(year - 1)
            }}
          >
            remove
          </span>
        </div>
      </div>

      <Button
        variant={variant}
        color={color}
        className='mr__10 mb__30'
        onClick={() => {
          onSubmit(new Date(`${month}/${day}/${year}`))
        }}
      >
        {submitLabel}
      </Button>
    </React.Fragment>
  )
}

DatePickerAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string
}
