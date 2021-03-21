import React,{useState,createContext} from 'react';
import EmailTask from './EmailTask'
import {Navbar, Table} from 'react-bootstrap'
import DoneTarget from './DoneTarget'
import TodoTarget from './TodoTarget'
import WipTarget from './WipTarget'
import './App.css'

export const CardContext = createContext({
    markAsDONE: null,
    markAsTODO: null,
    markAsWIP: null,
})

const Tasks=() =>{
    const [tasklist, setTaskList] = useState([
        {   
            id: 1,
            title: 'Emailsubject1',
            sender: 'Zno00@mail.aub.edu',
            comment: "this is the Email's comment",
            status: "done",
            content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
            id: 2,
            title: 'Emailsubject2',
            sender: 'mat41@mail.aub.edu',
            comment: "this is the Email's comment",
            status: "wip",
            content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
        },
        {   
            id: 3,
            title: 'Emailsubject3',
            sender: 'yar04@mail.aub.edu',
            comment: "this is the Email's comment",
            status: "wip",
            content: 'cccccccccccccccccccccccccccccccccccccccc'
        },
        {
            id: 4,
            title: 'Emailsubject4',
            sender: 'iya06@mail.aub.edu',
            comment: "this is the Email's comment",
            status: "todo",
            content: 'dddddddddddddddddddddddddddddddd'
        },
        {
            id: 5,
            title: 'Emailsubject6',
            sender: 'iya06@mail.aub.edu',
            comment: "this is the Email's comment",
            status: "done",
            content:'null'
        }
    ]);

    const markAsDONE = id =>{
        const task = tasklist.filter((task,i) => task.id ===id);
        task[0].status = 'done';
        setTaskList(tasklist.filter((task,i) => task.id !== id).concat(task[0]));
    }
    const markAsTODO = id =>{
        const task = tasklist.filter((task,i) => task.id ===id);
        task[0].status = 'todo';
        setTaskList(tasklist.filter((task,i) => task.id !== id).concat(task[0]));
    }
    const markAsWIP = id =>{
        const task = tasklist.filter((task,i) => task.id ===id);
        task[0].status = 'wip';
        setTaskList(tasklist.filter((task,i) => task.id !== id).concat(task[0]));
    }

    return(
        <CardContext.Provider value={{markAsDONE,markAsTODO,markAsWIP}}>

    <div className='tabbable'>

            <Table>
                <thead>
                    <tr>
                    <th style={{paddingLeft:'12%'}}>ToDo</th>
                    <th style={{paddingLeft:'22%'}}>Work in progress</th>
                    <th style={{paddingRight:'5%'}} >done</th>
                    </tr>
                </thead>
                </Table>  

            <Navbar bg="light" expand="lg">
                </Navbar>    
            <div className='flexboxing'>

            <TodoTarget className="Todo">
               

                {tasklist
                .filter((task,i) => task.status==='todo')
                .map((task,i)=>(
                    <EmailTask
                    title = {task.title}
                    sender = {task.sender}
                    comment = {task.comment}
                    status = {'danger'}
                    id = {task.id}
                    content={task.content}
                    date= {task.date}
                    attachments= {task.attachments}
                    update_date= {task.update_date}
                    />
                    )
                    )
                    
                }
                
                <div style={{minHeight:'100px',
                            minWidth:'100px' }}>   

                </div>
            </TodoTarget>

            <WipTarget className="wip">
                

            {tasklist
                
                .filter((task,i) => task.status==='wip')
                .map((task,i)=>(
                    <EmailTask
                    title = {task.title}
                    sender = {task.sender}
                    comment = {task.comment}
                    status = {'warning'}
                    id = {task.id}
                    content={task.content}
                    />
                    )
                    )
                    
                }
                
                <div style={{minHeight:'100px',
                            minWidth:'100px' }}>   

                </div>
            </WipTarget>

            <DoneTarget className="done">
                

            {tasklist
                .filter((task,i) => task.status==='done')
                .map((task,i)=>(
                    <EmailTask
                    title = {task.title}
                    sender = {task.sender}
                    comment = {task.comment}
                    status = {'success'}
                    id = {task.id}
                    content={task.content}
                    />
                    )
                    )
                    
                }
                
                <div style={{minHeight:'100px',
                            minWidth:'100px' }}>   

                </div>
            </DoneTarget>
            
            </div>
            </div>
                
                </CardContext.Provider>
    );
}
export default Tasks;