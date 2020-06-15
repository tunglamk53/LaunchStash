import React, { useState, useEffect } from 'react';
import ChecklistsTable from '../pages/components/ChecklistsTable'
import CheckboxItem from "./components/CheckboxItem";

const ChecklistPage = () => {
        const [checklists, setChecklists] = useState()

        const [ clickedItem, setClickedItem ] = useState(null)

        useEffect(() => {
            const fetchData = async() => {
                const res = await fetch(
                    `/user/my-checklist/${localStorage.getItem('myEmail')}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'token-backend': localStorage.getItem('myToken'),
                            'email-backend': localStorage.getItem('myEmail')
                        }
                    })
                if(res.status === 200) {
                  const checklists = await res.json()
                  setChecklists(checklists)
                }
            }
            fetchData();

        }, [setChecklists])
        console.log(clickedItem);


        if(!clickedItem)
            return (
                <>
                <div className="create-checklist-wrapper">
                    <h1 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>My Checklists List</h1>
                </div>

                <div className="create-checklist-wrapper mt-5">
                <div className="create-checklist-inner">
                    <ChecklistsTable checklists={checklists} setClickedItem={setClickedItem} />

                </div>
                </div>
                </>
            )


        else {
            return (
                <>
                <div className="create-checklist-wrapper">
                <div className="create-checklist-inner">
                    <CheckboxItem clickedItem={clickedItem}/>
                </div>
                </div>
                </>
            )
        }
}

export default ChecklistPage

