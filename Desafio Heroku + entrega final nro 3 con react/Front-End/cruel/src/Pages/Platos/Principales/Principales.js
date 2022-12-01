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

export default function Principales() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Principales</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652110929/Cruel/Platos/Principales/BONDIOLA_A_LA_BARBACOA_CON_BATATAS_CARAMELIZADAS_iuemzr.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>BONDIOLA A LA BARBACOA c/ BATATAS CARAMELIZADAS</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652111021/Cruel/Platos/Principales/SORRENTINOS_lqw30d.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>SORRENTINOS DE RICOTA JAMÓN, NUEZ c/ FILETO</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652111076/Cruel/Platos/Principales/HAMBURGUESA_g9hxxp.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>HAMBURGUESA (solo medallón)</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652111167/Cruel/Platos/Principales/HAMBURGUESA_Jamon_Queso_bdmsns.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>HAMBURGUESA(Jamón & Queso)</h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652111229/Cruel/Platos/Principales/HAMBURGUESA_COMPLETA_ozkylv.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>HAMBURGUESA (Completa) </h5>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652111310/Cruel/Platos/Principales/CANELONES_xcdw7o.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>CANELONES</h5>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$ 000,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide>




      </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
