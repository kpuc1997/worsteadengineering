import {CHANGE_PAGE} from '../actions/action-types';

const initialstate = {
    active: 'Home',
    pages: ['Home', 'Greenville',],
};

function rootReducer(state=initialstate, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return (
                Object.assign({}, state, {active: action.active})
            )
        default:
        return(state);
    }
};

export default rootReducer;