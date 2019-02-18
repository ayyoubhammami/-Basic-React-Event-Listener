import React, { Component } from 'react';
import amine from './amine.jpg';
import yahia from './yahia.jpg';
import elyes from './elyes.jpg';
import './App.css';

class App extends Component {
  state= {
    list:[
      {image:amine,title:'Amine' ,desc:'Amine ==========> mal9it ma nekteb'},
      {image:yahia,title:'Yahya' ,desc:'Yahya ==========> mal9it ma nekteb'},
      {image:elyes,title:'Elyes' ,desc:'Elyes ==========> mal9it ma nekteb'}
    ],
    currentIndex:0
  }
  render() {
    return (
      <div className="dv">
    <button onClick={()=>{this.setState({currentIndex:0})}}>Amine</button>
    <button onClick={()=>{this.setState({currentIndex:1})}}>Yahya</button>
    <button onClick={()=>{this.setState({currentIndex:2})}}>Elyes</button>
    <br></br><br></br>
    <img src={this.state.list[this.state.currentIndex].image} style={{ border: '2px solid black',height:460,width:300,}}/><br></br>
    <p style={{fontSize:30,textAlign:"center", fontWeight:'500',backgroundColor:'black',color:'white',width:'130px',height:'45px',marginLeft:'700px',webkitTransform:'rotate(-10deg)'}} >{this.state.list[this.state.currentIndex].title}</p>

      
      <p >{this.state.list[this.state.currentIndex].desc}</p>
      </div>



    );
  }
}


export default App;
