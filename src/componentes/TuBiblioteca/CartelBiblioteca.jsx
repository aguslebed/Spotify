import React from 'react'

export function CartelBiblioteca({titulo, descripcion, textoBoton}) {
  return (
    <div className='bg-[#2a2a2a] text-white mx-4  px-6 rounded-2xl'>
        <h3 className='text-lg py-2'>{titulo}</h3>
        <p className='text-sm py-2'>{descripcion}</p>
        <button className='text-lg text-black bg-white my-2 py-1 px-8 rounded-2xl
        transition-transform duration-100
        hover:scale-105 hover:bg-[#f0f0f0]
        '>{textoBoton}</button>
    </div>
  )
}
export default CartelBiblioteca;