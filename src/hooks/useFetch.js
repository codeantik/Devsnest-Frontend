import { useState, useEffect } from "react";
import axios from 'axios'

export const useFetch = (url) => {

    const [data, setData] = useState([])

    const fetchUsers = async () => {
        try {
            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return { data }
}
 