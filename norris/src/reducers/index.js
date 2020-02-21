const initialState = {
    isLoading: false,
    chuckNorris: null,
    error: ''
    
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case "FETCHING_CHUCK_START":
        return{
            ...state,
            isLoading:true,
        }

        case "FETCHING_CHUCK_SUCCESS":
        return{
            ...state,
            isLoading:false,
        }

        default: return state;
        
    }
}