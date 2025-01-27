import { useState } from 'react'
import './App.css'
import BarraNavegacion from './componentes/barraNavegacion/barraNavegacion'
import Biblioteca from './componentes/TuBiblioteca/Biblioteca'
import Contenido from './componentes/Contenido/Contenido'
import Tarjeta from './componentes/Tarjeta/Tarjeta'
import Footer from './componentes/footer/Footer'

function App() {


  return (
    <div className='h-screen overflow-hidden'>
      <div className="bg-black flex flex-col">

        <div className="p-2 sticky top-0 z-20 bg-black rounded-2xl">
          <BarraNavegacion />
        </div>


        <div className="grid grid-cols-7 z-10 mx-2">

          <div className="tuBiblioteca col-span-2 bg-[#121212] rounded-xl overflow-y-auto max-h-screen"
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
            <Contenido />
          </div>
        </div>
      </div>

      <div className="footer sticky bottom-0 z-20 bg-gradient-to-r from-pink-500 to-blue-500 p-2">
        <Footer />
      </div>

    </div>
  );
}

export default App
