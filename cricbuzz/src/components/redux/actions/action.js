
const ADD_PLAYER = "ADD_PLAYER"

const addPlayerDetails = value =>{
    return{
        type: ADD_PLAYER,
        playerName: value.playerName,
        country : value.country,
        t20 : value.t20,
        odi : value.odi,
        test : value.test
    };
};

export default {addPlayerDetails};