import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckBoxResultsStep1 from "./CheckBoxResultsStep1";
import CheckBoxResultsStep2 from './CheckBoxResultsStep2'
import CheckBoxResultsStep3 from "./CheckBoxResultsStep3";
import CheckBoxResultsStep4 from "./CheckBoxResultsStep4";

const CheckBoxResults = () => {

  return (
    <>
    <Accordion defaultActiveKey=''>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            <Button className='btn-success btn-block'>Stage #1 - Pre-launch</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <CheckBoxResultsStep1 />


            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
            <Button className='btn-info btn-block'>Stage #2 - Beta/Early Access</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <CheckBoxResultsStep2 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
            <Button className='btn-primary btn-block'>Stage #3 - Launch</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
            <Card.Body>
                <CheckBoxResultsStep3 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
            <Button className='btn-warning text-white btn-block'>Stage #4 - Post-launch</Button>
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
