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
                <div className="loading__logo">
                   <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647875261/Cruel/logo-svg_uvweui.svg'/>
                </div>     
            </div>
          </div>   
        </div>
    </div> 
    </>
  )
}
