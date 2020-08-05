import React, { useState, useContext, useEffect } from 'react'
import "./css/site.css"
import "./css/style4.css"
import { NavLink } from "reactstrap";
import { InputGroup, FormControl, Alert } from 'react-bootstrap';
import CheckboxStep1 from "../utils/CheckBoxStep1"
import CheckboxStep2 from "../utils/CheckBoxStep2"
import CheckboxStep3 from "../utils/CheckBoxStep3"
import CheckboxStep4 from "../utils/CheckBoxStep4"
import CheckBoxContext1 from '../../contexts/CheckBoxContext1'
import CheckBoxContext2 from '../../contexts/CheckBoxContext2'
import CheckBoxContext3 from '../../contexts/CheckBoxContext3'
import CheckBoxContext4 from '../../contexts/CheckBoxContext4'
import { Link } from "react-router-dom";
import CheckBoxResults from "../utils/CheckBoxResults"
import ChecklistParts from "../components/checklist-parts"
import ExportPdf from "../utils/ExportPdf"

const CreateChecklist = () => {
    const [clickedItem, setClickedItem] = useState('Pre-Launch')
    
    const { Step1, setStep1 } = useContext(CheckBoxContext1)
    const { Step2, setStep2 } = useContext(CheckBoxContext2)
    const { Step3, setStep3 } = useContext(CheckBoxContext3)
    const { Step4, setStep4 } = useContext(CheckBoxContext4)

    const [ checklistName, setChecklistName ] = useState('')
    const [ isSuccess, setIsSuccess ] = useState(false)

    const email = localStorage.getItem('myEmail')

    const onSaveCheckLists = event => {
        event.preventDefault()
        // const step2 = JSON.stringify(Checked);
        const step1 = Step1
        const step2 = Step2
        const step3 = Step3
        const step4 = Step4
        const name = checklistName
        // console.log(step2)

        if (checklistName.trim() === '')
            alert('Checklist Name could not be empty!')
        else {
            fetch(`/user/checklists`, {
                method: 'PUT',
                body: JSON.stringify({
                    email,
                    name,
                    step1,
                    step2,
                    step3,
                    step4
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'token-backend': localStorage.getItem('myToken')
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSuccess(data.isSuccess)
                })
        }
    }

    useEffect(() => {
        setStep1([])
        setStep2([])
        setStep3([])
        setStep4([])
    }, [setIsSuccess, setStep1, setStep2, setStep3, setStep4])


    const onClickExportPdf = () => {
        const pdfItems = {
            "name": checklistName,
            "step1": Step1,
            "step2": Step2, 
            "step3": Step3,
            "step4": Step4
        }

        checklistName.trim()==="" ? alert('Checklist Name could not be empty!') : ExportPdf(pdfItems)
    }


    if(isSuccess === false) {
        return (
            <>
            <section className="section-dark section-xl my-0">
            
            </section>
    
    
            
            <section className="section section-lg section-dark pt-lg-0 mt--150">
            <div class="container-fluid stashContainer text-white">
                <div class="row bodyContent">
                    <div class="mx-xl-5 w-100 mt-5">
                        <div class="mx-xl-5">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xl-3 leftNav">
                                        <nav class="navbar navbar-expand-xl p-0">
                                            <div class="collapse navbar-collapse menu">
                                                <ul class="nav flex-column" id="left-nav">

                                                    <li class="nav-item">
                                                        <a class="nav-link d-flex align-items-center parent text-white font-weight-bolder" href="#">
                                                            CHECKLIST
                                                        </a>

                                                        <div id="collapseOne" class="child-nav collapse show ml-3">
                                                            <ul class="nav flex-column">
                                                                <li class="nav-item" onClick={() => setClickedItem('Pre-Launch')}>
                                                                    {clickedItem==='Pre-Launch' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Pre-Launch</NavLink>
                                                                    :
                                                                    <NavLink href="#">Pre-Launch</NavLink>
                                                                    }
                                                                </li>
                                                                <li class="nav-item" onClick={() => setClickedItem('Beta Access')}>
                                                                    {clickedItem==='Beta Access' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Beta Access</NavLink>
                                                                    :
                                                                    <NavLink href="#">Beta Access</NavLink>
                                                                    }
                                                                </li>
                                                                <li class="nav-item" onClick={() => setClickedItem('Launch')}>
                                                                    {clickedItem==='Launch' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">Launch</NavLink>
                                                                    :
                                                                    <NavLink href="#">Launch</NavLink>
                                                                    }
                                                                </li>
                                                                <li class="nav-item" onClick={() => setClickedItem('After Launch')}>
                                                                    {clickedItem==='After Launch' ? 
                                                                    <NavLink className="text-success font-weight-bold" href="#">After Launch</NavLink>
                                                                    :
                                                                    <NavLink href="#">After Launch</NavLink>
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                    <li class="nav-item mt-4">
                                                        <Link to={"/create-resource"}>
                                                            <a class="nav-link d-flex align-items-center parent" href="#">
                                                                RESOURCES
                                                            </a>
                                                            <div id="collapseTwo" class="child-nav collapse show ml-3">
                                                                <ul class="nav flex-column">
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Promotion Platform</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Audience Target</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Article Writing</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Customer Support</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Tracking Tools</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" href="#">Beta Test Tool List</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="col-xl-9">
                                        <div class="checkList">
                                            <div class="title">Checklist Creation</div>

                                            <InputGroup className="mb-3 mt-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className='text-gray-dark font-weight-bold'>
                                                        Name:
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl className='text font-weight-bold text-dark' placeholder="Enter checklist name" onChange={(e) => setChecklistName(e.target.value)}/>
                                            </InputGroup>

                                            {/* Render Checklist Parts Components */}
                                            <ChecklistParts clickedItem={clickedItem} setClickedItem={setClickedItem}/>
                                            
                                        </div>

                                        <form class="mt-2">
                                            <div class="scroll">
                                                <div class="checkForm">
                                                    {(() => {
                                                        switch (clickedItem) {
                                                        case "Pre-Launch":      return <CheckboxStep1 />;
                                                        case "Beta Access":     return <CheckboxStep2 />;
                                                        case "Launch":          return <CheckboxStep3 />;
                                                        case "After Launch":    return <CheckboxStep4 />;
                                                        default:                return null;
                                                        }
                                                    })()} 
                                                </div>
                                            </div>
                                            <div class="form-group mt-5 d-flex justify-content-center">
                                                <button type="button" class="btn btn-primary primaryBtn save px-5" onClick={onSaveCheckLists}>
                                                    <i className="fa fa-save mr-2" /> 
                                                    SAVE CHECKLIST
                                                </button>
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
    } else {

        return (
            <>
            <section className="section-dark section-xl my-0">
            <Alert variant="success mb-5">
        <Alert.Heading className="text-white">Checklist "{checklistName}" saved successfully!</Alert.Heading>
            </Alert>  
            </section>

            

            <CheckBoxResults name={checklistName} step1={Step1} step2={Step2} step3={Step3} step4={Step4} />
            </>
        )
    }
}

export default CreateChecklist