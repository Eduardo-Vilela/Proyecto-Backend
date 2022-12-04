import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import '../slider/sliderhome.css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


export default function SliderHome() {
    return (
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper slider-home-container">
          <SwiperSlide>
              <div className="slider-container">                
                    <p className="texto-primer-slider">2X1 EN TÓNICOS DE MARTES A JUEVES</p>            
                    <img src="https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670173987/jeans-definitivo-ss23_suwssk.jpg"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="slider-container">
                    <p className="texto-segundo-slider">LOS MENÚ DEL DÍA ESTÁN EN CRUEL</p>         
                    <img src="https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670173987/vestidos-definitivo-ss23_us4r87.jpg"/>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="slider-container">
                    <p className="texto-tercer-top-slider">SÁBADOS DJ SET</p>
                    <div className="texto-tercer-bottom-slider">
                      <p className="mazbe-titulo">MAZBE</p>
                      <p className="mazbe-text">TECH HOUSE | MINIMAL | PROGRESSIVE</p> 
                    </div>                        
                    <img src="https://res.cloudinary.com/thiale-indumentaria/image/upload/v1670173987/lenceria-definitivo-ss23_lenzuw.jpg"/>
              </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }