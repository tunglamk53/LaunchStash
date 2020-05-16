import React from 'react'
import { Badge } from 'react-bootstrap';


const checklist = ({part1,part2,part3}) => {


    return (
        <>
            <Badge pill variant="success">Part 1: {part1}</Badge>
            <Badge pill variant="info">Part 2: {part2}</Badge>
            <Badge pill variant="primary">Part 2: {part3}</Badge>
            <br/>
        </>
    )
}

export default checklist