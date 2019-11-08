import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Detail from './Details';
import Pagination from "react-js-pagination";

class AllPlayer extends React.Component{
    constructor(){
        super();
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
  
    render(){
    }    
}
export default AllPlayer;