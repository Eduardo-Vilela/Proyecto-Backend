import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LogoBarraMorfi from '../../../Components/img/barramorfi.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import "../CocteleriaDeAutor/cocteleriadeautor.css";



// import required modules
import { EffectCreative } from "swiper";
// import required modules
import { Pagination } from "swiper";

export default function Tonicos() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Tónicos</p>
      <hr className="linea-sub"/>
      <Swiper
        pagination={{
        type: "fraction",
         }}
        
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative,Pagination]}
        className="menu-slider"
      >
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199395/Cruel/Tragos/Tonicos/ETEREO_edn2r4.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>ETÉREO</h5>
                  <p className="descripcion">Gin macerado en jengibre, Agua tónica Almíbar de jengibre</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199241/Cruel/Tragos/Tonicos/PECADO_ORIGINAL_fsr4aa.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PECADO ORIGINAL</h5>
                  <p className="descripcion">Gin, Malibú, Licor de Cassis, Campari, Jugo de Limón, Maracuyá, Tonica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$000,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199452/Cruel/Tragos/Tonicos/ANTES_Y_DESPUES_h22kua.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>ANTES Y DESPUÉS</h5>
                  <p className="descripcion">Gin, Lunfa rosado , Almíbar simple Uva, Agua tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199508/Cruel/Tragos/Tonicos/RED_CUCUMBER_unndgu.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>RED CUCUMBER</h5>
                  <p className="descripcion">Gin, Almíbar de frutos rojos Agua tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$500,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
{ /*       <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>TÓNICO #4</h5>
                  <p className="descripcion">Gin Dealers, Punt e mes, Pomelo Almíbar maracuyá , Agua tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>SOFT TÓNIC</h5>
                  <p className="descripcion">Gin Dealers, Hesperidina, Agua tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$450,00</p> 
                </div>
             
              </div>
          </div>
      </SwiperSlide>*/}
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199555/Cruel/Tragos/Tonicos/SMASH_DE_VERANO_bnftif.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>SMASH DE VERANO</h5>
                  <p className="descripcion">Gin, Jugo de limón, Jugo de ananá, Albahaca, Amíbar simple, Golden age elderflower</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$600,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>    
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199759/Cruel/Tragos/Tonicos/SOUR_PLATENSE_xstzmi.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>SOUR PLATENSE</h5>
                  <p className="descripcion">Gin macerado en té y pepino, Lunfa rosado Limón, Almíbar simple, Clara de huevo</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$600,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>    
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199801/Cruel/Tragos/Tonicos/ESTILO_NEOYORQUINO_w6krto.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>ESTILO NEOYORQUINO</h5>
                  <p className="descripcion">Gin, Jugo de limón, Almíbar de frutos rojos, Clara de huevo, Vino Malbec</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>   


      </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
