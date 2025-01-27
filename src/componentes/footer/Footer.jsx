import React from 'react'

export function Footer() {
  return (
   <div className='w-screen text-white'>
        <h3 className='text-lg font-bold'>Muestra de Spotify</h3>
        <div className="flex items-center">
  <p className="flex-1">
    Registrate para disfrutar de canciones y podcasts sin limites, con anuncios ocasionales. No hace falta tarjeta de credito.
  </p>
  <button
    className="bg-white rounded-2xl text-black font-bold py-2 px-4 m-2 mr-5 
    transition-transform duration-100 hover:scale-105 
    hover:bg-[#f0f0f0] ml-auto"
  >
    Registrate gratis
  </button>
</div>

   </div>
  )
}

export default Footer;