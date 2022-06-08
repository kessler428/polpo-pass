import React, { useState } from 'react'
import Switch from '../../../components/Switch'

import { RiAccountCircleLine } from 'react-icons/ri'
import { BiPencil } from 'react-icons/bi'
import { FiCopy } from 'react-icons/fi'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import {HiOutlinePhotograph} from 'react-icons/hi'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import SideBar from '../../../components/SideBar'
import HeaderManager from '../../../components/Header/HeaderManager'

const PerfilAdd = () => {

    const [toggle , setToggle ] = useState(true)

  return (
    <div>

        <HeaderManager />
        <SideBar />
        <hr />

        <div className=' container mx-auto w-8/12 mt-28 mb-48'>
            <div className='text-blue-600 flex flex-row hover:underline'>
                <MdKeyboardArrowLeft className='relative top-1 ' />
                <a href="/Configuraciones">Ajustes de organización</a>
            </div>
            <h1 className=' text-6xl text-titleTextColor font-bold'>Añadir perfil de organizador</h1>
            <div className='mt-14 ml-4'>
                <div className='flex flex-row'>
                    <HiOutlinePhotograph className='text-gray-400 h-16 w-16' />
                    <div className='pl-12 flex flex-col'>
                        <h1 className=' text-2xl font-bold'>Imagen de perfil de organizador</h1>
                        <p>Esta es la primera imagen que los asistentes verán en la parte superior de tu perfil. Usa una imagen cuadrada de alta calidad.</p>
                        <label 
                            className='mt-5 text-lg font-semibold text-black bg-gray-100 border inline-block transition-all cursor-pointer pt-12 pb-8 px-8 w-2/6 text-center'
                        >
                            <HiOutlinePhotograph className='h-8 w-8 flex text-gray-400 ml-24 mb-2' />
                            Arrastra y coloca o haz click para añadir la imagen de perfil
                            <p className='text-gray-700 font-normal text-sm'>JPEG O PNG, no mayores a 10 MB</p>
                            <input type="file" className=' w-0 h-0 overflow-hidden absolute -z-0 opacity-0'/>
                        </label>
                    </div>

                </div>
                <div className='mt-14 flex flex-row'>
                    <RiAccountCircleLine className='text-gray-400 h-16 w-16' />
                    <div className='pl-12 flex flex-col'>
                        <h1 className=' text-2xl font-bold'>Ajustes del organizador</h1>
                        <p className='mt-2'>Haz saber a los asistentes quién es el anfitrión de los eventos. <a href='/' className='text-blue-600'>Saber más</a></p>
                        <div className='mb-4 w-2/3 pt-1 border bg-white mt-10'>
                            <label className='block text-gray-700 text-sm ml-4 pt-1'>Nombre del organizador</label>
                            <input 
                                className=' rounded w-full text-gray-700 px-4 pb-2'
                                type="email" 
                                name="email"
                                autoComplete="off"
                                placeholder='Por ejemplo: Trabajo en Polpo CR'
                            />
                        </div>
                        <div className='mb-6 w-2/3 pt-1 border bg-white'>
                            <label className='block text-gray-700 text-sm ml-4 pt-1'>En tu sitio web</label>
                            <input 
                                className=' rounded w-full text-gray-700 px-4 pb-2'
                                type="email" 
                                name="email"
                                autoComplete="off"
                                placeholder='e.g: https://polpocr.com/'
                            />
                        </div>
                        <div>
                            <h1 className='text-gray-700 text-xl font-bold'>URL de la página del organizador</h1>
                            <p>
                                Personalizar tu URL puede ayudar a los asistentes a encontrarte cuando busquen tus eventos.
                                La URL solo puede contener letras, números, guiones y subrayados.
                            </p>
                            <div className='mt-2 flex flex-row'>
                                <a className='text-blue-600 hover:underline mt-2' href='https://polpocr.com/'>https://polpocr.com/</a>
                                <BiPencil className='ml-4 h-10 w-10 cursor-pointer hover:bg-gray-200 hover:rounded-full p-2' />
                                <FiCopy className='ml-4 h-10 w-10 cursor-pointer hover:bg-gray-200 hover:rounded-full p-2' />
                            </div>
                        </div>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-gray-700 text-xl font-bold'>Biografia del organizador</h1>
                                <p>Describe quién eres, los tipos de eventos que celebras o tu declaración de principios. La biografía se muestra en tu perfil de organizador</p>
                                <textarea className='border w-full p-4 mt-4'/>
                            </div>
                            <div className='mt-5'>
                            <h1 className='text-gray-700 text-xl font-bold'>Descripcion de las paginas de eventos</h1>
                                <p>Escribe una breve descripción de este organizador para que se muestre en todas tus páginas del evento</p>
                                <textarea className='border w-full p-4 mt-4'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='mt-14 flex flex-row '>
                    <IoPhonePortraitOutline className='text-gray-400 h-16 w-16' />
                    <div className='pl-12 flex flex-col w-2/3'>
                        <h1 className=' text-2xl font-bold'>Redes sociales y marketing</h1>
                        <p>Haz saber a los asistentes cómo contactar contigo.</p>
                        <div className='mb-4 w-full pt-1 pr-4 border bg-white mt-10'>
                            <label className='block text-gray-700 text-sm ml-4 pt-1'>ID de facebook</label>
                            <input 
                                className=' rounded w-full text-gray-700 px-4 pb-2'
                                type="email" 
                                name="email"
                                autoComplete="off"
                                placeholder='Por ejemplo: 1529838090599312'
                            />
                        </div>
                        <div className='flex flex-row'>
                            <p className='mt-4'>@</p>
                            <div className='flex flex-col mb-4 w-full pt-1 border ml-4'>
                                <label className='block text-gray-700 text-sm ml-4 pt-1'>Twitter</label>
                                <input 
                                    className=' rounded w-full text-gray-700 px-4 pb-2'
                                    type="email" 
                                    name="email"
                                    autoComplete="off"
                                    placeholder='Por ejemplo: PolpoLife'
                                />
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='mt-4'>
                                <Switch 
                                    toggle={toggle}
                                    setToggle={setToggle} 
                                />
                            </div>
                            <div className='flex flex-col ml-4'>
                                <p>Optar por recibir correo electrónico: {toggle ? "Activado" : "Desactivado"}</p>
                                <p className='text-xs'>
                                    Los asistentes {toggle ? "pueden optar por recibir correos electrónicos de marketing al finalizar la compra" : 
                                    "no pueden optar por recibir correos electrónicos de marketing al finalizar la compra"} 
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end mb-8 border-t-2'>
            <div className='mt-6'>
                <button className='px-6 py-3 border-2 border-gray-400 mr-8 font-bold rounded-lg'>Descartar</button>
                <button className='text-white font-bold px-4 py-3 rounded-lg bg-bgButton hover:bg-bgButtonHover mr-8'>Guardar y continuar</button>
            </div>
        </div>
    </div>
  )
}

export default PerfilAdd;