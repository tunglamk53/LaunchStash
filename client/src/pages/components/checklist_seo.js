import React from "react";
import {Accordion, Button, Card} from "react-bootstrap";
import ChecklistElement from "./checklist_element";

const ChecklistSeo = () => {

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="text-primary">
                    SEO
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <p className="text-success">
                        SEO generally involves 3 things: - Creating high-quality articles aimed at ranking for specific keywords - Optimizing your website to Google best practices - Getting high-quality backlinks pointed towards your website Here's how to do all that.
                    </p>
                    <ul className="list-group">
                        <ChecklistElement content={"Create a list of your competitors that have good rankings on Google"} />

                        <li className="list-group-item">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck-2"/>
                                <label className="form-check-label" htmlFor="formCheck-2">
                                    Do some keyword research. Come up with keywords that you want to rank for with your blog content (e.g. topics surrounding your product), as well as your landing pages (e.g. direct search terms people use to find your product). You can use the following tools for this:
                                </label>
                            </div>
                            <ul className="list-group">
                                <ChecklistElement content="UberSuggest" />
                                <ChecklistElement content="SEMrush" />
                                <ChecklistElement content="Google Keyword Planner" />
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck-2"/>
                                <label className="form-check-label" htmlFor="formCheck-2">
                                    Optimize all your web pages for SEO. You can use one of the following tools:
                                </label>
                            </div>
                            <ul className="list-group">
                                <ChecklistElement content="Using WordPress? RankMath or Yoast" />
                                <ChecklistElement content="Otherwise, check this out" />
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck-2"/>
                                <label className="form-check-label" htmlFor="formCheck-2">
                                    Publish SEO-optimized content on the reg. Here’s how to do that…
                                </label>
                            </div>
                            <ul className="list-group">
                                <ChecklistElement content="How to Learn SEO in 2020" />
                                <ChecklistElement content="Our SEO Process - How To Reach 200,000+ Monthly Traffic" />
                                <ChecklistElement content="SEO Copywriting: 17 Powerful Secrets (Updated)" />
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck-2"/>
                                <label className="form-check-label" htmlFor="formCheck-2">
                                    Create landing pages for each of your use-case.
                                </label>
                            </div>
                            <ul className="list-group">
                                <ChecklistElement content="How to Rank (and Convert) with Landing Page SEO" />
                                <ChecklistElement content="The simple guide to SEO for your landing pages" />
                            </ul>
                        </li>

                        <ChecklistElement content={"Do link-building on the reg. Here’s the complete list of all the possible tactics you can use."} />
                    </ul>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ChecklistSeo