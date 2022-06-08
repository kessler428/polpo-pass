// React Hooks
import { useState } from 'react'

//Images
import Fanstama from '../../../images/Fantasma.png'

//React Icons
import { BsSearch } from "react-icons/bs";

//Components
import SideBar from '../../../components/SideBar';
import HeaderManager from '../../../components/Header/HeaderManager';

const Finanzas = () => {

    const [resumen, setResumen] = useState(true)

    const handleResumen = () => {
        setResumen(true)
    }
    const handleResumen2 = () => {
        setResumen(false)
    }

  return (
    <div>
        <HeaderManager />
        <SideBar />
        <hr />
        <div className='bg-bgWhite'>
            <div className=' container mx-auto w-8/12 pt-28 pb-20'>
                <h1 className=' text-6xl text-titleTextColor font-bold'>Finanzas</h1>
                <div  className="mt-8 flex flex-row">
                    <div className='flex flex-col mt-2'>
                        <div>
                            <button
                                onClick={handleResumen}
                                className={
                                    resumen
                                        ? "bg-blue-600 text-white text-lg pr-8 pl-8 py-3 rounded-lg mt-3"
                                        : "bg-gray-200 text-gray-700 text-lg pr-8 pl-8 py-3 rounded-lg mt-3"
                                }
                            >
                                confirmar
                            </button>
                        </div>
                        <div>
                            <button 
                                onClick={handleResumen2}
                                className={
                                    resumen ? 'bg-gray-100 text-gray-700 text-lg p-3 rounded-lg mt-3'
                                            : 'bg-blue-600 text-white text-lg p-3 rounded-lg mt-3'
                                }
                            >
                                Proximamente
                            </button>
                        </div>
                    </div>
                    {
                        resumen === true ? (
                            <div className='flex flex-col w-full'>
                                <div className="w-full flex flex-row p-4">
                                    <BsSearch className="relative top-5 left-8" />
                                    <input
                                    className="w-full bg-white border-2 -mr-5 h-14 px-12"
                                    placeholder="Buscar por nombre del evento"
                                    type="text"
                                    />
                                </div>
                                <div className='flex flex-row ml-5'>
                                    <div className="w-3/12 border-2 ml-3">
                                        <div className='flex flex-col py-2 px-3 bg-white'>
                                            <label htmlFor="" className=' text-sm '>Estado de pagos</label>
                                            <select name="" id="" className='text-base'>
                                                <option value="">Todos</option>
                                                <option value="">En proceso</option>
                                                <option value="">Enviado</option>
                                                <option value="">Devuelto</option>
                                                <option value="">Cancelado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-3/12 border-2 ml-3">
                                        <div className='flex flex-col py-2 px-3 bg-white'>
                                            <label htmlFor="" className=' text-sm '>Filtrar por</label>
                                            <select name="" id="" className='text-base'>
                                                <option value="">Fechas de pago</option>
                                                <option value="">Fechas de eventos</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-3/12 border-2 ml-3">
                                        <div className='flex flex-col py-2 px-3 bg-white'>
                                            <label htmlFor="" className=' text-sm '>Inicio</label>
                                            <input type="date"/>
                                        </div>
                                    </div>
                                    <div className="w-3/12 border-2 ml-3">
                                        <div className='flex flex-col py-2 px-3 bg-white'>
                                            <label htmlFor="" className=' text-sm '>Fin</label>
                                            <input type="date"/>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-row mt-4 justify-end'>
                                    <button className='text-blue-500 hover:bg-gray-200 rounded-lg p-3 w-40 content-end'>Borrar Seleccion</button>
                                </div>
                                <div>
                                    <div className="flex flex-col mt-10 justify-center ml-20">
                                        <div className='flex justify-center'>
                                            <img src={Fanstama} alt="" className=' h-44 w-44'/>
                                        </div>
                                        <div className='flex justify-center'>
                                        <p className='text-2xl font-bold'>No se encontraron pagos coincidentes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='w-full'>
                                <div className="flex flex-col mt-10 justify-center ml-20">
                                    <div className='flex justify-center'>
                                        <img src={Fanstama} alt="" className=' h-44 w-44'/>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-2xl font-bold'>No se encontraron pagos coincidentes</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Finanzas;