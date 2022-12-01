import React from 'react'
import Tragos from './img/iconosbebidas.svg'
import './lacrueldad.css'

export default function LaCrueldad() {
  return (
    <>
    <div className='seccion-titulo-tragos'>        
        <img src={Tragos}/>
        <h3>La mejor coctelería de autor y las mejores tapas de la ciudad </h3>
    </div>
    {/* <div className='seccion-lacrueldad-descripcion'>
        <div className='lacrueldad-descripcion'>
            <hr className='linea-descripcion'/>
            <h5>La Crueldad </h5>
            <p> Cras ultrices, dui eu feugiat vulputate, urna velit tincidunt eros. Mauris porta, purus ac feugiat ullamcorper, erat urna feugiat nulla,<br/><br/> lobortis porttitor orci elit eget lacus. Etiam et purus ultrices, faucibus mi quis, porttitor libero. Etiam dolor arcu, efficitur consectetur leo sed, bibendum consequat ante. Ut in fringilla ligula. Cras convallis semper lacus in lobortis.</p>
        </div>
        <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647355225/Cruel/la_crueldad_trago_g421iq.png'/>

    </div> */}
    </>
  )
}
