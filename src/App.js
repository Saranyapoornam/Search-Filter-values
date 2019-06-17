import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      search:"",
      contacts:[
        {id:1,name:"Saranya",number:994739463},
        {id:2,name:"Monica",number:994739463},
        {id:3,name:"Dhaarani",number:994739463},
        {id:4,name:"Usha",number:994739463},
        {id:5,name:"Priya Dharshini",number:994739463}
      ]
    }
  }
  SearchVal = (event)=>{
    this.setState({
      search:event.target.value.substr(0,20)
    })
  }
  addContact =(event) =>{
    event.preventDefault()
    let name = this.refs.name.value
    let number = this.refs.number.value
    let id = Math.floor((Math.random()*100)+1)
    this.setState({
      contacts :this.state.contacts.concat({id,name,number})
    })
  }
  render(){
    const contactsall = this.state.contacts
    const filteredContact = contactsall.filter(contact =>{
      
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      
    })
    return (
      <div className="App">
        
         <label for="search">Search by name </label>
        <input type="text" value={this.state.search} onChange={(e)=>this.SearchVal(e)} placeholder="Search "/>
        <form onSubmit={this.addContact}>
          <input type="text" ref="name" />
          <input type="number" ref="number" />
          <button type="submit">Add contact</button>
        </form>
        <ul>
        {
          filteredContact.map(contact => <li key={contact.id}>{contact.name} {contact.number}</li>)
        }
        </ul>
       
      </div>
    );
  }
  
}

export default App;
