import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckBoxResultsStep2 from './CheckBoxResultsStep2'

const CheckBoxResults = () => {

  return (
    <>
    <Accordion defaultActiveKey="1">
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            <Button className='btn-success'>Checklist 1</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>



            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
            <Button className='btn-info'>Step #2 - Slap Together a Website</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
            <Card.Body>
              <CheckBoxResultsStep2 />

            </Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
            <Button className='btn-primary'>Checklist 3</Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
            <Card.Body>


            </Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    </>
  )
}

export default CheckBoxResults
