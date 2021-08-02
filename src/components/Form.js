import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation, searchLocation } from '../actions'

const Form = () => {

    const location = useSelector(state => state.getLocation)
    const dispatch = useDispatch()

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className='w-full max-w-sm'>
                <div className='flex justify-center items-center border-b-2 border-teal-500 py-2'>
                    <input
                     type='text'
                     value={location}
                     placeholder='Type a location'
                     className='appearance-none dark:text-white bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                     onChange={(e) => {
                        dispatch(getLocation(e.target.value))
                     }}
                    />
                    <button 
                     className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                     type="submit"
                     onClick={(e) => {
                         e.preventDefault()
                         dispatch(searchLocation(location))
                        }
                     }
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
