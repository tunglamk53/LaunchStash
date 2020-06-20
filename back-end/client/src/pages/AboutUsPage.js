import React from 'react'
import pic8 from "../assets/pic8.JPG";

const AboutUsPage = () => {

    return (
        <>
        <div className="create-checklist-wrapper">
            <h1 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>About Us</h1>
        </div>

        <div className="create-checklist-wrapper mt-5 text-secondary">
            <div className="create-checklist-inner">
                <ul>
                    <li>Le Thao My Nguyen: 300301243</li>
                    <li>Khue Nguyen: 300300461</li>
                    <li>Tung Lam Trinh: 300267601</li>
                </ul>
                <div className="text-center">
                    <img src={pic8} alt='about-us' />
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUsPage