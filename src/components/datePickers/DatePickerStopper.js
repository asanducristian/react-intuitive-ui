import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { timeout } from '../../utils/utils'
import PropTypes from 'prop-types'

export const DatePickerStopper = ({
  selectLabel,
  resetLabel,
  selectVariant = 'contained',
  selectColor = 'success',
  resetVariant = 'contained',
  resetColor = 'success',
  submitLabel,
  submitVariant = 'contained',
  submitColor = 'success',
  onSubmit
}) => {
  const [day1, setDay1] = useState(0)
  const [day2, setDay2] = useState(0)
  const [month1, setMonth1] = useState(0)
  const [month2, setMonth2] = useState(0)
  const [year1, setYear1] = useState(0)
  const [year2, setYear2] = useState(0)
  const [year3, setYear3] = useState(0)
  const [year4, setYear4] = useState(0)
  const [position, setPosition] = useState(0)

  const startSetDay1 = () => {
    setDay1((day1 + 1) % 10)
  }
  const startSetDay2 = () => {
    setDay2((day2 + 1) % 10)
  }
  const startSetMonth1 = () => {
    setMonth1((month1 + 1) % 10)
  }
  const startSetMonth2 = () => {
    setMonth2((month2 + 1) % 10)
  }
  const startSetYear1 = () => {
    setYear1((year1 + 1) % 10)
  }
  const startSetYear2 = () => {
    setYear2((year2 + 1) % 10)
  }
  const startSetYear3 = () => {
    setYear3((year3 + 1) % 10)
  }
  const startSetYear4 = () => {
    setYear4((year4 + 1) % 10)
  }
  const startCount = async () => {
    await timeout(200)
    switch (position) {
      case 0:
        startSetDay1()
        break
      case 1:
        startSetDay2()
        break
      case 2:
        startSetMonth1()
        break
      case 3:
        startSetMonth2()
        break
      case 4:
        startSetYear1()
        break
      case 5:
        startSetYear2()
        break
      case 6:
        startSetYear3()
        break
      case 7:
        startSetYear4()
        break
      default:
        break
    }
  }
  useEffect(() => {
    startCount()
  }, [day1, day2, month1, month2, year1, year2, year3, year4])

  return (
    <React.Fragment>
      <h3 className='fontsize__m mt__30'>{`${day1}${day2}.${month1}${month2}.${year1}${year2}${year3}${year4}`}</h3>
      <div className='fontsize__m flex_center language_container'>
        <Button
          variant={resetVariant}
          color={resetColor}
          className='mr__10'
          onClick={async () => {
            setPosition(0)
            await timeout(100)
            setDay1(0)
            setDay2(0)
            setMonth1(0)
            setMonth2(0)
            setYear1(0)
            setYear2(0)
            setYear3(0)
            setYear4(0)
          }}
        >
          {resetLabel}
        </Button>
        <Button
          variant={selectVariant}
          className='mr__10'
          color={selectColor}
          onClick={() => {
            setPosition(position + 1)
          }}
        >
          {selectLabel}
        </Button>
        <Button
          variant={submitVariant}
          color={submitColor}
          className='mr__10'
          onClick={() => {
            onSubmit(
              new Date(
                `${month1}${month2}/${day1}${day2}/${year1}${year2}${year3}${year4}`
              )
            )
          }}
        >
          {submitLabel}
        </Button>
      </div>
    </React.Fragment>
  )
}

DatePickerStopper.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  selectVariant: PropTypes.string,
  selectColor: PropTypes.string,
  resetVariant: PropTypes.string,
  resetColor: PropTypes.string,
  submitVariant: PropTypes.string,
  submitColor: PropTypes.string
}
