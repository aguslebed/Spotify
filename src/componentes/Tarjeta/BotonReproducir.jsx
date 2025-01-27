
import React from 'react'

export function BotonReproducir() {
    return (
        <button className='p-4 bg-[#39db72] rounded-full
        cursor-pointer
        transition-transform duration-100
        hover:scale-105
        '>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="#121212" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
        </button>
    )
}
export default BotonReproducir;