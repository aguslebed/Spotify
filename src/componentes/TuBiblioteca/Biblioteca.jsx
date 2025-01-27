import React from 'react'
import CartelBiblioteca from './CartelBiblioteca';
import Footer from './Footer';
import BotonIdioma from './BotonIdioma';

export function Biblioteca() {
  return (
    <div className='text-[#b3b3b3] text-xl font-bold '>
      <div className="header grid grid-cols-2 m-4">
        <div className="titulo">
          <button className='hover:cursor-pointer hover:text-white'>Tu biblioteca</button>
        </div>
        <div className="icono flex place-content-end ">
          <button className='rounded-full p-2 hover:text-white hover:bg-[#2a2a2a] hover:cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </button></div>
      </div>

    <div className="carteles grid grid-cols-1">
        <div className="crearLista my-4">
        <CartelBiblioteca titulo={"Crea tu primera lista"} descripcion={"Es muy facil, y te echaremos una mano."} textoBoton={"Crear lista"}/>
        </div>
        <div className="explorarPodcasts my-4">
        <CartelBiblioteca titulo={"Encuentra pódcasts que quieras seguir"} descripcion={"Te avisaremos cuando salgan nuevos episodios"} textoBoton={"Explorar pódcasts"}/>
        </div>
        <div className="footer flex flex-col m-4">
        <Footer texto={"Legal"}/>
        <Footer texto={"Centro de seguridad y privacidad"}/>
        <Footer texto={"Politica de Privacidad"}/>
        <Footer texto={"Cookies"}/>
        <Footer texto={"Informacion sobre los anuncios"}/>
        <Footer texto={"Accesibilidad"}/>
        </div>

        <div className="botonIdioma flex mx-4">
          <BotonIdioma idioma={"Español"}/>
        </div>
    </div>

    </div>
  )
}

export default Biblioteca;