
import { SET_INCREMENT, SET_DECREMENT } from '../actions/counterAction';

const initialState = {
    counter: 0
}

function countReducer(state = initialState, action) {
    switch(action.type){
        case SET_INCREMENT :
            return { ...state, counter: state.counter + 1 }

        case SET_DECREMENT :
            return { ...state, counter: state.counter - 1 }
        
        default:
            return state;
    }
}

export default countReducer;
