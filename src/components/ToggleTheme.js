import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../actions'

const ToggleTheme = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    return (
        <button
            className='bg-gray-700 text-white w-12 text-center dark:bg-white dark:text-black text-semibold px-5 py-1 flex justify-center relative top-2 left-2'
            onClick={() => dispatch(toggleTheme())}
        >
            {theme ? 'Dark' : 'Light'}
        </button>
    )
}

export default ToggleTheme
