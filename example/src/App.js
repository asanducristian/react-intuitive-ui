import React from 'react'

import { DatePickerAdd } from 'react-intuitive-ui'
import 'react-intuitive-ui/dist/index.css'

const App = () => {
  return <DatePickerAdd submitLabel="TEST" onSubmit={()=>{console.log("submit")}} />
}

export default App
