import React from 'react'
import './splash.css'

export default function Splash() {
  return (    
    <>
    <div id="loader" className="loading">        
        <div className="loading__blur-container" >                        
            <div className="loading__circle-container">
            <div className="loading__circle loading__circle--top"></div>
            <div className="loading__circle loading__circle--right"></div>
            <div className="loading__circle loading__circle--bottom"></div>
            <div className="loading__circle loading__circle--left"></div>
            <div className="loading__circle--center">
                <div >
                   {/* <img src='https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670171244/Thiale_free-file_b4rdo9.png'/> */}
                   <img className="loading__logo" src='https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670172315/Thiale_free-file_1_afs8mh.png'/>
                   {/* <p className='titulo-loading'>Thiale</p>
                   <p className='subtitulo-loading'>Indumentaria</p> */}
                </div>     
            </div>
          </div>   
        </div>
    </div> 
    </>
  )
}
