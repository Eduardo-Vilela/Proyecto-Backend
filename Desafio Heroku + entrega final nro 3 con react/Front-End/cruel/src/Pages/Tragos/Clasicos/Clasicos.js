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

export default function Clasicos() {
  return (
    <>
      <hr className="linea-superior"/>
      <p className="slider-titulo-menu">Clásicos</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198521/Cruel/Tragos/Clasicos/NEGRONI_xa1gcx.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>NEGRONI</h5>
                  <p className="descripcion">Gin, Campari, Bermú Lunfa, Macerado y ahumado</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198568/Cruel/Tragos/Clasicos/MARTINI_VESPER_dcn1px.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>MARTINI VESPER</h5>
                  <p className="descripcion">Gin Beefeater, Vodka, Lillet Blanco, Perfume de Limón</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198644/Cruel/Tragos/Clasicos/GODFATHER_i49meu.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>GODFATHER</h5>
                  <p className="descripcion">Johnnie Walker Black Iabel, Disaronno</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$970,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198706/Cruel/Tragos/Clasicos/ELIXIR_BOULE_b9iokz.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>ELIXIR BOULE</h5>
                  <p className="descripcion">Jack Daniel’s, Beziers, Antica Fórmula, Campari, Pimiento Dram/Bitter Angostura, Perfume de limón</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$900,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
{   /*     <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src={Sangria}/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>LLAMARADA CRUEL</h5>
                  <p className="descripcion">Pisco, Beziers, Martini Extra Dry, Fernet, Tabasco</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$000,00</p>
                </div>
             
              </div>
          </div>
      </SwiperSlide> */}
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198802/Cruel/Tragos/Clasicos/DRY_MARTINI_otne9f.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>DRY MARTINI</h5>
                  <p className="descripcion">Gin, Extra Dry, Aceituna</p>
                </div>
                <div className="menu-info-col-right">
                  <p className="precio">$500,00</p>
                </div>
             
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-menu-container">
              <div>
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198978/Cruel/Tragos/Clasicos/BOULEVARDIER_x1r9rp.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>BOULEVARDIER</h5>
                  <p className="descripcion">Bourbon, Campari, Vermú rosso, Perfume de naranja</p>
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
                <img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652198978/Cruel/Tragos/Clasicos/BOULEVARDIER_x1r9rp.png"/>
              </div>
              <div className="menu-info">
                <div className="menu-info-col-left">
                  <h5>OLD FASHIONED</h5>
                  <p className="descripcion">Bourbon, Azucar, Bitter Angostura</p>
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
