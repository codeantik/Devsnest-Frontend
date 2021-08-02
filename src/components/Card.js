import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const data = useSelector(state => state.searchLocation)


    return (
            <div className='min-w-xs max-w-sm mx-auto my-20 rounded overflow-hidden shadow-lg dark:bg-gray-900 dark:border-4 dark:border-gray-50'>
                {Object.keys(data).length === 0 ? <h1 className='text-3xl text-center dark:text-white'>No Data Found</h1>:
                    <div> 
                        <img src={data.current.condition.icon} alt="img" className='max-w-xl h-20 mx-auto my-5'/>
                        <div className="flex justify-center items-center flex-col">
                            <h1 className='text-5xl font-semibold py-3 dark:text-white'>{data.current.temp_c}&#8451;</h1>
                            <p className='py-2 dark:text-white'>{data.current.condition.text}</p>
                            <h3 className='text-2xl text-blue-400 font-semibold'>{data.location.name}</h3>
                        </div>
                        <div className="flex justify-around my-5">
                            <div className='block'>
                                <p className='text-center dark:text-white'>Wind</p>
                                <p className='text-center text-xl font-semibold dark:text-white'>{data.current.wind_kph}kph</p>
                            </div>
                            <div className="block">
                                <p className='text-center dark:text-white'>Humidity</p>
                                <p className='text-center text-xl font-semibold dark:text-white'>{data.current.humidity}%</p>
                            </div>
                            <div className="block">
                                <p className='text-center dark:text-white'>Precipitation</p>
                                <p className='text-center text-xl font-semibold dark:text-white'>{data.current.precip_mm}mm</p>
                            </div>
                        </div>
                    </div>
                }
            </div>       
        ) 
        
}

export default Card
