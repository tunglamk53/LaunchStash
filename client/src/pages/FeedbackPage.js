import React from 'react'
import pic9 from "../assets/pic9.png";
import {
    Container,
    Row,
} from "reactstrap"

const FeedbackPage = () => {

    return (
        <>
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-200">
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
                <Container className="py-lg-md d-flex justify-content-center">
                    <h3 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded mt-6'>
                        Feedback
                    </h3>
                </Container>
                <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            </div>

        <div className="create-checklist-wrapper mt-5 text-secondary">
            <div className="create-checklist-inner">
                <div className="text-center">
                    <img src={pic9} alt='feedback' />
                </div>
            </div>
        </div>
        </>
    )
}

export default FeedbackPage