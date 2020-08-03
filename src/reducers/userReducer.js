
const initState={
    loading:false,
    authError:null
}

const userReducer = (state=initState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading:true
            };
        case "STOP_LOADING":
            return {
                ...state,
                loading:false
            };
        case "AUTHERROR":
            return {
                ...state,
                loading:false,
                authError: action.payload
            }
        default:
           return state;
    }
}

export default userReducer;
