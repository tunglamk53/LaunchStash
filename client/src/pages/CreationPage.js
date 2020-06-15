import React, { useEffect, useState, useContext } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import CheckBoxes from './utils/CheckBoxes'
import CheckBoxResults from './utils/CheckBoxResults'
import CheckBoxContext1 from '../contexts/CheckBoxContext1'
import CheckBoxContext2 from '../contexts/CheckBoxContext2'
import CheckBoxContext3 from '../contexts/CheckBoxContext3'
import CheckBoxContext4 from '../contexts/CheckBoxContext4'
import {Link} from "react-router-dom";

const CreationPage = () => {
    const { Step1, setStep1 } = useContext(CheckBoxContext1)
    const { Step2, setStep2 } = useContext(CheckBoxContext2)
    const { Step3, setStep3 } = useContext(CheckBoxContext3)
    const { Step4, setStep4 } = useContext(CheckBoxContext4)

    const [ checklistName, setChecklistName ] = useState('')
    const [ isSuccess, setIsSuccess ] = useState(false)

    const email = localStorage.getItem('myEmail')

    const onSaveCheckLists = event => {
        event.preventDefault()
        // const step2 = JSON.stringify(Checked);
        const step1 = Step1
        const step2 = Step2
        const step3 = Step3
        const step4 = Step4
        const name = checklistName
        // console.log(step2)

        if (checklistName === '')
            alert('Checklist Name could not be blank!')
        else {
            fetch(`/user/checklists`, {
                method: 'PUT',
                body: JSON.stringify({
                    email,
                    name,
                    step1,
                    step2,
                    step3,
                    step4
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'token-backend': localStorage.getItem('myToken')
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSuccess(data.isSuccess)
                })
        }
    }

    useEffect(() => {
        setStep1([])
        setStep2([])
        setStep3([])
        setStep4([])
    }, [setIsSuccess])

    if(isSuccess === false) {
        return (
            <>
            <div className="create-checklist-wrapper">
            <div className="create-checklist-inner">
              <h1 className='text-lg-center text-secondary text-uppercase'>Create your Checklist</h1>
              <h5 className='text-secondary'>(Please use this section to Add your Checklists)</h5>
                <br/>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='text-secondary'>
                            CHECKLIST NAME:
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className='text-danger' onChange={(e) => setChecklistName(e.target.value)}/>
                </InputGroup>

                <CheckBoxes />

            </div>
            </div>

            <div className="create-checklist-wrapper mt-5 mb-5">
            <div className="create-checklist-inner">
              <h3 className='text-lg-center text-secondary text-uppercase'>Result:</h3>
                <h5 className='text-secondary'>(Please expand Steps below to see more info)</h5>
                <br/>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='text-secondary'>
                            CHECKLIST NAME:
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className='text-danger' disabled value={checklistName}/>
                </InputGroup>
                <CheckBoxResults />

                <Button type="button" className="btn btn-danger btn-lg float-right mt-4" onClick={onSaveCheckLists}>
                    SAVE CHECKLIST !
                </Button>
            </div>
            </div>
            </>
        )



    } else {
        return (
            <>
            <div className="create-checklist-wrapper">
              <div className="create-checklist-inner">
                <h3 className='text-lg-center text-secondary text-uppercase'>Checklist is Successfully Saved !!!</h3>
                <CheckBoxResults />
                <br/>
                  <Link className='btn btn-danger btn-lg float-right mt-4' to={"/"}>CREATE ANOTHER CHECKLIST</Link>
              </div>
            </div>
            </>
        )
    }
}

export default CreationPage
