
import { Get_MONGAS } from '../actions/type';


const MongReducers = (state = [], action) => {
    switch (action.type) {
        case Get_MONGAS:
            return action.payload
        default:
            return state;
    }

}

export default MongReducers;