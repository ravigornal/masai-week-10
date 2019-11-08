import React, { Component } from 'react'

import { connect } from 'react-redux'
import addPlayerDetails from './redux/actions/action'



let Details=[];
var a=JSON.parse(localStorage.getItem("Details"));
if(a===null){}
else{Details=[...a]}

class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id:null,
           name:'',
           country:'',
           t20:0,
           odi:0,
           test:0,
        }
      }
      handleChange=(event)=>{
          event.preventDefault();
           this.setState({
               [event.target.name]:event.target.value
              });
       }
       
       handleSubmit=(event)=>{
          event.preventDefault();
          var obj={
              id:this.state.id++,
              name:this.state.name,
              playerName:this.state.playerName,
              country:this.state.country,
              t20:this.state.t20,
              odi:this.state.odi,
              test:this.state.test
          }	
          Details.push(obj);
          localStorage.setItem("Details",JSON.stringify(Details));
        console.log(this.state)
       }
  render() {
    return (
        <div style={{marginLeft:"230px",marginTop:"100px"}}>
          <h3 className="offset-2 mb-5 " style={{marginRight:"150px"}}>ADD INFORMATION ABOUT PLAYER </h3> 
          <form onSubmit={this.handleSubmit}>
            <h6 style={{textAlign:'center'}}>Player Name</h6>
            <input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="playerName" value={this.state.playerName} onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>Country</h6>
            <select className="form-control w-40 col-3 mb-2" name="country" style={{textAlign:'center',marginLeft:'420px'}} value={this.state.country} onChange={(e)=>this.handleChange(e)}>
              <option value=" ">SELECT COUNTRY</option>
              <option value="India">INDIA</option>
              <option value="Australia">AUSTRALIA</option>
              <option value="England">ENGLAND</option>
              <option value="South Africa">SOUTH AFRICA</option>
              <option value="Pakistan">PAKISTAN</option>
              <option value="Bangladesh">BANGLADESH</option>
              <option value="Sri Lanka">SRI LANKA</option>
              <option value="New Zealand">NEW ZEALAND</option>
              <option value="Afganistan">AFGANISTAN</option>
              <option value="West Indies">WEST INDIES</option>
            </select> 
            <h6 style={{textAlign:'center'}}>T-20 Score</h6>
            <input type="text" className="form-control col-3 mb-2" style={{textAlign:'center',marginLeft:'420px'}} required name="t20" value={this.state.t20} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>ODI Score</h6>
            <input type="text" className="form-control w-60 mb-2 ml-8 col-3" style={{textAlign:'center',marginLeft:'420px'}}  required name="odi" value={this.state.odi} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>Test Score</h6>
            <input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="test" value={this.state.test} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <button className="btn btn-secondary w-40 " >Submit</button>
          </form> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  console.log("mapDispatch to props")
  return{
    add:value => dispatch(addPlayerDetails(value))
  }
}

export default connect(null,mapDispatchToProps) (Create);
