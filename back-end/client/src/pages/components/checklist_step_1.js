import React, {useEffect, useState} from "react";
import {Accordion, Button, Card} from "react-bootstrap";
import ChecklistElement from "./checklist_element";

const ChecklistStep1 = (props) => {
    // const [checklist1, setChecklist1] = useState([])

    useEffect(() => {
        // if(!checklist1) {
        //     const reducedArray = checklist1.map( item => `${item},` )
        //     console.log(reducedArray)
        // }
        // console.log(props.checklist1)

    })

    // console.log(props.checklist1)


    return (
        <>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-primary">
                        Step #1 - Research Phase
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p className="text-success">
                            Before you start planning your launch, you need to figure out your overall product and marketing strategy.
                        </p>
                        <ul className="list-group">
                            <ChecklistElement content={"Come up with a name for your business. You can use this tool for generating ideas."} checklist1={props.checklist1} setChecklist1={props.setChecklist1} />

                            <li className="list-group-item">
                                <div className="form-check">
                                    {/*<input type="checkbox" className="form-check-input" id="formCheck-2"/>*/}
                                    <label className="form-check-label" htmlFor="formCheck-2">
                                        Create a list of competitors in your niche & include the following:
                                    </label>
                                </div>
                                <ul className="list-group">
                                    <ChecklistElement content="Competitor Name" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Link" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Pricing Options" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Key Features" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    {/*<input type="checkbox" className="form-check-input" id="formCheck-2"/>*/}
                                    <label className="form-check-label" htmlFor="formCheck-2">
                                        Define your product & business.
                                    </label>
                                </div>
                                <ul className="list-group">
                                    <ChecklistElement content="What’s your business model?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="What’s your pricing model?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="How many pricing tiers do you offer?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Do you offer a free trial?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Is your product freemium?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="Which key features are you going to focus on for launch?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                    <ChecklistElement content="What’s your differentiator? How are you going to beat the existing products on the market?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                                </ul>
                            </li>
                        </ul>

                        <p className="mt-3 text-success">Spy on your competitors and figure out which marketing channels are getting them the best results:</p>
                        <ul className="list-group">
                            <ChecklistElement content="Content Marketing -> Do they publish blog posts on a regular basis? Do they promote their content on social media? Do they get a lot of Facebook, Twitter, or LinkedIn shares?" checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Search Engine Optimization -> Do they have good rankings on Google with their blog posts? Do their landing pages rank on product search terms? You can check this by running their website through SEMrush or Ahrefs." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Search Ads -> Are they running ads on Google Search? You can check this by running their site through SEMrush." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Facebook Ads -> Are they running ads on Facebook? You can check this through Facebook Ad Library." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Affiliate Marketing -> Check their website footer to see if they have an affiliate page up. You can also do this through a simple search query: “site:[competitor website] affiliate program." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Referral Marketing -> You can usually find this in the footer. Check what kind of referral terms your competitors offer." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />
                            <ChecklistElement content="Now, if you're planning on raising money, use all of the above to slap together a bad-ass pitch deck." checklist1={props.checklist1} setChecklist1={props.setChecklist1} />

                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default ChecklistStep1