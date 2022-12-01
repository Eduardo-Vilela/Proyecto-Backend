import React from 'react';
import SliderHome from './Sections/slider/SliderHome'
import LaCrueldad from './Sections/LaCrueldad/LaCrueldad'
import TabComponent from "./Sections/NuestrosProductos/TabComponent";
import tabs from "./Sections/NuestrosProductos/tabs";
import Ubicacion from './Sections/Ubicacion/Ubicacion';
import Formulario from './Sections/Formulario/Formulario';
import Footer from './Sections/Footer/Footer';



export default function Home() {
  return (
    <>

        <SliderHome/>
        <LaCrueldad/>
        <TabComponent tabs={tabs}/>
        <Formulario/>
        <Ubicacion/>
        <Footer/>
  
    </>
  )
}
