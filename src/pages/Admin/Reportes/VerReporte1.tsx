import React, { useState } from 'react';
import Fantasma from '../../../images/Fantasma.png'

import { AiOutlinePlus } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BiExport, BiPencil, BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { BsSearch} from "react-icons/bs"
import SideBar from '../../../components/SideBar';
import HeaderManager from '../../../components/Header/HeaderManager';

const VerReporte1 = () => {
    const [filter, setfilter] = useState(true);

    const handleCancel = () =>{
        setfilter(false)
    }

    return (
        <div>
            <HeaderManager />
            <SideBar />
            <hr />
            <div className=' container mx-auto w-8/12 mt-28 mb-12'>
                <div className='text-blue-600 flex flex-row hover:underline'>
                    <MdKeyboardArrowLeft className='relative top-1 ' />
                    <a href="/reportes">Tipos de reportes</a>
                </div>
                <h1 className=' text-6xl text-titleTextColor font-bold'>Resumen de ventas</h1>
                <p className='mt-4 ml-2 text-gray-500'>Última actualización hace 2 horas</p>
                <div className='mt-8 flex flex-row justify-between'>
                    <div className="flex flex-row border w-3/5">
                        <BsSearch className="mt-5 ml-4" />
                        {   filter && (
                                <div className='mt-4 ml-2 mr-2 w-1/3 bg-blue-600 h-7 text-white rounded-full px-2'>
                                    Pre-Encuentro#1...
                                    <span
                                        onClick={handleCancel}
                                    className='ml-4 cursor-pointer'>x</span>
                                </div>
                            )
                        }
                        <input
                            className="bg-white w-2/3 h-13 py-4 px-4"
                            placeholder="Buscar cualquier evento con ventas"
                            type="text"
                        />
                    </div>
                    <div className='flex flex-row text-blue-600 hover:bg-gray-100 w-24 rounded-full mt-4'>
                        <BiExport className='mr-2 h-6 w-6 pl-2' />
                        <p>Exportar</p>
                    </div>
                </div>
                <div 
                    className='mt-8 text-blue-800 cursor-pointer flex flex-row ml-4 hover:bg-gray-100 w-32 px-2 rounded-lg'>
                    <AiOutlinePlus className='mt-1 ' />
                    <p className='ml-3'>Añadir filtro</p>
                </div>
                <div className='flex flex-row gap-4 mt-8 w-full'>
                    <div className='w-1/2 px-3 py-6 text-gray-600 border'>
                        <p className='text-sm'>Ventas brutas</p>
                        <p className='text-2xl font-bold text-black'>0</p>
                    </div>
                    <div className='w-1/2 px-3 py-6 text-gray-600 border'>
                        <p className='text-sm'>Ventas netas</p>
                        <p className='text-2xl font-bold text-black'>0</p>
                    </div>
                    <div className='w-1/2 px-1 py-6 text-gray-600 border'>
                        <p className='text-sm'>Entradas + Complementos vendidos</p>
                        <p className='text-2xl font-bold text-black'>0</p>
                    </div>
                    <div className='w-1/2 px-3 py-6 text-gray-600 border'>
                        <p className='text-sm'>Pedidos</p>
                        <p className='text-2xl font-bold text-black'>0</p>
                    </div>
                </div>
                <div className='flex flex-row mt-20 justify-between'>
                    <div className='flex flex-row'>
                        <div className="w-2/4 border">
                            <div className='flex flex-col py-2 px-3 bg-white'>
                                <label htmlFor="" className=' text-sm '>Agrupar por</label>
                                <select name="" id="" className='text-base'>
                                    <option value="">Seleccionar</option>
                                    <option value="">Evento</option>
                                    <option value="">{"Evento > Tipo de entrada"}</option>
                                    <option value="">{"Evento > Canal de ventas"}</option>
                                    <option value="">{"Evento > Canal de ventas > Tipo de entrada"}</option>
                                    <option value="">{"Evento > Canal de ventas > Tipo de entrada > Tipo de pagos"}</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flew-row mt-4 ml-8 '>
                            <BiPencil className='mt-1 text-blue-600' />
                            <p className='ml-2 text-gray-400 font-bold'>Editar columnas</p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-gray-600'>1-0</p>
                        <IoIosArrowDown className='text-gray-600 mt-1 mr-2' />
                        <p className='mr-2'>de 0 resultados</p>
                        <div className='flex flex-row mt-1 text-xl gap-4 text-gray-600'>
                            <BiArrowToLeft/>
                            <BiLeftArrowAlt />
                            <BiRightArrowAlt />
                            <BiArrowToRight />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <div>
                        <img className='h-40 w-40 ml-16' src={Fantasma} alt='Fantasma' />
                        <p className='font-bold text-xl text-gray-700'>Nada coincide con tu búsqueda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerReporte1;