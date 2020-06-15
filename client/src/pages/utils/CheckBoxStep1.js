import React, { useContext } from 'react'
import step_1 from '../../data/step_1'
import CheckBoxContext1 from '../../contexts/CheckBoxContext1'

const CheckBoxStep1 = () => {
    const { Step1, setStep1 } = useContext(CheckBoxContext1)
    console.log(step_1)

    const handleToggle = (value) => {

        const currentIndex = Step1.indexOf(value);
        const newChecked = [...Step1];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setStep1(newChecked)
        //update this checked information into Parent Component
    }

    console.log(JSON.stringify(Step1))


    const renderCheckboxLists = () => step_1.map((value, index) => (
      <div key={index} className='ml-2'>
        <input
            type="checkbox"
            className="form-check-input"
            checked={Step1.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="form-check-label" htmlFor="">
            {value.content}
        </label>
      </div>
    ))



    return (
      <div>
        <p>Before you start planning your launch, you need to figure out your overall product and marketing strategy.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep1
