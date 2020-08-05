import React from 'react'
import { Badge } from 'react-bootstrap';

const checklist = (props) => {

    const deleteClk = async (event) => {
        event.preventDefault()
        const result = await fetch(`/user/my-checklist/${localStorage.getItem('myEmail')}/${props.checklistId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'token-backend': localStorage.getItem('myToken'),
                'email-backend': localStorage.getItem('myEmail')
            }
        })
        // const deletedChecklist = result.json()
        const body = await result.json()
        // const jsonBody = JSON.stringify(body)
        props.setData({ checklists: body.checklist })
    }

    return (
        <>
            <Badge pill variant="success">  Part 1: {props.part1}</Badge>
            <Badge pill variant="info">     Part 2: {props.part2}</Badge>
            <Badge pill variant="primary">  Part 2: {props.part3}</Badge>
            <Badge
                pill
                variant="danger"
                className="btn btn-warning float-right mt-1"
                onClick={deleteClk}
            >
                Delete
            </Badge>
            <br/>
        </>
    )
}

export default checklist