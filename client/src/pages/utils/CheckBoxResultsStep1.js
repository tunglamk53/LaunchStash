import React, { useContext } from 'react'
import CheckBoxContext1 from '../../contexts/CheckBoxContext1'

const CheckBoxResultsStep1 = () => {
  const { Step1 } = useContext(CheckBoxContext1)

  return (
    <>
    <ol>
    {Step1.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ol>
    </>
  )
}

export default CheckBoxResultsStep1
