import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckBoxResultsStep1 from "./CheckBoxResultsStep1";
import CheckBoxResultsStep2 from './CheckBoxResultsStep2'
import CheckBoxResultsStep3 from "./CheckBoxResultsStep3";
import CheckBoxResultsStep4 from "./CheckBoxResultsStep4";

const CheckBoxResults = () => {

  return (
    <>
    <Accordion defaultActiveKey="">
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            <Button className='btn-secondary'>Step #1 - Research Phase</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <CheckBoxResultsStep1 />


            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
            <Button className='btn-secondary'>Step #2 - Slap Together a Website</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <CheckBoxResultsStep2 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
            <Button className='btn-secondary'>Step #3 - Do Some Pre-Launch Marketing</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <CheckBoxResultsStep3 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
            <Button className='btn-secondary'>Step #4 - Get Some Initial Traction</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
            <Card.Body>
                <CheckBoxResultsStep4 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    </>
  )
}

export default CheckBoxResults
