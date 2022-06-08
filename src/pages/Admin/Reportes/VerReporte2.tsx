import { useState } from 'react';
import Fantasma from '../../../images/Fantasma.png'

import { informacionDelPedido, informacionDelAsistente, informacionDelComprador, informacionDelEvento, gestionDeAcceso} from './checkBox'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import SideBar from '../../../components/SideBar';
import HeaderManager from '../../../components/Header/HeaderManager';

const VerReporte2 = () => {
    const [columns, setColumns] = useState(false);
    const [entradas, setEntradas] = useState(false);

    const handleColumns = () =>{
        setColumns(!columns)
    }

    const handleEntradas = () =>{
        setEntradas(!entradas)
    }

    return (
        <div>
            <HeaderManager />
            <SideBar />
            <hr />
            <div className=' container mx-auto w-8/12 mt-28 mb-96'>
                <div className='text-blue-600 flex flex-row hover:underline'>
                    <MdKeyboardArrowLeft className='relative top-1 ' />
                    <a href="/reportes">Tipos de reportes</a>
                </div>
                <h1 className=' text-6xl text-titleTextColor font-bold'>Ventas por tipo de entrada</h1>
                <div className='mt-8 flex flex-row justify-between'>
                    <div>
                        <p>Selecciona: <span className='text-blue-600'>Todos los eventos</span> / <span className='text-blue-600'>Ninguno</span></p>
                    </div>
                    <div>
                        <p>Vista: <span className='text-blue-600'>Todos los eventos</span> / <span className='text-blue-600'>Eventos publicados</span> / <span className='text-blue-600'>Eventos finalizados</span></p>
                    </div>
                </div>
                <div className='mt-8 border-r border-t h-48 '>
                    <div className='bg-gray-50 justify-between flex flex-row'>
                        <div className='flex flex-row py-2'>
                            <input className='mt-1 ml-2' type='checkbox' />
                            <p className='ml-2'>Pre-Encuentro #1 - Encuentro Vencedores</p>
                        </div>
                        <div className='mt-2 mr-2'>
                            <p>23 de abril de 2022 19:00</p>
                        </div>
                    </div>
                </div>
                <button className='py-4 px-6 font-bold bg-bgButton hover:bg-bgButtonHover text-white rounded-lg'>
                    Actualiza Informe
                </button>
                <div className='w-3/4 mt-5'>
                    <div className='flex flex-col'>
                        <label className='text-lg'>Rango de fechas:</label>
                        <select className='p-4 border text-lg'>
                            <option>Desde que empezaron las ventas</option>
                            <option>Esta semana</option>
                            <option>Este mes</option>
                            <option>Este año</option>
                            <option>Rango de fechas personalizado</option>
                        </select>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg'>Estado del asistente:</label>
                        <select className='p-4 border text-lg'>
                            <option>Asistire</option>
                            <option>Asistido</option>
                            <option>Invitados que asistiran</option>
                            <option>Invitados que asistieron</option>
                            <option>No va a asistir(Bloqueado/Reembolsado/Canelado)</option>
                        </select>
                    </div>
                </div>
                <div className='mt-4'>
                    <p>Configurar columnas:</p>
                    <button onClick={handleColumns} className='flex flex-row text-blue-600 mt-2'>
                        <IoIosArrowForward className='mt-1' />
                        {columns ? 'Ocultar columnas' : 'Mostrar columnas'}
                    </button>
                    {
                        columns && (
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between pb-2 border-b'>
                                    <h1>Selecciona los datos que deseas visualizar</h1>
                                    <div className='text-blue-600 flex cursor-pointer flex-row w-3/5 justify-between'>
                                        <p className='hover:underline'>Deseleccionar todos</p>
                                        <p className='hover:underline'>Seleccionar predeterminados</p>
                                        <p className='hover:underline'>Seleccionar todos</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold'>Información del pedido</p>
                                    <div className='border-b pb-4'>
                                        {
                                            informacionDelPedido.map((item, index) => (
                                                <div key={index} className="flex flex-row">
                                                    <div className="flex  w-full flex-row p-1">
                                                        <div className="flex flex-row w-1/4 ">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input1}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input2}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input3}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input4}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <p className='font-bold'>Información del asistente</p>
                                    <div className='border-b pb-4'>
                                        {
                                            informacionDelAsistente.map((item, index):any => (
                                                <div key={index} className="flex flex-row">
                                                    <div className="flex  w-full flex-row p-1">
                                                        <div className="flex flex-row w-1/4 ">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input1}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input2}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input3}</p>
                                                        </div>
                                                        <div className="flex flex-row w-1/4">
                                                            <input className='mt-1' type='checkbox' />
                                                            <p className='ml-1'>{item.input4}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='flex flex-row justify-between'>
                                        <div>
                                            <p className='font-bold'>Información del comprador de entradas</p>
                                            {
                                                informacionDelComprador.map((item, index):any => (
                                                    <div key={index} className="flex flex-row py-1">
                                                        <input className='mt-1' type='checkbox' />
                                                        <p className='ml-1'>{item.nombre}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <p className='font-bold'>Información del evento</p>
                                            {
                                                informacionDelEvento.map((item, index):any => (
                                                    <div key={index} className="flex flex-row py-1">
                                                        <input className='mt-1' type='checkbox' />
                                                        <p className='ml-1'>{item.nombre}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <p className='font-bold'>Gestion de acceso</p>
                                            {
                                                gestionDeAcceso.map((item, index):any => (
                                                    <div key={index} className="flex flex-row py-1">
                                                        <input className='mt-1' type='checkbox' />
                                                        <p className='ml-1'>{item.nombre}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <p className='font-bold'>Otra informacion</p>
                                                <div className="flex flex-row py-1">
                                                    <input className='mt-1' type='checkbox' />
                                                    <p className='ml-1'>Notas</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 ml-4'>
                                    <button className='bg-bgButton hover:bg-bgButtonHover px-6 py-4 text-white font-bold rounded-lg'>
                                        Actualiza informe
                                    </button>
                                    <button className='ml-4 text-blue-600'>
                                        Guardar tipos de columnas
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='mt-4'>
                    <p>Tipo de entrada:</p>
                    <button onClick={handleEntradas} className='flex flex-row text-blue-600 mt-2'>
                        <IoIosArrowForward className='mt-1' />
                        {entradas ? 'Ocultar entradas' : 'Mostrar entradas'}
                    </button>
                    {
                        entradas && (
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between pb-2 border-b'>
                                    <h1 className='font-bold'>Selecciona los tipos de entrada que quieres que se muestrenr</h1>
                                    <div className='text-blue-600 flex cursor-pointer flex-row w-2/5 justify-between'>
                                        <p className='hover:underline'>Seleccionar todos</p>
                                        <p className='hover:underline'>Deseleccionar todos</p>
                                    </div>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <input className='mt-1'type="checkbox" />
                                    <p className='ml-1'>Ingreso general</p>
                                </div>
                                <div className='mt-6'>
                                    <p>Buscar:</p>
                                    <div className='flex flex-row'>
                                        <input 
                                            className='w-2/3 p-4 border rounded-md'
                                            type='text' 
                                            placeholder='Nombre, apellido o direccion de correo electronico'
                                        />
                                        <button className='ml-12 bg-bgButton hover:bg-bgButtonHover border rounded-md px-8 py-4 text-white font-bol'>
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <img src={Fantasma} alt='Fantasma' className="h-36 w-36 bg-gray-50 rounded-full mt-20"/>
                    <div className='flex justify-center flex-col w-1/3'>
                        <p className='text-2xl font-bold'>No hay nada que reportar</p>
                        <p className='text-lg font-bold text-gray-600'>No se ha realizado ninguna venta en los ultimos 3 meses. Selecciona un evento especifico para ver la informacion de la venta.</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default VerReporte2;