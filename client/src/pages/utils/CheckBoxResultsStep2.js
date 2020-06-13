import React, { useContext } from 'react'
import CheckBoxContext from '../../contexts/CheckBoxContext'


const CheckBoxResultsStep2 = () => {
  const { Step2 } = useContext(CheckBoxContext)

  return (
    Step2.map((value, index) => (
      <div key={index}>
        <p>{value}</p>
      </div>
    ))
  )
}

export default CheckBoxResultsStep2
