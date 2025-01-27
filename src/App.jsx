import { useState } from 'react'
import './App.css'
import BarraNavegacion from './componentes/barraNavegacion/barraNavegacion'
import Biblioteca from './componentes/TuBiblioteca/Biblioteca'
import Contenido from './componentes/Contenido/Contenido'
import Tarjeta from './componentes/Tarjeta/Tarjeta'
function App() {


  return (
<div className='h-screen overflow-hidden'>
    <div className="bg-black flex flex-col">

<div className="p-2 sticky top-0 z-20 bg-black rounded-2xl">
    <BarraNavegacion />
  </div>


      <div className="grid grid-cols-6 z-10 ">

        <div className="tuBiblioteca bg-[#121212] rounded-xl overflow-y-auto max-h-screen"
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15), #121212 20%)`,
          }}
        >
          <Biblioteca />
        </div>


        <div
         className="contenido col-span-5 text-white rounded-xl p-3 mx-2 overflow-y-auto max-h-screen"
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15), #121212 20%)`,
          }}
        >
          <Contenido/>
        </div>
      </div>
    </div>
</div>
  );
}

export default App
