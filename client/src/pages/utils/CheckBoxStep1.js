import React, { useContext } from 'react'
// import step_1 from '../../data/step_1'
import checklists from '../../data/checklists'
import CheckBoxContext1 from '../../contexts/CheckBoxContext1'
import "../ChecklistPages/css/style4.css"

const CheckBoxStep1 = () => {
    const { Step1, setStep1 } = useContext(CheckBoxContext1)

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

    console.log(Step1)


    const renderCheckboxLists = () => checklists.step1.map((value, index) => (
      
          <div key={index} className='mb-3'>
            <input
                type="checkbox"
                className="customCheck inputParent"
                checked={Step1.indexOf(value.content) === -1 ? false : true}
                onChange={() => handleToggle(value.content)}
            />
            <label className="labelParent" htmlFor="">
                {value.content}
            </label>
          </div>
        
    ))



    return (
      <div>
        <p className="labelParent">Before you start planning your launch, you need to figure out your overall product and marketing strategy.</p>
        
        {renderCheckboxLists()}

      </div>
    )
}

export default CheckBoxStep1
