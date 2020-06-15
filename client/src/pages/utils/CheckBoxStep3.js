import React, { useContext } from 'react'
import step_3 from '../../data/step_3'
import CheckBoxContext3 from '../../contexts/CheckBoxContext3'

const CheckBoxStep3 = () => {
    const { Step3, setStep3 } = useContext(CheckBoxContext3)
    console.log(step_3)

    const handleToggle = (value) => {

        const currentIndex = Step3.indexOf(value);
        const newChecked = [...Step3];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setStep3(newChecked)
        //update this checked information into Parent Component
    }

    const renderCheckboxLists = () => step_3.map((value, index) => (
      <div key={index} className='ml-2'>
        <input
            type="checkbox"
            className="form-check-input"
            checked={Step3.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="form-check-label text-secondary" htmlFor="">
            {value.content}
        </label>
      </div>
    ))



    return (
      <div>
        <p className="text-secondary">If you have the extra time and resources, you can start marketing your product way before you’ve even launched. Usually, this involves the following.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep3
