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
            <Button className='btn-light btn-outline-success btn-block badge-pill'>Stage #1 - Pre-launch</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <CheckBoxStep1 />


            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
            <Button className='btn-light btn-outline-info btn-block badge-pill'>Stage #2 - Beta/Early Access</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <CheckBoxStep2 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
            <Button className='btn-light btn-outline-primary btn-block badge-pill'>Stage #3 - Launch</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <CheckBoxStep3 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
            <Button className='btn-light btn-outline-warning btn-block badge-pill'>Stage #4 - Post-launch</Button>
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
