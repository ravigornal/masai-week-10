const ADD_PLAYER = "ADD_PLAYER"
let retrieveData = localStorage.getItem("Details");
let details = JSON.parse(retrieveData)

if(details != null){
    var init = details
}else{

}

const reducer = (state=init,action) => {
    switch(action.type){
        case ADD_PLAYER:
            let tempStorage ={
                playerName: action.playerName,
                country: action.country,
                t20: action.t20,
                odi: action.odi,
                test: action.test
            }
    }
}

export default reducer;