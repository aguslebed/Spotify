
import React, {useState}from 'react'
import BotonReproducir from './BotonReproducir';

export function Tarjeta({ titulo, descripcion, artista, esArtista = false, imagenSrc }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='hover:bg-[#1f1f1f] hover:cursor-pointer py-2 px-3 w-fit rounded-md'
        onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
            {esArtista && (
                 <div className="relative">
                    <div className="relative">
                    <img src={imagenSrc} className='rounded-full ' alt="" />
                    {isHovered && (
                        <div className="absolute bottom-0 right-0 m-2">
                        <BotonReproducir/>
                        </div>
                    )}
                    </div>
                    <h3 className='text-2xl'>{artista}</h3>
                    <p className='text-[#b3b3b3]'>Artista</p>
                </div>
            )}

            {!esArtista && (

                <div>
                    <div className="relative">
                    <img src={imagenSrc} className='rounded-lg' alt="" />
                    {isHovered && (
                        <div className="absolute bottom-0 right-0 m-2">
                        <BotonReproducir/>
                        </div>
                    )}
                    </div>
                    <h3 className='text-2xl'>{titulo}</h3>
                    <p>{descripcion}</p>
                    <p className='text-[#b3b3b3]'>{artista}</p>
                </div>
            )}
        </div>
    )
}
export default Tarjeta;