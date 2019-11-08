import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Detail from './Details';
import Pagination from "react-js-pagination";

class AllPlayer extends React.Component{
    constructor(props){
        super(props);
        let retrieveData = localStorage.getItem("Details");
        let details = JSON.parse(retrieveData)
        this.state = {
            element : details,
            activePage: 1
        }
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
  
    render(props){
        if(this.state.element != null){
            return(
                
                    <div>
                        <table class="table table-dark" style={{marginLeft:"600px",marginTop:"60px",width:"600px"}}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>COUNTRY</th>
                                    <th>T20</th>
                                    <th>ODI</th> 
                                    <th>TEST</th>
                                    <select className="form-control w-20  mb-2" name="Sort by"  value={this.state.country} onChange={(e)=>this.handleChange(e)}>
                                        <option value="Australia">Sort by</option>
                                        <option value="India">Country</option>
                                        <option value="Australia">Runs</option>
                                    </select> 
                                </tr>
                            </thead>
                            {this.state.element.map(ele =>{
                            console.log(ele)
                            return(
                                <tbody>
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.playerName}</td>
                                        <td>{ele.country}</td>
                                        <td>{ele.t20}</td>
                                        <td>{ele.odi}</td>
                                        <td>{ele.test}</td>
                                        <button type="button" class="btn btn-link"><Link to={`${props.match.url}/${ele.id}`}>View</Link></button>
                                    </tr>
                                </tbody>
                            )
                            })}
                        </table>
                    </div>
            )
        }
        else{
            return(
                <div style={{marginTop:"250px", marginLeft:"200px",textAlign:"center"}}>
                    <h1>No Details Found</h1>
                </div>
            )
        }
    }
}
export default AllPlayer;
