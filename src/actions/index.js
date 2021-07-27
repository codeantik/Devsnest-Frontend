const userNameChange = (username) => {
    return {
        type: 'CHANGE_USERNAME',
        username,
    }
}

const emailChange = (email) => {
    return {
        type: 'CHANGE_EMAIL',
        email,
    }
}

export { userNameChange, emailChange }