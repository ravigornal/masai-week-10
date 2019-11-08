import React from 'react'
import axios from 'axios'
function Detail(props){
var data = localStorage.getItem("Details");
var detailData = JSON.parse(data)
let text = ''
const playerObj = detailData.find(
    element => element.id === props.match.params.id
)
     //var total = Number(detailData[id-1].t20) + Number(detailData[id-1].odi) + Number(detailData[id-1].test)
     //console.log(total)
     

     return(
         <div>{playerObj.playerName}</div>
     )
 
     }
export default Detail;