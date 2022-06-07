import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/polpoPass.svg";
import lateralImage from "../../images/lateral-image.jpg"

const Register = () => {

  return (
    <div className='flex w-full h-full'>
      <div className='w-1/2'>
        <div className='w-3/5 mx-auto'>
          <div className="py-4">
            <Link to="/">
              <img src={logo} alt="Logo polpoevents" />
            </Link>
          </div>
          <h1 className='text-5xl font-bold mt-5 text-white'>Crear una cuenta</h1>
          <form className='justify-center items-center flex flex-col'>
            <div className='bg-white pt-2 w-full mt-10 border'>
              <label className='block text-gray-700 text-sm font-bold ml-3'>Direccion de correo electronico</label>
              <input 
                type="text" 
                className='rounded w-full outline-none text-gray-700 px-4 pb-1'
              />
            </div>
            <div className='bg-white mb-6 w-full border pt-2  mt-5'>
              <label className='block text-gray-700 text-sm font-bold ml-3'>Confirmar correo electronico</label>
              <input 
                type="text" 
                className='rounded w-full outline-none text-gray-700 px-4 pb-1'
              />
            </div>
            <div className='flex flex-row w-full justify-center'>
              <div className='bg-white mb-6 w-1/2 border pt-2 '>
                  <label className='block text-gray-700 text-sm font-bold ml-3'>Nombre</label>
                  <input type="text"  className=' px-3 w-full'/>
              </div>
              <div className='bg-white mb-6 w-1/2 ml-4 border pt-2 '>
                  <label className='block text-gray-700 text-sm font-bold ml-3'>Apellido</label>
                  <input type="text" className=' px-3 w-full'/>
              </div>
            </div>
            <div className='bg-white mb-6 w-full border pt-2'>
              <label className='block text-gray-700 text-sm font-bold ml-3'>Contraseña</label>
              <input 
                type="password" 
                className='rounded w-full outline-none text-gray-700 px-4 pb-1'
              />
            </div>
            <div className='w-full' >
              <button 
                className='px-4 w-full py-4 text-white rounded-lg font-bold hover:bg-bgViolet border-2 border-bgViolet'
              >
                Crear cuenta
              </button>
            </div>
          </form>
          <div className="justify-center mt-8 flex">
            <a className='w-full py-4 border text-center rounded-lg text-xl text-blue-700 hover:bg-gray-200' href="/login">
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
      <div className='w-1/2 right-0 absolute h-full'> 
        <img src={lateralImage} alt=""/>
      </div>
    </div>
  )
}

export default Register;