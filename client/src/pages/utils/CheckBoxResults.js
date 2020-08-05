import React, { useState } from 'react'
import ExportPdf from './ExportPdf'
import ChecklistParts from "../components/checklist-parts"

const CheckBoxResults = (props) => {
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

    const onClickExportPdf = () => {
        const pdfItems = {
            "name": props.name,
            "step1": props.step1,
            "step2": props.step2, 
            "step3": props.step3,
            "step4": props.step4
        }

        ExportPdf(pdfItems)
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
                                        <div class="title">Name: <span>{props.name}</span></div>

                                        {/* Render Checklist Parts Components */}
                                        <ChecklistParts clickedItem={clickedItem} setClickedItem={setClickedItem}/>

                                    </div>

                                    <form class="mt-6 mb-6">
                                        <div class="scroll">
                                            <div class="checkForm">
                                            {(() => {
                                                switch (clickedItem) {
                                                case "Pre-Launch":      return renderSteps(props.step1);
                                                case "Beta Access":     return renderSteps(props.step2);
                                                case "Launch":          return renderSteps(props.step3);
                                                case "After Launch":    return renderSteps(props.step4);
                                                default:                return null;
                                                }
                                            })()}
                                                
                                            </div>
                                        </div>
                                        <div class="form-group mt-5 d-flex justify-content-center">
                                            {/* <button type="button" class="btn btn-primary primaryBtn save px-5" onClick={onSaveCheckLists}>SAVE CHECKLIST</button> */}
                                            <button type="button" class="btn btn-primary primaryBtn export ml-5 px-5"
                                                onClick={() => onClickExportPdf()}
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

export default CheckBoxResults
