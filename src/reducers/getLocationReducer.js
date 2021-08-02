const getLocationReducer = (state = '', action) => {
    switch(action.type) {
        case 'GET_LOCATION':
            return action.payload
        default:
            return state
    }
}

export default getLocationReducer