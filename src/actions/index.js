import axios from 'axios'

const getLocation = (location) => {
    return {
        type: 'GET_LOCATION',
        payload: location,
    }
}

const searchLocation = (location) => {
    return async (dispatch) => {
        try {
            const data = await axios(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`)
            console.log(data.data)

            dispatch({
                type: 'SEARCH_LOCATION',
                payload: data.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

const toggleTheme = () => {
    return {
        type: 'TOGGLE_THEME',
    }
}

export { getLocation, searchLocation, toggleTheme }
