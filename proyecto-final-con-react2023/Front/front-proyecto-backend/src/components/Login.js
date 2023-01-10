import React from 'react'
import './Estilos-generales.css'
import { useForm } from 'react-hook-form';

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);


  return (
    <>
      <div className='contenedor-principal'>
        <div className='subcontainer-principal'>
          <div className='box'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-form'>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <div class="group">
                <input 
                type="text" 
                className="input"
                {...register("First name", { required: true, maxLength: 80 })}
                />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Name</label>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login