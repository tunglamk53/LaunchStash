import React from 'react'
import {Table} from 'react-bootstrap';
import Loading from './components/Loading'
import ExportPdf from './utils/ExportPdf'

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
                 <td className=''>1</td>
                  <td className=''>
                    <button className="btn btn-link text-danger" onClick={() => onClickItemHandle(item)} >{item.name}</button>
                  </td>
                  <td>
                    <button className="float-right badge-pill small btn-outline-secondary" onClick={() => onDeleteButton(item)}>Delete</button>
                  </td>
                  <td>
                    <button className="float-right badge-pill small btn-primary" onClick={() => ExportPdf(item)}>Export PDF</button>
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
    <Table className='table-hover table-striped table-borderless'>
    <thead className='bg-gradient-gray-dark'>
      <tr className='text-white text-uppercase'>
        <th>#</th>
        <th>Checklists Name</th>
        <th></th>
        <th></th>

      </tr>
    </thead>

    {/* Render table's Rows */}
    {renderColumns()}


  </Table>
  </>
  )
}

export default ChecklistsTable
