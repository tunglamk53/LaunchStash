import React, { useContext } from 'react'
import CheckBoxContext2 from '../../contexts/CheckBoxContext2'


const CheckBoxResultsStep2 = () => {
  const { Step2 } = useContext(CheckBoxContext2)

  return (
    <>
    <ol>
    {Step2.map((value, index) => (
        <li key={index} className='text-secondary'>{value}</li>
    ))}
    </ol>
    </>
  )
}

export default CheckBoxResultsStep2
