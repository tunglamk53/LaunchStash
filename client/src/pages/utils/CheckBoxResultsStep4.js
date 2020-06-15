import React, { useContext } from 'react'
import CheckBoxContext4 from '../../contexts/CheckBoxContext4'


const CheckBoxResultsStep4 = () => {
  const { Step4 } = useContext(CheckBoxContext4)

  return (
    <>
    <ol>
    {Step4.map((value, index) => (
        <li key={index}>{value}</li>
    ))}
    </ol>
    </>
  )
}

export default CheckBoxResultsStep4
