import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LogoBarraMorfi from '../../../Components/img/barramorfi.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";


import "./cocteleriadeautor.css";

import Sangria from "./img/sangria.png"

// import required modules
import { EffectCreative } from "swiper";
// import required modules
import { Pagination } from "swiper";

export default function CocteleriaDeAutor() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Coctelería de Autor</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652199901/Cruel/Tragos/Cocteles/NACIMIENTO_DE_VENUS_gwajhz.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>NACIMIENTO DE VENUS</h5>
                  <p className="descripcion">Vodka, Jugo de Limón, Almíbar de frutos rojos, clara de huevo</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203062/Cruel/Tragos/Cocteles/PEPINO_FRESH_x4dpxc.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PEPINO FRESH</h5>
                  <p className="descripcion">Aperol, Cinzano bianco, Jugo de pepino, Jugo de limón, Almíbar de maracuyá, Agua tónica.</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$350,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203104/Cruel/Tragos/Cocteles/TERCIOPELO_utk4rq.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>TERCIOPELO</h5>
                  <p className="descripcion">Vodka Sernova, Hesperidina, Jugo de limón, Almíbar simple, Espuma de anana y frutos rojos, Flores comestibles.</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$450,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203175/Cruel/Tragos/Cocteles/BIENVENIDA_CRUEL_zk68gs.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>BIENVENIDA CRUEL</h5>
                  <p className="descripcion">Cinzano bianco, Jugo de limón, Almíbar de frutos rojos Tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$300,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>CRUEL #7</h5>
                  <p className="descripcion">Punt e mes, Almíbar de pomelo y cedrón, Jugo de limón, Menta, Tónica</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$300,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203238/Cruel/Tragos/Cocteles/SMOKE_SELLER_kiwfrh.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>SMOKE SELLER</h5>
                  <p className="descripcion">Jameson, Punt e mes, Hesperidina, Jugo de limón Almíbar de canela, Naranja deshidratada</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$700,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PREMIUM #3</h5>
                  <p className="descripcion">Sir Edwards, Baileys, Almíbar de alfajor Crema</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$650,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203296/Cruel/Tragos/Cocteles/PENECILLIN_SMOKE_bh1mrl.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PENECILLIN SMOKE</h5>
                  <p className="descripcion">Sir Edwards, Jugo de limón, Almíbar de jengibre, Miel Jhonie Walker Double Black</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$750,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>PISCO HOUSE</h5>
                  <p className="descripcion">Pisco Calavera, Jugo de limón, Almíbar de maracuyá Almíbar de canela, Clara de huevo</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$750,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203348/Cruel/Tragos/Cocteles/LOVE_IN_MANHATTAN_udwmyz.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>LOVE IN MANHATTAN</h5>
                  <p className="descripcion">Benchmark, Cinzano rosso, Bitter Angostura Cherry brandy</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$800,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652203419/Cruel/Tragos/Cocteles/TOM_COLLIN_S_CRUEL_pulnrh.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>TOM COLLIN´S CRUEL</h5>
                  <p className="descripcion">Gin Maraschino, Almíbar de simple, Jugo de limón, Soda Cruel</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$550,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>AMERICANO CRUEL</h5>
                  <p className="descripcion">Vermut Rosso, Campari, Soda Cruel</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$350,00</p>
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
                  <h5>MITO DE LA CASA</h5>
                  <p className="descripcion">Campari, Vermú Rosso, Macerado de Barrica de Roble, Perfume de limón</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$450,00</p>
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
                  <h5>VERMU LUNFA SODA</h5>
                  <p className="descripcion">--------</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$350,00</p>
                </div>             
              </div>
          </div>
        </SwiperSlide> */}




      </Swiper>
      <div className='logo-menu'><img src={LogoBarraMorfi}/></div>
     
    </>
  );
}
