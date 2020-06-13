import React, {useEffect, useState} from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckList from './components/checklist';
import ChecklistStep1 from "./components/checklist_step_1";
import ChecklistStep2 from "./components/checklist_step_2";
import ChecklistSeo from "./components/checklist_seo";

const CreationPage = () => {
    const [checklist1, setChecklist1] = useState([])
    const [isSuccess, setIsSuccess] = useState(false)
    const [part1, setPart1] = useState('')
    const [part2, setPart2] = useState('')
    const [part3, setPart3] = useState('')

    const email = localStorage.getItem('myEmail')

    const saveCheckList = event => {
        event.preventDefault()

        fetch(`/user/checklist`, {
            method: 'PUT',
            body: JSON.stringify({ email, part1, part2, part3 }),
            headers: {
                'Content-Type': 'application/json',
                'token-backend': localStorage.getItem('myToken')
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setIsSuccess(data.isSuccess)
        })
    }

    useEffect(() => {
        console.log(checklist1)
    })


    if(isSuccess === false) {
        return (
            <>
            <div className="create-checklist-wrapper">
            <div className="create-checklist-inner">
            <h1>Create your Checklist</h1>
                <p>(Please choose your Part 1, Part 2, Part 3 below)</p>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Button className='btn-success'>PART 1</Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card onClick={() => setPart1('AAA')}>AAA</Card> <br/>
                        <Card onClick={() => setPart1('BBB')}>BBB</Card> <br/>
                        <Card onClick={() => setPart1('CCC')}>CCC</Card>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <Button className='btn-info'>PART 2</Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card onClick={() => setPart2('GGG')}>GGG</Card> <br/>
                        <Card onClick={() => setPart2('HHH')}>HHH</Card> <br/>
                        <Card onClick={() => setPart2('KKK')}>KKK</Card>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <Button className='btn-primary'>PART 3</Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card onClick={() => setPart3('XXX')}>XXX</Card> <br/>
                        <Card onClick={() => setPart3('YYY')}>YYY</Card> <br/>
                        <Card onClick={() => setPart3('ZZZ')}>ZZZ</Card>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

            <br/>
            <h1>Result:</h1>
                <p>Part1 -----> <span className='text-success'>{part1}</span></p>
                <p>Part2 -----> <span className='text-info'>{part2}</span></p>
                <p>Part3 -----> <span className='text-primary'>{part3}</span></p>

            <Button type="button" className="btn btn-primary btn-block" onClick={saveCheckList}>
                Save
            </Button>



                <br/>
                <br/>
                <br/>
                <p className="text-warning">We haven't implement to save these checkboxes below: (we are still working on this)</p>

            <Accordion className="mt-3">
                <ChecklistStep1 checklist1={checklist1} setChecklist1={setChecklist1}/>
                <ChecklistStep2 />
                <ChecklistSeo />
            </Accordion>

            </div>
            </div>
            </>
        )


        
    } else {
        return (
            <>
                <div className="auth-wrapper">
                    <div className="auth-inner">
            <h3>Checklist is Successfully Saved</h3>
            {/* <h3>Part 1: {part1}</h3>
            <h3>Part 2: {part2}</h3>
            <h3>Part 3: {part3}</h3> */}
            <CheckList part1={part1} part2={part2} part3={part3} />
                    </div>
                </div>
            </>
        )
    }
}

export default CreationPage
