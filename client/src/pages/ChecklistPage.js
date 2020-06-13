import React, { useState, useEffect } from 'react';
import CheckList from './components/checklist';


const ChecklistPage = () => {
        const [data, setData] = useState()

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
                  const body = await res.json()
                  setData({ checklists: body.checklist })
                  console.log(body);
                }
            }
            fetchData();
        }, [setData])

        // console.log(data);

        return (
            <>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <h1> My Checklists List </h1>
                {data ?
                  data.checklists.map((item, i) => {
                      // console.log(item._id)
                    return (
                        <CheckList key={i}
                            part1={item.part1}
                            part2={item.part2}
                            part3={item.part3}
                            checklistId={item._id}
                            setData={setData}
                            // setDelClicked={setDelClicked}
                        />
                    )
                  })
                : null}
              </div>
            </div>
            </>
        )
}

export default ChecklistPage
