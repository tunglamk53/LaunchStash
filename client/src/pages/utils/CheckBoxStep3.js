import React, { useContext } from 'react'
import checklists from '../../data/checklists'
import CheckBoxContext3 from '../../contexts/CheckBoxContext3'
import "../ChecklistPages/css/style4.css"


const CheckBoxStep3 = () => {
    const { Step3, setStep3 } = useContext(CheckBoxContext3)

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

    const renderCheckboxLists = () => checklists.step3.map((value, index) => (

      <div key={index} className='mb-3'>
        <input
            type="checkbox"
            className="customCheck inputParent"
            checked={Step3.indexOf(value.content) === -1 ? false : true}
            onChange={() => handleToggle(value.content)}
        />
        <label className="labelParent" htmlFor="">
            {value.content}
        </label>
      </div>

    ))



    return (
      <div>
        <p className="labelParent">If you have the extra time and resources, you can start marketing your product way before you’ve even launched. Usually, this involves the following.</p>
        {renderCheckboxLists()}
      </div>
    )
}

export default CheckBoxStep3
