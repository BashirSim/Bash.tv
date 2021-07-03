import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        // We didnt assign id here to the payload b/c the payload is the id itself at
        // the actions, so we dont have to refrence the id proprty.
        // omit function create a new object so we dont have to replace the prev. object.
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
};
