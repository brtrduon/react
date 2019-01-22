import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        // for case 'FETCH_STREAMS, we are creating a new state (via spread operator), then we call mapKeys and take list of streams that we get back (via action.payload) and then we create a new object (via spread operator) out of the list of streams using mapKeys, & the keys inside of that object are the id's of the individual streams from the payload
        case 'FETCH_STREAMS':
            return {
                ...state,
                ..._.mapKeys(
                    action.payload,
                    'id'
                )
            }

        case 'FETCH_STREAM':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case 'CREATE_STREAM':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case 'EDIT_STREAM':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case 'DELETE_STREAM':
            return _.omit(
                state,
                action.payload
            )

        default:
            return state
    }
}