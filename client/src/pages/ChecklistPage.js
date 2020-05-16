import React, { useState, useEffect } from 'react';  
import CheckList from './components/checklist';


const ChecklistPage = () => {
    const [data, setData] = useState()
    // const email = localStorage.getItem('myEmail')

    

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                `/user/my-checklist/${localStorage.getItem('myEmail')}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token-backend': localStorage.getItem('myToken'),
                        'email-backend': localStorage.getItem('myEmail')
                    }   
                });
            const body = await result.json()
            // const jsonBody = JSON.stringify(body)
            setData({ nlist: body[0].checklist})
    console.log(body);


        }
        fetchData();
    },[setData])

    console.log(data);


    // const data3 = data.map(x => JSON.stringify(x))
    // console.log(data3);


    return(
        <>
        <h1>My Checklists List</h1>
        {data ? 
            data.nlist.map(
                // (item,i) => (<p key={i}>{item.part1}</p>)) 
                (item,i) => <CheckList key={i} part1={item.part1} part2={item.part2} part3={item.part3} />) 
        : null}
        </>
    )
}

export default ChecklistPage