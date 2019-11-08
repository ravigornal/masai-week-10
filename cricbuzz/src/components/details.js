import React from 'react'
import axios from 'axios'
var total = 0;
class Details extends React.Component{
    constructor(props){
        super(props);
        let retrieveData = localStorage.getItem("Details");
        let details = JSON.parse(retrieveData)
        this.state = {
            element : details,
            api: ''
        }
    }

    componentDidMount = () =>{
        axios("http://numbersapi.com/" +total + "?json")
        .then(response => {
            console.log(response)
            this.setState({
                api:response.data.text
            })
        })
        console.log(this.state.api)
    }


    render(){
        console.log(this.props)
        let player = this.state.element.find((item) => {
            return this.props.match.params.id == item.playerName
        })
        console.log(player)
        //total = Number(player.t20) + Number(player.t20) + Number(player.t20)
        return(
            <div>
                <table class="table table-dark">
                    <tbody>
                    <tr>
                        <th scope="row">NAME</th>
                        <td>{player.playerName}</td>
                    </tr>
                    <tr>
                        <th scope="row">COUNTRY</th>
                        <td>{player.country}</td>
                    </tr>
                    <tr>
                        <th scope="row">T20 SCORE</th>
                        <td>{player.t20}</td>
                    </tr>
                    <tr>
                        <th scope="row">ODI SCORE</th>
                        <td>{player.odi}</td>
                    </tr>
                    <tr>
                        <th scope="row">TEST SCORE</th>
                        <td>{player.test}</td>
                    </tr>
                    <tr>
                        <th scope="row">TOTAL SCORE</th>
                        {/* <td>{total}</td> */}
                    </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default Details;