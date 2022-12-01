import React from 'react'
import Navbar from './Navbar.'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home/Home'
import CocteleriaDeAutor from '../Pages/Tragos/CocteleriaDeAutor/CocteleriaDeAutor'
import Tonicos from '../Pages/Tragos/Tonicos/Tonicos';
import Clasicos from '../Pages/Tragos/Clasicos/Clasicos';
import Whiskys from '../Pages/Tragos/Whiskys/Whiskys';
import Vinos from '../Pages/Tragos/Vinos/Vinos';
import Principales from '../Pages/Platos/Principales/Principales';
import Postres from '../Pages/Platos/Postres/Postres';
import Tapas from '../Pages/Platos/Tapas/Tapas';
import './rutas.css'

  
export default function Rutas() {
  

  return (
    <>
          <div className='escritorio'>
            <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1652208803/Cruel/cruel_escritorio_nzo9b1.jpg'  alt="cruel"/>
          </div>
          <div className='mobile'>
            <BrowserRouter>
                <Navbar/>
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/CocteleriaDeAutor" element={<CocteleriaDeAutor />} />
                    <Route path="/Tonicos" element={<Tonicos />} />      
                    <Route path="/Clasicos" element={<Clasicos />} />      
                    <Route path="/Whiskys" element={<Whiskys />} />      
                    <Route path="/Vinos" element={<Vinos />} />      
                    <Route path="/Tonicos" element={<Tonicos />} />  
                    <Route path="/Principales" element={<Principales />} />    
                    <Route path="/Postres" element={<Postres />} />    
                    <Route path="/Tapas" element={<Tapas />} />                      
                </Routes>
            </BrowserRouter>

          </div>

   
    </>

  )
}
