import React, { useState } from "react";
import { Accordion, Card } from 'react-bootstrap';
import CheckList from './components/checklist';

const CreationPage = () => {
    const email = localStorage.getItem('myEmail')

    const [isSuccess, setIsSuccess] = useState(false)

    const [part1, setPart1] = useState('')
    const [part2, setPart2] = useState('')
    const [part3, setPart3] = useState('')

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


    if(isSuccess === false) {
        return (
            <>
            <h1>Create your Checklist</h1>
            <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                PART 1
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
                PART 2
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
                PART 3
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
            <p>Part1 -----> {part1}</p>
            <p>Part2 -----> {part2}</p>
            <p>Part3 -----> {part3}</p>

            <button 
                type="button" 
                className="btn btn-primary btn-block"
                onClick={saveCheckList}
            >Save</button>
            </>
        )
    } else {
        return (
            <>
            <h3>Checklist is Successfully Saved</h3>
            {/* <h3>Part 1: {part1}</h3>
            <h3>Part 2: {part2}</h3>
            <h3>Part 3: {part3}</h3> */}
            <CheckList part1={part1} part2={part2} part3={part3} />
            </>
        )
    }
}

export default CreationPage