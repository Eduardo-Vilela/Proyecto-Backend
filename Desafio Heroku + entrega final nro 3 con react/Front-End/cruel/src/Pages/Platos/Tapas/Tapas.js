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

export default function Tapas() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Tapas</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652109458/Cruel/Platos/Tapas/Pinchos_de_carne_con_chips_de_batata_nqd90e.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PINCHOS DE CARNE  c/CHIPS DE BATATA</h5>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$ 550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110275/Cruel/Platos/Tapas/TORTILLA_DE_PAPA_CON_CREMA_Y_VERDEO_woyggj.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>TORTILLA DE PAPA c/ CREMA DE VERDEO</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110408/Cruel/Platos/Tapas/CROQUETAS_DE_HONOS_CON_DIPS_DE_REMOLACHA_hz7aml.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>CROQUETAS DE HONOS c/ DIPS DE REMOLACHA</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110523/Cruel/Platos/Tapas/LANGOSTINOS_CON_ALI_OLI_r9j3b4.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>LANGOSTINOS c/ ALI OLI </h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110593/Cruel/Platos/Tapas/ARROLLADO_CON_POLLO_CON_TOMATES_CONFITADOS_sg24rr.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>ARROLLADO CON POLLO c/ TOMATES CONFITADOS </h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110667/Cruel/Platos/Tapas/MILHOJAS_DE_VEGETALES_CON_AROS_DE_CEBOLLA_ewp8xo.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>MILHOJAS DE VEGETALES c/ AROS DE CEBOLLA </h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110727/Cruel/Platos/Tapas/RABAS_c3vojh.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>RABAS</h5>
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
