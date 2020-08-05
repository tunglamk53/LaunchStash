import React, { useContext } from 'react'
import checklists from '../../data/checklists'
import CheckBoxContext4 from '../../contexts/CheckBoxContext4'
import "../ChecklistPages/css/style4.css"


const CheckBoxStep4 = () => {
    const { Step4, setStep4 } = useContext(CheckBoxContext4)

    const handleToggle = (value) => {

        const currentIndex = Step4.indexOf(value);
        const newChecked = [...Step4];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setStep4(newChecked)
        //update this checked information into Parent Component
    }

    const renderCheckboxLists = () => checklists.step4.map((value, index) => (

      <div key={index} className='mb-3'>
        <input
            type="checkbox"
            className="customCheck inputParent"
            checked={Step4.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="labelParent" htmlFor="">
            {value.content}
        </label>
      </div>

    ))



    return (
      <div>
        <p className="labelParent">Once you have an MVP, you want to validate 2 things: that your product works, and that it can drive conversions (and hence, revenue). Here’s how to do it lean.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep4
