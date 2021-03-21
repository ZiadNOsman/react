import React from 'react'
import {Button,Card} from 'react-bootstrap'
import {useDrag} from 'react-dnd';
import {ItemTypes} from './utils/Items'
export default function EmailTask(props){
    // props.title=null;
    // props.sender=null;
    // props.comment=null;
    // props.status=null;
    const [{isDragging},drag] = useDrag({
        item:{
            type: ItemTypes.CARD,
            id: props.id,
            content:props.content,
            date: props.date,
            attachments: props.attachments,
            update_date: props.update_date

        },
        collect: monitor =>({
            isDragging: !!monitor.isDragging()
        })
    });
    
    return(
        <Card ref = {drag}
        border={isDragging ? 'primary': 'light'}
        >
            
        <Card.Title style = {{paddingLeft:'5px'}}>{props.title} </Card.Title>
        <Card.Subtitle style = {{paddingLeft:'10px'}}> {props.sender}</Card.Subtitle>
        <Card.Text>
         <small  style = {{paddingLeft:'2px'}}>{props.comment}</small>
       </Card.Text>
       <Button variant={props.status}>Expand email</Button>
    </Card>
        );
};



