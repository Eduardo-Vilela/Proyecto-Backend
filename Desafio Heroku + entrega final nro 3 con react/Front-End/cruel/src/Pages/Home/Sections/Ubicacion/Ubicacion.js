import React from 'react'
import imageBar from './img/bar.png'
import './ubicacion.css'

export default function Ubicacion() {
  return (
      <>
    <div className='imagen-superior'>
        <img src={imageBar}/>
    </div>
    <div className='ubicacion-container'>        
        <div className='map-info-container'>
            <div className='map-info-titulo'>
                <hr/>
                <h5>Nuestra ubicación</h5>                
            </div>
            <div className='map-info'>
                <div className='ubicacion flex-info'>
                    <p className='col-izq-info'><b>Ubicación</b></p>
                    <p className='col-der-info'>calle 45 e/ 13 y 14 n940</p>
                </div>
                <div className='horarios flex-info'>
                    <p className='col-izq-info'><b>Horarios</b></p>
                    <p className='col-der-info'> Lunes cerrado<br/>Martes - Jueves open doors 18hs<br/> Viernes - Domingo open doors 20hs</p>
                </div>
                <div className='telefono flex-info'>
                    <p className='col-izq-info'><b>Teléfono</b></p>
                    <p className='col-der-info'>+542216056051</p>
                </div>
            </div>
        </div>    
    </div>
    <div className='mapa'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5410486239407!2d-57.96317358416735!3d-34.917965381701094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e633457cbc95%3A0xa3557bcff606fd29!2sCruel%2C%20barra%20%2F%20morfi!5e0!3m2!1ses-419!2sar!4v1647376632433!5m2!1ses-419!2sar" width="100%" height="250" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe>
    </div>
    </>
  )
}
