import React, {useState, useContext} from 'react';
import {Container} from 'react-bootstrap'
import {CardColumns, Table} from 'react-bootstrap'
import {useDrop} from 'react-dnd';
import {ItemTypes} from './utils/Items'
import {CardContext} from './Tasks'

//taget for "done"

const WipTarget = props =>{

    const {markAsWIP
    } = useContext(CardContext);

    const[{isOver},drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item,monitor) =>markAsWIP(item.id),
        collect: monitor =>({
            isOver: !!monitor.isOver(),
        }),

    })

    return(
        <Table 
        ref={drop}
        
        >
            <div
            style = {isOver? {backgroundColor:'rgb(231, 177, 38)'}: {backgroundColor:'white'}}>


            {props.children}
            </div>
        </Table>
        )
}

export default WipTarget;