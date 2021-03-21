import React, {useState} from 'react';
import Email from './Email.jsx'
import Tasks from './Tasks'
import EmailTask from './EmailTask'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from  'react-dnd-html5-backend';
function App() {
  
  return (
    <div > 

   <div>
    <DndProvider backend= {HTML5Backend}>


    <Tasks/>
    </DndProvider>
    
     
     </div> 
      
<Email/>
    </div> 


  );
}

export default App;
