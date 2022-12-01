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

export default function Whiskys() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Whiskys</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652192073/Cruel/Tragos/Whiskys/BRUICHLADDICH_bwzl1e.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>BRUICHLADDICH</h5>
                  <p className="descripcion">Medida de whisky Bruichladdich</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$ 1500,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197610/Cruel/Tragos/Whiskys/GLENFIDICH_p7xfm4.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>GLENFIDICH</h5>
                  <p className="descripcion">Medida de whisky Glenfidich</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$1240,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197707/Cruel/Tragos/Whiskys/JHONNIE_WALKER_BLACK_bdhfyb.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>JHONNIE WALKER BLACK</h5>
                  <p className="descripcion">Medida de whisky Jhonnie Walker Black</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$900,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                 <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197757/Cruel/Tragos/Whiskys/JHONNIE_WALKER_GREEN_hguzke.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>JHONNIE WALKER GREEN</h5>
                  <p className="descripcion">Medida de whisky Jhonnie Walker Green</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$1530,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                  <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197825/Cruel/Tragos/Whiskys/WILD_TURKEY_acduz7.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>WILD TURKEY</h5>
                  <p className="descripcion">Medida de whisky Wild Turkey</p>
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
                  <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197882/Cruel/Tragos/Whiskys/JACK_DANIELS_khskrm.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>JACK DANIELS</h5>
                  <p className="descripcion">Medida de whisky Jack Daniels</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$1100,00</p> 
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                  <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652197938/Cruel/Tragos/Whiskys/JIM_BEAM_uycnqr.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>JIM BEAM</h5>
                  <p className="descripcion">Medida de whisky Jim Beam</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$700,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>    



      </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
