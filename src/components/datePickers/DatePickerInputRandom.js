import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'
import PropTypes from 'prop-types'
import { shuffle } from '../../utils/utils'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  border: '0px solid #000',
  boxShadow: 24,
  outline: 0
}

export const DatePickerInputRandom = ({
  selectLabel,
  resetLabel,
  selectVariant = 'contained',
  selectColor = 'success',
  resetVariant = 'contained',
  resetColor = 'success',
  onSubmit
}) => {
  const [openModal, setOpenModal] = useState(false)

  const [day1, setDay1] = useState(0)
  const [day2, setDay2] = useState(0)
  const [month1, setMonth1] = useState(0)
  const [month2, setMonth2] = useState(0)
  const [year1, setYear1] = useState(0)
  const [year2, setYear2] = useState(0)
  const [year3, setYear3] = useState(0)
  const [year4, setYear4] = useState(0)

  const [digits, setDigits] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  const [selectedElement, setSelectedElement] = useState(-1)

  const textFieldClicked = (element) => {
    setOpenModal(true)
    setSelectedElement(element)
  }

  const digitSelected = (digit) => {
    switch (selectedElement) {
      case 0:
        setYear3(digit)
        break
      case 1:
        setMonth2(digit)
        break
      case 2:
        setDay2(digit)
        break
      case 3:
        setYear4(digit)
        break
      case 4:
        setDay1(digit)
        break
      case 5:
        setMonth1(digit)
        break
      case 6:
        setYear2(digit)
        break
      case 7:
        setYear1(digit)
        break
      default:
        break
    }
    setOpenModal(false)
    setDigits(shuffle(digits))
  }

  return (
    <React.Fragment>
      <div className='mt__30'>FORMAT: Y3M2.D2Y4.D1M1Y2Y1</div>
      <div className='fontsize__m flex_center  mb__30 language_container'>
        <div
          onClick={() => {
            textFieldClicked(0)
          }}
          className='birthdate_digit fontsize__s'
        >
          {year3}
        </div>
        <div
          onClick={() => {
            textFieldClicked(1)
          }}
          className='birthdate_digit fontsize__s'
        >
          {month2}
        </div>
        .
        <div
          onClick={() => {
            textFieldClicked(2)
          }}
          className='birthdate_digit fontsize__s'
        >
          {day2}
        </div>
        <div
          onClick={() => {
            textFieldClicked(3)
          }}
          className='birthdate_digit fontsize__s'
        >
          {year4}
        </div>
        .
        <div
          onClick={() => {
            textFieldClicked(4)
          }}
          className='birthdate_digit fontsize__s'
        >
          {day1}
        </div>
        <div
          onClick={() => {
            textFieldClicked(5)
          }}
          className='birthdate_digit fontsize__s'
        >
          {month1}
        </div>
        <div
          onClick={() => {
            textFieldClicked(6)
          }}
          className='birthdate_digit fontsize__s'
        >
          {year2}
        </div>
        <div
          onClick={() => {
            textFieldClicked(7)
          }}
          className='birthdate_digit fontsize__s'
        >
          {year1}
        </div>
      </div>
      <div className='fontsize__m flex_center language_container'>
        <Button
          variant={resetVariant}
          color={resetColor}
          className='mr__10'
          onClick={() => {
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
          color={selectColor}
          className='mr__10'
          onClick={() => {
            onSubmit(
              new Date(
                `${month1}${month2}/${day1}${day2}/${year1}${year2}${year3}${year4}`
              )
            )
          }}
        >
          {selectLabel}
        </Button>
      </div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false)
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box style={style}>
          <div className='padding__10 fontsize__m flex_center language_container'>
            <div
              onClick={() => {
                digitSelected(digits[0])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[0]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[1])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[1]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[2])
              }}
              className='input_digit filler flex_center_all'
            >
              {digits[2]}
            </div>
          </div>
          <div className='padding__10 fontsize__m flex_center language_container'>
            <div
              onClick={() => {
                digitSelected(digits[3])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[3]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[4])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[4]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[5])
              }}
              className='input_digit filler flex_center_all'
            >
              {digits[5]}
            </div>
          </div>
          <div className='padding__10 fontsize__m flex_center language_container'>
            <div
              onClick={() => {
                digitSelected(digits[6])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[6]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[7])
              }}
              className='input_digit filler flex_center_all mr__20'
            >
              {digits[7]}
            </div>
            <div
              onClick={() => {
                digitSelected(digits[8])
              }}
              className='input_digit filler flex_center_all'
            >
              {digits[8]}
            </div>
          </div>
          <div className='padding__10 fontsize__m flex_center language_container'>
            <div className='filler flex_center_all mr__20' />
            <div
              onClick={() => {
                digitSelected(digits[9])
              }}
              className='input_digit filler flex_center_all filler mr__20'
            >
              {digits[9]}
            </div>
            <div className='filler flex_center_all' />
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

DatePickerInputRandom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  selectLabel: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  selectVariant: PropTypes.string,
  selectColor: PropTypes.string,
  resetVariant: PropTypes.string,
  resetColor: PropTypes.string
}
