import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'

export default function Contenido() {
  return (
    <div className='grid grid-rows-4 gap-4'>
      <div className="artistas-populares ">
        <div className="header grid grid-cols-2">
          <h3 className='text-2xl font-bold'>Artistas Populares</h3>
          <a href="#" className='text-sm flex place-content-end text-[#b3b3b3] font-bold hover:underline'>Mostrar todos</a>
        </div>

        <div className="tarjetas grid grid-cols-6">
          <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />
          <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />
          <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />

        </div>
      </div>
      <div className="albumes-populares">

        <div className="header grid grid-cols-2">
          <h3 className='text-2xl font-bold'>Álbumes Populares</h3>
          <a href="#" className='text-sm flex place-content-end text-[#b3b3b3] font-bold hover:underline'>Mostrar todos</a>
        </div>


        <div className="tarjetas grid grid-cols-6">
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} /> <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
        </div>
      </div>
      <div className="emisoras-populares">

        <div className="header grid grid-cols-2">
          <h3 className='text-2xl font-bold'>Emisoras Populares</h3>
          <a href="#" className='text-sm flex place-content-end text-[#b3b3b3] font-bold hover:underline'>Mostrar todos</a>
        </div>


        <div className="tarjetas grid grid-cols-6">
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />

        </div>
      </div>
      <div className="listas-seleccionadas">


        <div className="header grid grid-cols-2">
          <h3 className='text-2xl font-bold'>Listas seleccionadas</h3>
          <a href="#" className='text-sm flex place-content-end text-[#b3b3b3] font-bold hover:underline'>Mostrar todos</a>
        </div>



        <div className="tarjetas grid grid-cols-6">
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
          <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />

        </div>
      </div>
    </div>
  )
}