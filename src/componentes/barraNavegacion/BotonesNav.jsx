import React from 'react'

export  function BotonesNav({texto}) {
  return (
   <div>
    <button className='text-[#b3b3b3] font-bold
    hover:text-white hover:cursor-pointer
    '>{texto}</button>
   </div>
  )
}
export default BotonesNav