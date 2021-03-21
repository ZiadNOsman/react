import React, {useState, useContext} from 'react';
import {Container} from 'react-bootstrap'
import {CardColumns, Table} from 'react-bootstrap'
import {useDrop} from 'react-dnd';
import {ItemTypes} from './utils/Items'
import {CardContext} from './Tasks'

//taget for "done"

const DoneTarget = props =>{

    const {markAsDONE
    } = useContext(CardContext);

    const[{isOver},drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item,monitor) =>markAsDONE(item.id),
        collect: monitor =>({
            isOver: !!monitor.isOver(),
        }),

    })

    return(
        <Table 
        ref={drop}

        >
            <div
            style = {isOver? {backgroundColor:'rgb(65, 138, 65)'}: {backgroundColor:'white'}}>


            {props.children}
            </div>
        </Table>
        )
}

export default DoneTarget;