import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LogoBarraMorfi from '../../../Components/img/barramorfi.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import "../../Tragos/CocteleriaDeAutor/cocteleriadeautor.css";



// import required modules
import { EffectCreative } from "swiper";
// import required modules
import { Pagination } from "swiper";

export default function Postres() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Postres</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652112914/Cruel/Platos/Postres/MOUSSE_DE_L%C3%8DMON_vqlnnz.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>MOUSSE DE LÍMON </h5>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$ 000,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652112914/Cruel/Platos/Postres/FLAN_CON_DULCE_DE_LECHE_Y_CREMA_khoaob.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>FLAN CON DULCE DE LECHE Y CREMA</h5>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$000,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>





      </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
