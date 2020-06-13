import React from "react";
import {Accordion, Button, Card} from "react-bootstrap";
import ChecklistElement from "./checklist_element";

const ChecklistStep2 = () => {

    return (
        <>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text-primary">
                        Step #2 - Slap Together a Website
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p className="text-success">Time to get things rolling. The next step is to create a website and create a foundation for your marketing.</p>
                        <ul className="list-group">
                            <ChecklistElement content={"Come up with a name for your business. You can use this tool for generating ideas."} />
                            <ChecklistElement content={"Buy hosting. We recommend using SiteGround - they have 99.99% server up time, and their customer support is amazing."} />
                            <ChecklistElement content={"Pick an email marketing provider. It doesn’t particularly matter which one. We usually recommend MailChimp since it’s free for up to 2,000 subscribers."} />
                            <ChecklistElement content={"Create a logo for your business. You can use BrandMark to do this fast and easy."} />
                            <ChecklistElement content={"Create relevant social profiles. The key here is relevant. If you’re a B2B enterprise software company, you really don’t need an Instagram profile where you post selfies. Usually, most startups go for Facebook, LinkedIn, and Twitter."} />
                            <ChecklistElement content={"Create a landing page for your product. You’ll need to create a landing page that sells your product. In 99% of cases, we recommend using WordPress. It’s going to allow you to be a LOT leaner than having your tech team code your entire website from scratch."} />
                            <ChecklistElement content={"Create other essential web pages. E.g. about us, contact us, pricing page.Set up a payment processor. We’d recommend Stripe (the best option on the market) or PayPal (if you really have to)."} />
                            <ChecklistElement content={"Borrow stock photos from Vexels or static icons from Flaticon. to make the landing page creation process easier."} />
                            <ChecklistElement content={"Set up a payment processor. We’d recommend Stripe (the best option on the market) or PayPal (if you really have to)."} />
                            <ChecklistElement content={"Set up Analytics. You can pick between Google Analytics, MixPanel, or other alternatives."} />
                            <ChecklistElement content={"Set up a business email. We recommend using G Suite. Dealing with your hosting provider’s email service will be a pain when scaling."} />
                            <ChecklistElement content={"Launch a blog. If you’re planning on using content marketing or SEO for your marketing (which, in 2020, most product companies do), you’ll need a blog."} />


                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default ChecklistStep2