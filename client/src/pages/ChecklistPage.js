import React, { useState, useEffect } from 'react';
import ChecklistsTable from './ChecklistsTable'
import CheckboxItem from "./components/CheckboxItem";
import {
    Card,
    Container,
    Row,
    Col
} from "reactstrap"

const ChecklistPage = () => {
        const [checklists, setChecklists] = useState()

        const [ clickedItem, setClickedItem ] = useState(null)

        useEffect(() => {
            const fetchData = async() => {
                const res = await fetch(
                    `/user/my-checklist/${localStorage.getItem('myEmail')}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'token-backend': localStorage.getItem('myToken'),
                            'email-backend': localStorage.getItem('myEmail')
                        }
                    })
                if(res.status === 200) {
                  const checklists = await res.json()
                  setChecklists(checklists)
                }
            }
            fetchData();

        }, [setChecklists])
        console.log(clickedItem);


        if(!clickedItem)
            return (
            <>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 shape-dark">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    
                    <Container className="py-lg-md d-flex justify-content-center mt-5">
                            <h3 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>
                                My Checklists
                            </h3>
                    </Container>

                    <Container className="mt-5">
                        <Row className="justify-content-center">
                            <Col lg="8">
                                <Card className="bg-gradient-secondary shadow">
                                    <ChecklistsTable checklists={checklists} setChecklists={setChecklists} setClickedItem={setClickedItem} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            </>
            )


        else {
            return (
                <>
                <section className="section-dark section-xl my-0">
                    <Container className="py-lg-md d-flex justify-content-center">
                        
                    </Container>
                </section>
                    
                    <CheckboxItem clickedItem={clickedItem}/>
                </>
            )
        }
}

export default ChecklistPage

