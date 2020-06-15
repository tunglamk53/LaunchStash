import React from 'react'
import {Accordion, Button, Card, FormControl, InputGroup} from "react-bootstrap";

const CheckboxItem = (props) => {

    const renderSteps = (step) => {
        return (
            <>
            <ol>
                {step.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ol>
            </>
        )
    }

   return (
       <>
       <InputGroup className="mb-3">
           <InputGroup.Prepend>
               <InputGroup.Text className='text-secondary'>
                   CHECKLIST NAME:
               </InputGroup.Text>
           </InputGroup.Prepend>
           <FormControl className='text-danger' disabled value={props.clickedItem.name}/>
       </InputGroup>

       <Accordion defaultActiveKey="">
           <Card>
               <Accordion.Toggle as={Card.Header} eventKey="0">
                   <Button className='btn-success btn-block'>Step #1 - Research Phase</Button>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                   <Card.Body>
                       {renderSteps(props.clickedItem.step1)}

                   </Card.Body>
               </Accordion.Collapse>
           </Card>
           <Card>
               <Accordion.Toggle as={Card.Header} eventKey="1">
                   <Button className='btn-info btn-block'>Step #2 - Slap Together a Website</Button>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="1">
                   <Card.Body>
                       {renderSteps(props.clickedItem.step2)}

                   </Card.Body>
               </Accordion.Collapse>
           </Card>
           <Card>
               <Accordion.Toggle as={Card.Header} eventKey="2">
                   <Button className='btn-primary btn-block'>Step #3 - Do Some Pre-Launch Marketing</Button>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="2">
                   <Card.Body>
                       {renderSteps(props.clickedItem.step3)}

                   </Card.Body>
               </Accordion.Collapse>
           </Card>
           <Card>
               <Accordion.Toggle as={Card.Header} eventKey="3">
                   <Button className='btn-warning btn-block text-white'>Step #4 - Get Some Initial Traction</Button>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="3">
                   <Card.Body>
                       {renderSteps(props.clickedItem.step4)}

                   </Card.Body>
               </Accordion.Collapse>
           </Card>
       </Accordion>
       </>
   )
}

export default CheckboxItem