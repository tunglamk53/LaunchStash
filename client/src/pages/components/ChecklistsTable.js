import React from 'react'
import {Table} from 'react-bootstrap';
import Loading from './Loading'

const ChecklistsTable = (props) => {

  const onClickItemHandle = (item) => {
    props.setClickedItem(item)
  }

  const onDeleteButton = async (item) => {
    const res = await fetch(`/user/my-checklist/${localStorage.getItem('myEmail')}/${item._id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'token-backend': localStorage.getItem('myToken'),
        'email-backend': localStorage.getItem('myEmail')
      }
    })

    if(res.status === 200) {
      const newChecklists = await res.json()
      props.setChecklists(newChecklists)
    }
  }

  const renderColumns = () => {
    console.log(props.checklists)
    return (
      <tbody>
          {props.checklists ?
            props.checklists.map((item) => (
                <tr key={item._id}>
                 <td className='text-lg-center text-secondary text-uppercase'>1</td>
                  <td className='text-secondary'>
                    <button className="btn btn-link text-danger" onClick={() => onClickItemHandle(item)} >{item.name}</button>
                  </td>
                  <td>
                    <button className="float-right badge-pill small btn-outline-secondary" onClick={() => onDeleteButton(item)}>Delete</button>
                  </td>
                </tr>
            ))
          : null}
      </tbody>
    )
  }

  if(!props.checklists)
    return <Loading />



  return (
    <>
    <Table className='table-hover'>
    <thead>
      <tr className='btn-light'>
        <th className='text-lg-center text-secondary text-uppercase'>#</th>
        <th className='text-lg-center text-secondary text-uppercase'>Checklists Name</th>
        <th></th>
      </tr>
    </thead>
    {renderColumns()}
  </Table>
  </>
  )
}

export default ChecklistsTable
