import React, {useEffect, useState, useContext} from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckList from './components/checklist';
import CheckBoxs from './utils/CheckBoxs'
import CheckBoxResults from './utils/CheckBoxResults'
import CheckBoxContext from '../contexts/CheckBoxContext'

const CreationPage = () => {
    const { Step2, setStep2 } = useContext(CheckBoxContext)

    const [checklist1, setChecklist1] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)
    const [part1, setPart1] = useState('')
    const [part2, setPart2] = useState('')
    const [part3, setPart3] = useState('')

    const email = localStorage.getItem('myEmail')

    const onSaveCheckLists = event => {
        event.preventDefault()
        // const step2 = JSON.stringify(Checked);
        const step2 = Step2

        console.log(step2)

        fetch(`/user/checklists`, {
            method: 'PUT',
            body: JSON.stringify({ email, step2 }),
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

    useEffect(() => {
        setStep2([])
    }, [])

    if(isSuccess === false) {
        return (
            <>
            <div className="create-checklist-wrapper">
            <div className="create-checklist-inner">
              <h1>Create your Checklist</h1>
                  <p>(Please choose your Step 1, Step 2, Step 3 below)</p>

              <h3>Result:</h3>
                <CheckBoxResults />

              <br/>
              <Button type="button" className="btn btn-primary btn-block" onClick={onSaveCheckLists}>
                  SAVE SAVE SAVE !
              </Button>

              <br/>
              <Accordion className="mt-3">
                  <h3 className='text-info'>Step #2 - Slap Together a Website</h3>
                  <p>Time to get things rolling. The next step is to create a website and create a foundation for your marketing.</p>
                  <CheckBoxs />
              </Accordion>

            </div>
            </div>
            </>
        )



    } else {
        return (
            <>
            <div className="create-checklist-wrapper">
              <div className="create-checklist-inner">
                <h3>Checklist is Successfully Saved !!!</h3>
                <CheckBoxResults />
              </div>
            </div>
            </>
        )
    }
}

export default CreationPage
