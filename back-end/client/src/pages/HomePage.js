import React from "react";
import { Card, Button, CardGroup } from 'react-bootstrap'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import {Link} from "react-router-dom";

const HomePage = (props) => {

    const onClickCheckList = () => {
        props.history.push('/checklist');
    }

    return (
        <>
        <div className="auth-wrapper-home">
        <div className="auth-inner-home">
            <h1 className='text-secondary text-center mb-5'>WELCOME TO <span className="text-danger">LAUNCH STASH</span></h1>

                                            {console.log(localStorage.getItem("myToken"))}

        <div>
            <CardGroup>
            <Card border="white" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pic2} />
              <Card.Body>
                  <Card.Title className="text-success">PRODUCT IDEA</Card.Title>
                  <Card.Text className='text-secondary'>
                      A website helps user to better their
                      launching process with 2 main contents:
                      <ul>
                          <li>Launch process checklist</li>
                          <li>Launch process useful resources</li>
                      </ul>
                  </Card.Text>
                  <Link className='btn btn-outline-success btn-sm float-right mt-4' to={"/job-stories"}>More info!</Link>
              </Card.Body>
            </Card>

            <Card border="white" style={{ width: '18rem' }} className="mr-5 ml-5">
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title className="text-info">TARGET AUDIENCES</Card.Title>
                    <Card.Text className='text-secondary'>
                        <ul>
                            <li>Start up team</li>
                            <li>Product Manager, Product Manager</li>
                            <li>Indie developers</li>
                            <li>Marketer</li>
                        </ul>
                    </Card.Text>
                    <Link className='btn btn-outline-info btn-sm float-right mt-4' to={"/target-audiences"}>More info!</Link>
                </Card.Body>
            </Card>

            <Card border="white" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={pic3} />
                <Card.Body>
                    <Card.Title className="text-primary">SOLUTIONS</Card.Title>
                    <Card.Text className='text-secondary'>
                        <ul>
                            <li>Create a hub to feature all resources</li>
                            <li>Suggested launch process</li>
                            <li>Allow users to build, share, keep track their launch kits</li>
                        </ul>
                    </Card.Text>
                    <Link className='btn btn-outline-primary btn-sm float-right mt-4' to={"/solutions"}>More info!</Link>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>

        <Button
            className="btn-danger btn-lg btn-outline-secondary badge-pill text-white btn-block mt-5"
            onClick={onClickCheckList}
        >
            Let's CREATE CHECKLIST NOW!
        </Button>

        </div>
        </div>
        </>
    )
}

export default HomePage
