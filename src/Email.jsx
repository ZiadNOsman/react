import React from 'react';
import mail from './css/mail.css';

export default class PersonList extends React.Component {
  state = {
    loading : true,
    Name : null,
    Email_address : null,
    Email_sender : null,
    content:null,
    Id:null,

    Name2 : null,
    Email_address2 : null,
    Email_sender : null,
    content2:null,
    Id2 :null,

    
    
    
  };
  

  async componentDidMount(){
    
    const url = "http://localhost:3001/api/Emails"
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    this.setState({Id:data.recordset[0].Id})
    this.setState({Name:data.recordset[0].Name})
    this.setState({Email_address:data.recordset[0].Email_sender})
    this.setState({content:data.recordset[0].Content})

    this.setState({Id2:data.recordset[1].Id})
    this.setState({Name2:data.recordset[1].Name})
    this.setState({Email_address2:data.recordset[1].Email_sender})
    this.setState({content2:data.recordset[1].Content})
    
    
  }
  

  render() {
    
    
    
    return (
      <div>
      <div className="email">
        <h2>Id#: {this.state.Id}</h2>
        <p>Project: {this.state.Name} </p>
        
        <p>From: {this.state.Email_address}</p>
        
        <p>Content: {this.state.content}</p>

      </div>
      
      <div className="email">
      <h2>Id#: {this.state.Id2}</h2>
        <p>Project: {this.state.Name2} </p>
        
        <p>From: {this.state.Email_address2}</p>
        
        <p>Content: {this.state.content2}</p>
      </div>
      

      </div>
    )
  }
}