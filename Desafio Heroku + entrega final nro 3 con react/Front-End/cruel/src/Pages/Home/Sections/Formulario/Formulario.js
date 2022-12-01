import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './formulario.css'
import axios from 'axios'

export default function Formulario() {

    let newDate = new Date()
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    var date, month;
      
    if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
    if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}
    let fecha = year + "-" + month + "-" + date;


   

  
    
    const [contactito, setContactito] = useState({
        nombre: "",
        dia:fecha,
        hora: "",
        cantidad: "",
        email:"",
    })


    const formularioContacto = {
        nombre: contactito.nombre,
        dia: contactito.dia,
        hora: contactito.hora,
        cantidad: contactito.cantidad,
        email:contactito.email,
      }

    
    const handleChange = (event) => {
        setContactito({
            ...contactito,
            [event.target.name]: event.target.value
        });
        event.preventDefault();
      }


    /*VALIDACIONES*/ 
    const formValidation = () => {
        let isValid = 0;
            if(contactito.nombre.trim().length <= 4){
              contactito.nombre = "Este campo es obligatorio";
                isValid = 1;
                console.log("campo nombre incompleto")
            }
            
            if((contactito.email.trim().length <= 4)){
              contactito.nombre = "Este campo es obligatorio";
                console.log("campo email incompleto")
                isValid = 1;
            }
    
            setContactito(contactito);
        return isValid;
      }



      const handlerEnviarContacto = () => {
        // CONDICIONES PARA ENVIAR
        const isValid = formValidation();
        if(isValid == 1){
          console.log("Error de mensaje");
          
        }
    
        if(isValid == 0){
       
        axios.post(`https://grupodelsud.com/webApi/public/contacto/mail`, formularioContacto)
        .then(res => {
    
            console.log("Enviado papu");
            
            setInterval(() => {
         
            }, 3000);
            
        }) 
          // .catch(res => {
          //   //handle error
          //   console.log("Hubo un error");
          // });
        }
        
      }

      
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
  return (
  
      <>      
         <div className='formulario-container' id='formulario'>
             <hr className='linea-superior-formulario'/>
             <h5>¿Querés hacer una reserva?</h5>
             <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
                <label >A nombre de </label>
                <input type="text" {...register("nombre", {required: "Este campo es obligatorio", minLength: {value: 2, message: "Al menos 3 caracteres para continuar" }})}/>
                {errors.nombre && <p className='error'>{errors.nombre.message}</p>}   
                <div className='two-columns'>
                    <div className='left'>
                        <label >Día</label>
                        <input type="date" id="dia" name="dia" value={contactito.dia} min={fecha}  {...register("fecha", {required: "Fecha obligatoria"})} />
                        {errors.fecha && <p className='error'>{errors.fecha.message}</p>}   
                    </div>
                    <div className='right'>
                        <label >Hora</label>
                        <input type="time" placeholder="hora" {...register("hora", {required: "Hora obligatoria"})} />
                        {errors.hora && <p className='error'>{errors.hora.message}</p>}  
                    </div>                   
                </div>
                <label >¿Para cuantas personas?</label>
                <select {...register("cantidad", { required: "Seleccione una opción para continuar" })}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                {errors.cantidad && <p className='error'>{errors.cantidad.message}</p>}  
                <label >Email de contacto</label>
                <input type="text" {...register("mail", {required: "Este campo es obligatorio",  pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "formato de mail invalido"  }})} />
                {errors.mail && <p className='error'>{errors.mail.message}</p>}   
                <input type="submit" name="Enviar" />
             </form>
         </div>
      </>
  )
}





