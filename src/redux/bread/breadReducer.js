import { BUY_BREAD } from "./breadTypes";

const initialState = {
    numOfBread: 15
}

const breadReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_BREAD: return {
                ...state,
                numOfBread: state.numOfBread - 1
        }      
    
        default:
           return  state;
    }
};

export default breadReducer;