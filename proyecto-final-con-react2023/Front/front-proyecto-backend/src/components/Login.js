import React, { useState } from 'react'
import './Estilos-generales.css'
import { useForm } from 'react-hook-form';

import { useDispatch } from "react-redux";
import { apiCrearUsuario } from '../api/crearUsuario';


function Login() {
  const dispatch = useDispatch();
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  const [createUser, setUsuario] = useState(null);

  const onChangeCrearUsuario = (event) => {
      setUsuario({
          ...createUser,
          [event.target.name]: event.target.value
      });
  }

  function handleCrearUsuario() {
      // console.log(createUser)
      const user = {
          name: createUser.name,
          age:createUser.age,
          address: createUser.address,
          email: createUser.email,
          password: createUser.password,
          phone: createUser.phone,
          image: createUser.image,
          username:createUser.username
      }

      dispatch(apiCrearUsuario(user));
  }
   

  return (
    <>
      <div className='contenedor-principal'>
        <div className='subcontainer-principal'>
          <div className='box'>
            {/* <form onSubmit={handleSubmit(onSubmit)} className='card-form'>
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
            </form> */}
            <form >
              <div >
                <input type="text" name="name" placeholder="Nombre"onChange={onChangeCrearUsuario} />

                <input type="number" name="age" placeholder="Edad" onChange={onChangeCrearUsuario}/>

                <input type="text" name="address" placeholder="Direccion" onChange={onChangeCrearUsuario}
                />
                <input type="text" name='username' placeholder="email"onChange={onChangeCrearUsuario}
                />
                <input type="text" name='email' placeholder="email"onChange={onChangeCrearUsuario}
                />

                <input type="password" name="password" placeholder="Password" onChange={onChangeCrearUsuario}
                />

                <input type="tel" name="phone" placeholder="Telefono"onChange={onChangeCrearUsuario} />

                <label for="image" >Sube una foto para tu Avatar </label>
                <input type="file" name="image" onChange={onChangeCrearUsuario}/>

                <hr />
                {/* <div>
                  <input type="checkbox" onChange={onChangeCrearUsuario}/> Mostrar Contraseña
                </div> */}

              </div>
              <div class="d-flex flex-row justify-content-center text-center ">
                <button type="button" onClick={handleCrearUsuario} >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login