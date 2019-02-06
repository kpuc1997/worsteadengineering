import {CHANGE_PAGE} from './action-types';


function changePage(page) {
    return(
        {
            type: CHANGE_PAGE,
            active: page,
        }
    )
};

export {changePage};