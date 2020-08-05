import React, { useContext } from 'react'
// import step_2 from '../../data/step_2'
import checklists from '../../data/checklists'
import CheckBoxContext2 from '../../contexts/CheckBoxContext2'
import "../ChecklistPages/css/style4.css"


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

    const renderCheckboxLists = () => checklists.step2.map((value, index) => (

      <div key={index} className='mb-3'>
        <input
            type="checkbox"
            className="customCheck inputParent"
            checked={Step2.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="labelParent" htmlFor="">
            {value.content}
        </label>
      </div>

    ))



    return (
      <div>
        <p className="labelParent">Time to get things rolling. The next step is to create a website and create a foundation for your marketing.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep2
