import React from 'react'
import pic6 from '../assets/pic6.PNG'

const TargetAudiencesPage = () => {

    return (
        <>
            <div className="create-checklist-wrapper">
                <h1 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>Target Audiences</h1>
            </div>

            <div className="create-checklist-wrapper mt-5 text-secondary">
                <div className="create-checklist-inner">
                    <div className="text-center">
                        <img src={pic6} alt='target-audiences'/>
                    </div>
                    <h3 className='text-success mt-4'>Stages 1: Pre - Launch</h3>
                    <p>Double check your content to make sure all content is approved and final</p>
                    <p>User testing:</p>
                    <ul>
                        <li>Make sure your navigation works</li>
                        <li>Check for mobile-friendliness</li>
                        <li>Review browser compatibility</li>
                        <li>Site has been tested in all browsers/devices decided on at beginning of project</li>
                    </ul>
                    <p>All forms, payment gateway have been tested</p>
                    <p>Test site for speed/performance and optimization</p>
                    <p>Check SEO, SEM keywords</p>
                    <p>Data goal tracking measure</p>
                    <p>Develop Media Plan: Launching a product without a media plan in place is a considerable risk. You’re only going to launch your product once, so you need to make the most of that occasion.</p>
                    <p>Identify your primary target audience: You may already have your target audience when working on your product value proposition. Your PR strategy should aim to attract and engage this group of people.</p>
                    <p>Establish the goal of your market launch: You need to have an objective in mind when launching your product — for example, the number of users you want to engage or specific sales metrics you want to reach. By measuring your success, you will learn more about what works and what doesn’t for your audience.</p>
                    <p>Check your support: You need to know whether your support team can handle a sudden influx of requests from users. Make sure that there are enough people on board who can answer users’ questions and help them take advantage of the product from day one. Make sure you have a contact page. </p>
                    <br/>

                    <h3 className='text-info'>Stage 2: Beta Access</h3>
                    <p>Define your Unique Selling Proposition: The key to the quick and efficient creation of promotional materials and easier communication with the media lies in defining your value, mission, and unique selling proposition (USP). </p>
                    <ul>
                        <li>Vision</li>
                        <li>Mission</li>
                        <li>Value</li>
                    </ul>
                    <p>Write a press release: Journalists receive hundreds of press releases each month so make sure that yours catches their attention and engages them to reach out to you.</p>
                    <p>Choose the right day and time for your product launch: Picking right day and time to launch your product is very important to get the maximum attention from your audience and media. </p>
                    <p>Inform all stakeholders about your launch date beforehand: Each member of the team will need to reserve their time to work on the launch and create a buzz.</p>
                    <p>Create promotional and sales materials: Develop your offer and content you will share online. Always make sure that someone else reviews your materials.</p>
                    <p>Create timeline for posting on social media </p>
                    <br/>

                    <h3 className='text-primary'>Stage 3: Official Launch</h3>
                    <p>Make sure everyone is in their place and fully aware their duty</p>
                    <p>Spread the word: Make sure to ask everyone you know — from partners and employees to family and friends — to send out and let everyone know about your new product. Use social media channels smartly, and you’ll engage your target audience even before the launch.</p>
                    <p>Execute your media plan</p>
                    <p>Prepare for any surprising "accident"</p>
                    <br/>

                    <h3 className='text-warning'>Stage 4: Post - Launch</h3>
                    <p>Plan future communications: It’s smart to create a broader PR plan where you include communications to be delivered after the launch. For example, if you plan to open a newsletter box, you need to know what type of content you’ll be sharing with your audience before someone subscribes.</p>
                    <p>Handle feedbacks</p>
                    <p>Analyze tracking data</p>
                    <p>Celebrate</p>

                    <br/>
                    <p className='text-danger font-italic'>Finally, don't forget to double check your contents to make sure all content is approved and final</p>

                </div>
            </div>
        </>
    )
}

export default TargetAudiencesPage