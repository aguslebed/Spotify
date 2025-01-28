import React from 'react'

export function Footer() {
  return (
   <div className='w-screen text-white p-2'>
        <h3 className='text-lg font-bold'>Muestra de Spotify</h3>
        <div className="flex items-center">
  <p className="flex-1 text-sm">
    Registrate para disfrutar de canciones y podcasts sin limites, con anuncios ocasionales. No hace falta tarjeta de credito.
  </p>
  <button
    className="bg-white rounded-2xl text-black font-bold py-2 px-4  mr-5 
    transition-transform duration-100 hover:scale-105 
    hover:bg-[#f0f0f0] ml-auto"
  >
    <a href="https://www.spotify.com/ar/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fintl-es">Registrate gratis</a>
  </button>
</div>

   </div>
  )
}

export default Footer;