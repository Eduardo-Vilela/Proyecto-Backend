import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LogoBarraMorfi from '../../../Components/img/barramorfi.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import "./vinos.css";

import Sangria from "../CocteleriaDeAutor/img/sangria.png"

// import required modules
import { EffectCreative } from "swiper";
// import required modules
import { Pagination } from "swiper";

export default function Vinos() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Vinos</p>
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
                <img src={Sangria}/>
              </div>
              <div className="menu-info-vinos">
                <div className="vinos-titulo">
                  <h5>DESQUICIADO PINOT GRIS</h5>
                </div>              
                <div className="vino-botella">
                    <p className="vino-descripcion">Botella</p>
                    <p className="vino-precio">$000,00</p>
                </div>
                <div className="vino-copa">
                    <p className="vino-descripcion">Copa</p>
                    <p className="vino-precio">$000,00</p>
                </div>     
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info-vinos">
                <div className="vinos-titulo">
                  <h5>AUREO CABERNET SOUVIGNON</h5>
                </div>              
                <div className="vino-botella">
                    <p className="vino-descripcion">Botella</p>
                    <p className="vino-precio">$000,00</p>
                </div>
                <div className="vino-copa">
                    <p className="vino-descripcion">Copa</p>
                    <p className="vino-precio">$000,00</p>
                </div>     
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info-vinos">
                <div className="vinos-titulo">
                  <h5>LA MALA MARÍA</h5>
                </div>              
                <div className="vino-botella">
                    <p className="vino-descripcion">Botella</p>
                    <p className="vino-precio">$000,00</p>
                </div>
                <div className="vino-copa">
                    <p className="vino-descripcion">Copa</p>
                    <p className="vino-precio">$000,00</p>
                </div>     
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info-vinos">
                <div className="vinos-titulo">
                  <h5>ALTOCEDRO ROSADO DE MERLOT</h5>
                </div>              
                <div className="vino-botella">
                    <p className="vino-descripcion">Botella</p>
                    <p className="vino-precio">$000,00</p>
                </div>
                <div className="vino-copa">
                    <p className="vino-descripcion">Copa</p>
                    <p className="vino-precio">$000,00</p>
                </div>     
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info-vinos">
                <div className="vinos-titulo">
                  <h5>ALPATACO CHARDONNAY</h5>
                </div>              
                <div className="vino-botella">
                    <p className="vino-descripcion">Botella</p>
                    <p className="vino-precio">$000,00</p>
                </div>
                <div className="vino-copa">
                    <p className="vino-descripcion">Copa</p>
                    <p className="vino-precio">$000,00</p>
                </div>     
              </div>
          </div>
        </SwiperSlide>
        </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
