const initialState = {
    username: '',
    email: ''
}

const inputChangeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_USERNAME':
            console.log(action.username)
            return {
                ...state,
                username: action.username
            }
        case 'CHANGE_EMAIL':
            console.log(action.email)
            return {
                ...state,
                email: action.email
            }
        default:
            return state
    }
}

export default inputChangeReducer;