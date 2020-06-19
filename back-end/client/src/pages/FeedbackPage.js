import React from 'react'
import pic9 from "../assets/pic9.png";

const FeedbackPage = () => {

    return (
        <>
        <div className="create-checklist-wrapper">
            <h1 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>Feedback</h1>
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