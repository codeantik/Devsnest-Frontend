const searchLocationReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SEARCH_LOCATION':
            return action.payload
        default:
            return state
    }
}

export default searchLocationReducer