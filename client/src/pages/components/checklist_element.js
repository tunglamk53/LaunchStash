import React, {useEffect, useState} from "react";

const ChecklistElement = (props) => {
    const [checked, setChecked] = useState(false)

    const handleClick = (e) => {
        // console.log(props.content)

        setChecked(!checked)
        // setChecked(e.target.checked)
        // setChecked(true)
        if(checked === true) {
            // props.setChecklist1(...props.checklist1, props.content)
            props.setChecklist1([...props.checklist1, props.content])
        } else {
            // const index = props.checklist1.indexOf(props.content)
            // if(index && index > -1)
            //     props.checklist1.splice(index, 1)
            // props.setChecklist1(props.checklist1)
            props.setChecklist1(props.checklist1.filter(element => (
                element !== props.content
            )))
        }
    }

    useEffect(() => {
        console.log(checked)
    })

    return (
        <li className="list-group-item">
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id=""
                    checked={checked}
                    // onClick={handleClick}
                    onChange={handleClick}
                />
                <label className="form-check-label" htmlFor="">
                    {props.content}
                </label>
            </div>
        </li>
    )
}

export default ChecklistElement