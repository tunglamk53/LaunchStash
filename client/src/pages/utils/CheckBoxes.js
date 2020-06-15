import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckBoxStep1 from "./CheckBoxStep1"
import CheckBoxStep2 from './CheckBoxStep2'
import CheckBoxStep3 from "./CheckBoxStep3"
import CheckBoxStep4 from "./CheckBoxStep4"

const CheckBoxes = () => {

  return (
    <>
    <Accordion defaultActiveKey="">
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            <Button className='btn-light btn-outline-success btn-block badge-pill'>Step #1 - Research Phase</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <CheckBoxStep1 />


            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
            <Button className='btn-light btn-outline-info btn-block badge-pill'>Step #2 - Slap Together a Website</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <CheckBoxStep2 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
            <Button className='btn-light btn-outline-primary btn-block badge-pill'>Step #3 - Do Some Pre-Launch Marketing</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <CheckBoxStep3 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
            <Button className='btn-light btn-outline-warning btn-block badge-pill'>Step #4 - Get Some Initial Traction</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
            <Card.Body>
                <CheckBoxStep4 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    </>
  )
}

export default CheckBoxes
