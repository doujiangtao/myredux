
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes'
const defaulState = {
    Inputvalue: 'jspang',
    list: ['spz', 'hah', 'kkk', 'pdn']
};
const reducer = (state = defaulState, action) => {
    
    //reducer只能接收state不能改变state
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.Inputvalue = action.value
            break;
        case ADD_ITEM:
            if (newState.Inputvalue === '') return;
            newState.list.push(newState.Inputvalue);
            newState.Inputvalue = '';
            break;
        case DELETE_ITEM:
            newState.list.splice(action.Index, 1);
            break;

        default:
            
    }

    return newState;
}

export default reducer

