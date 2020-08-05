import React, { useState } from 'react'
import "../ChecklistPages/css/site.css"
import "../ChecklistPages/css/style4.css"
import ExportPdf from '../utils/ExportPdf'
import ChecklistParts from "./checklist-parts"

const CheckboxItem = (props) => {
    const [clickedItem, setClickedItem] = useState('Pre-Launch')

    const renderSteps = (step) => {
        return (
            <>
            <ol>
                {step.map((value, index) => (
                    <li className="labelParent mb-3" key={index}>{value}</li>
                ))}
            </ol>
            </>
        )
    }

   return (
       <>
       <section className="section section-lg section-dark pt-lg-0 mt--150">
        <div class="container-fluid stashContainer text-white">
            <div class="row bodyContent">
                <div class="mx-xl-5 w-100 mt-5">
                    <div class="mx-xl-5">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-xl-9">
                                    <div class="checkList">
                                        
                                        <div class="title">Name: <span>{props.clickedItem.name}</span></div>

                                        {/* Render Checklist Parts Components */}
                                        <ChecklistParts clickedItem={clickedItem} setClickedItem={setClickedItem}/>
                                        
                                    </div>

                                    <form class="mt-6 mb-6">
                                        <div class="scroll">
                                            <div class="checkForm">
                                                {(() => {
                                                    switch (clickedItem) {
                                                    case "Pre-Launch":      return renderSteps(props.clickedItem.step1);
                                                    case "Beta Access":     return renderSteps(props.clickedItem.step2);
                                                    case "Launch":          return renderSteps(props.clickedItem.step3);
                                                    case "After Launch":    return renderSteps(props.clickedItem.step4);
                                                    default:                return null;
                                                    }
                                                })()}   
                                            </div>
                                        </div>
                                        <div class="form-group mt-5 d-flex justify-content-center">
                                            <button type="button" class="btn btn-primary primaryBtn export ml-5 px-5"
                                                onClick={() => ExportPdf(props.clickedItem)}
                                            >
                                                <i className="fa fa-file-pdf-o mr-2" />
                                                EXPORT CHECKLIST
                                            </button>
                                        </div>
                                    </form>
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

export default CheckboxItem