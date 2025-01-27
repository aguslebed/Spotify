import { useState } from 'react'
import './App.css'
import BarraNavegacion from './componentes/barraNavegacion/barraNavegacion'
import Biblioteca from './componentes/TuBiblioteca/Biblioteca'
import Contenido from './componentes/Contenido/Contenido'
import Tarjeta from './componentes/Tarjeta/Tarjeta'
function App() {


  return (
    <div className='min-h-screen'>
    <div className="bg-black flex flex-col">

<div className="p-2 sticky top-0 z-20 bg-black rounded-2xl">
    <BarraNavegacion />
  </div>


      <div className="grid grid-cols-6 z-10 ">

        <div className="tuBiblioteca bg-[#121212] rounded-xl"
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15), #121212 20%)`,
          }}
        >
          <Biblioteca />
        </div>


        <div
          className="contenido col-span-5 text-white rounded-xl grid grid-rows-4 p-3 mx-2  "
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15), #121212 20%)`,
          }}
        >
          <div className="artistas-populares ">
                      <h3 className='text-2xl font-bold'>Artistas Populares</h3>
                      <div className="tarjetas grid grid-cols-6">
                      <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />
                      <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />
                      <Tarjeta className="w-full" titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"} />
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={true} imagenSrc={"rammstein.jfif"}/>
                      </div>
                    </div>
                    <div className="albumes-populares">
                      <h3 className='text-2xl font-bold'>Álbumes Populares</h3>
                      <div className="tarjetas grid grid-cols-6">
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                      </div>
                    </div>
                    <div className="emisoras-populares">
                      <h3 className='text-2xl font-bold'>Emisoras Populares</h3>
                      <div className="tarjetas grid grid-cols-6">
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                      </div>
                    </div>
                    <div className="listas-seleccionadas">
                      <h3 className='text-2xl font-bold'>Listas seleccionadas</h3>
                    <div className="tarjetas grid grid-cols-6">
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"} />
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                        <Tarjeta titulo={"asdasd"} descripcion={"asaaaaaaaaaa"} artista={"Rammstein"} esArtista={false} imagenSrc={"zeit.jfif"}/>
                      </div>
                    </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App
