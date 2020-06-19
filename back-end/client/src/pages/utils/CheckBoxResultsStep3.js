import React, { useContext } from 'react'
import CheckBoxContext3 from '../../contexts/CheckBoxContext3'


const CheckBoxResultsStep3 = () => {
  const { Step3 } = useContext(CheckBoxContext3)

  return (
    <>
    <ol>
    {Step3.map((value, index) => (
        <li key={index} className='text-secondary'>{value}</li>
    ))}
    </ol>
    </>
  )
}

export default CheckBoxResultsStep3
