import React, {useState, useContext} from 'react';
import {Container} from 'react-bootstrap'
import {CardColumns, Table} from 'react-bootstrap'
import {useDrop} from 'react-dnd';
import {ItemTypes} from './utils/Items'
import {CardContext} from './Tasks'

//taget for "done"

const TodoTarget = props =>{

    const {markAsTODO
    } = useContext(CardContext);

    const[{isOver},drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item,monitor) =>markAsTODO(item.id),
        collect: monitor =>({
            isOver: !!monitor.isOver(),
        }),

    })

    return(
        <Table 
        ref={drop}
        
        >
            <div
            style = {isOver? {backgroundColor:'rgb(182, 64, 64)'}: {backgroundColor:'white'}}>


            {props.children}
            </div>
        </Table>
        )
}

export default TodoTarget;