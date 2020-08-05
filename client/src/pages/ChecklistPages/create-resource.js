import React, { useState } from 'react'
import "./css/site.css"
import "./css/style3.css"
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import resources from "../../data/resources"

const CreateResource = () => {
    const [clickedItem, setClickedItem] = useState('PromotionPlatform')


    return (
        <>
        <section className="section-dark section-xl my-0">
        
        </section>

        <section className="section section-lg section-dark pt-lg-0 mt--150">
        <div class="container-fluid stashContainer">
            <div class="row bodyContent">
                <div class="mx-xl-5 w-100 mt-5">
                    <div class="mx-xl-5">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-3 leftNav">
                                    <nav class="navbar navbar-expand-xl p-0">
                                        <div class="collapse navbar-collapse menu">
                                            <ul class="nav flex-column" id="left-nav">

                                                <Link to={"/create-checklist"}>
                                                    <li class="nav-item">
                                                        <a class="nav-link d-flex align-items-center parent" href="#">
                                                            CHECKLIST
                                                        </a>
                                                        <div id="collapseOne" class="child-nav collapse show ml-3">
                                                            <ul class="nav flex-column">
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#">Pre-Launch</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#">Beta Access</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#">Launch</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#">After Launch</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </Link>

                                                <li class="nav-item mt-4">
                                                    <a class="nav-link d-flex align-items-center parent text-white font-weight-bolder" href="#">
                                                        RESOURCES
                                                    </a>
                                                    <div id="collapseTwo" class="child-nav collapse show ml-3">
                                                        <ul class="nav flex-column">

                                                            <li class="nav-item" onClick={() => setClickedItem('PromotionPlatform')}>
                                                                {clickedItem==='PromotionPlatform' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Promotion Platform</NavLink>
                                                                :
                                                                    <NavLink href="#">Promotion Platform</NavLink>
                                                                }
                                                            </li>

                                                            <li class="nav-item" onClick={() => setClickedItem('AudienceTarget')}>
                                                                {clickedItem==='AudienceTarget' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Audience Target</NavLink>
                                                                :
                                                                    <NavLink href="#">Audience Target</NavLink>
                                                                }
                                                            </li>

                                                            <li class="nav-item" onClick={() => setClickedItem('ArticleWriting')}>
                                                                {clickedItem==='ArticleWriting' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Article Writing</NavLink>
                                                                :
                                                                    <NavLink href="#">Article Writing</NavLink>
                                                                }
                                                            </li>

                                                            <li class="nav-item" onClick={() => setClickedItem('CustomerSupport')}>
                                                                {clickedItem==='CustomerSupport' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Customer Support</NavLink>
                                                                :
                                                                    <NavLink href="#">Customer Support</NavLink>
                                                                }
                                                            </li>

                                                            <li class="nav-item" onClick={() => setClickedItem('TrackingTools')}>
                                                                {clickedItem==='TrackingTools' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Tracking Tools</NavLink>
                                                                :
                                                                    <NavLink href="#">Tracking Tools</NavLink>
                                                                }
                                                            </li>

                                                            <li class="nav-item" onClick={() => setClickedItem('BetaTestToolList')}>
                                                                {clickedItem==='BetaTestToolList' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Beta Test Tool List</NavLink>
                                                                :
                                                                    <NavLink href="#">Beta Test Tool List</NavLink>
                                                                }
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div class="col-xl-9">
                                    <div class="resourcePage">
                                        <div class="resources">
                                            <div class="title">RESOURCES</div>
                                            <div class="row mt-3">
                                                <div class="col-xl-4" onClick={() => setClickedItem('PromotionPlatform')}>
                                                    {clickedItem==='PromotionPlatform' ? <div class="resourcesItem active"><div class="text">Promotion Platform</div></div>
                                                    : <div class="resourcesItem"><div class="text">Promotion Platform</div></div>}
                                                </div>
                                                
                                                <div class="col-xl-4" onClick={() => setClickedItem('AudienceTarget')}>
                                                    {clickedItem==='AudienceTarget' ? <div class="resourcesItem active"><div class="text">Audience Target</div></div>
                                                    : <div class="resourcesItem"><div class="text">Audience Target</div></div>}
                                                </div>

                                                <div class="col-xl-4" onClick={() => setClickedItem('ArticleWriting')}>
                                                    {clickedItem==='ArticleWriting' ? <div class="resourcesItem active"><div class="text">Article Writing</div></div>
                                                    : <div class="resourcesItem"><div class="text">Article Writing</div></div>}
                                                </div>

                                                <div class="col-xl-4" onClick={() => setClickedItem('CustomerSupport')}>
                                                    {clickedItem==='CustomerSupport' ? <div class="resourcesItem active"><div class="text">Customer Support</div></div>
                                                    : <div class="resourcesItem"><div class="text">Customer Support</div></div>}
                                                </div>

                                                <div class="col-xl-4" onClick={() => setClickedItem('TrackingTools')}>
                                                    {clickedItem==='TrackingTools' ? <div class="resourcesItem active"><div class="text">Tracking Tools</div></div>
                                                    : <div class="resourcesItem"><div class="text">Tracking Tools</div></div>}
                                                </div>

                                                <div class="col-xl-4" onClick={() => setClickedItem('BetaTestToolList')}>
                                                    {clickedItem==='BetaTestToolList' ? <div class="resourcesItem active"><div class="text">Beta Test Tool List</div></div>
                                                    : <div class="resourcesItem"><div class="text">Beta Test Tool List</div></div>}
                                                </div>

                                            </div>
                                        </div>
                                        <div class="detailRessource mt-5">
                                            <div class="detailList mx-5">
                                                <div class="container-fluid">

                                                    {/* PromotionPlatform */}
                                                    {clickedItem==='PromotionPlatform' ? 
                                                    (resources.PromotionPlatform.map((item, index) => (
                                                        <div class="listItem row mb-1">
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}


                                                    {/* AudienceTarget */}
                                                    {clickedItem==='AudienceTarget' ? 
                                                    (resources.AudienceTarget.map((item, index) => (
                                                        <div class="listItem row mb-1" key={index}>
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}

                                                    {/* AudienceTarget */}
                                                    {clickedItem==='ArticleWriting' ? 
                                                    (resources.ArticleWriting.map((item, index) => (
                                                        <div class="listItem row mb-1" key={index}>
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}

                                                    {/* AudienceTarget */}
                                                    {clickedItem==='CustomerSupport' ? 
                                                    (resources.CustomerSupport.map((item, index) => (
                                                        <div class="listItem row mb-1" key={index}>
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}

                                                    {/* AudienceTarget */}
                                                    {clickedItem==='TrackingTools' ? 
                                                    (resources.TrackingTools.map((item, index) => (
                                                        <div class="listItem row mb-1" key={index}>
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}

                                                    {/* AudienceTarget */}
                                                    {clickedItem==='BetaTestToolList' ? 
                                                    (resources.BetaTestToolList.map((item, index) => (
                                                        <div class="listItem row mb-1" key={index}>
                                                            <div class="col-4 name py-3 px-5">{item.name}</div>
                                                            <div class="col-8 detail py-3 px-5">{item.description}</div>
                                                        </div>
                                                    ))) : null}

                                                    
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default CreateResource