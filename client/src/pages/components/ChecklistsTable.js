import React from 'react'
import {Table} from 'react-bootstrap';
import Loading from './Loading'

const ChecklistsTable = (props) => {

  const onClickItemHandle = (item) => {
    props.setClickedItem(item)
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
                      <button className="float-right badge-pill small btn-outline-secondary" >Delete</button>
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
