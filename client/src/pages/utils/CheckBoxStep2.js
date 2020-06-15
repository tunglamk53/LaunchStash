import React, { useContext } from 'react'
import step_2 from '../../data/step_2'
import CheckBoxContext2 from '../../contexts/CheckBoxContext2'

const CheckBoxStep2 = () => {
    const { Step2, setStep2 } = useContext(CheckBoxContext2)

    const handleToggle = (value) => {

        const currentIndex = Step2.indexOf(value);
        const newChecked = [...Step2];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setStep2(newChecked)
        //update this checked information into Parent Component
    }

    const renderCheckboxLists = () => step_2.map((value, index) => (
      <div key={index} className='ml-2'>
        <input
            type="checkbox"
            className="form-check-input"
            checked={Step2.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="form-check-label text-secondary" htmlFor="">
            {value.content}
        </label>
      </div>
    ))



    return (
      <div>
        <p className="text-secondary">Time to get things rolling. The next step is to create a website and create a foundation for your marketing.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep2
