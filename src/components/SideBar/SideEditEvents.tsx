import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const SideEditEvents = () => {
    const [opt, setOpt] = useState(false);
    const [optMarketing, setOptMarketing] = useState(false);
    const [optGestionDeAsistentes, setOptGestionDeAsistentes] = useState(false);

    return (
        <div className='h-screen ml-16 w-72 bg-gray-100 top-[76px] fixed overflow-auto'>
            <div className='flex flex-row p-6 text-blue-600 font-bold border-b-2'>
                <MdKeyboardArrowLeft className='h-6 w-6' />
                <span className='ml-2'>Eventos</span>
            </div>
            <div className=' border-b-2'>
                <div className='p-4'>
                    <h4 className='rounded-full p-2 bg-white shadow-lg w-36'>Evento Finalizado</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-5/6 mb-4'>
                        <p className='text-[25px] text-titleTextColor font-bold hover:underline hover:text-blue-600'>Pre-Encuentro #1 - Encuentro Vencedores</p>
                        <p className=''>vie., 23 de abr. del 2021 19:00</p>
                        <NavLink className='my-2 text-blue-600 font-bold hover:underline' to='/ver_evento'>Ver tu evento</NavLink>
                    </div>
                </div>
            </div>
            <div className='border-b-2'>
                <div className='flex flex-row cursor-pointer text-titleTextColor '>
                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'p-4 bg-white flex flex-row w-full hover:bg-gray-200' : ' p-4 flex flex-row w-full hover:bg-gray-200'}  
                        to='/editar_evento/informacion_basica'
                    >
                        <AiFillCheckCircle className='w-6 h-6 mr-4' />
                        Informacion Basica
                    </NavLink>
                </div>
                <div className='flex flex-row cursor-pointer text-titleTextColor'>
                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'p-4 bg-white flex flex-row w-full hover:bg-gray-200' : ' p-4 flex flex-row w-full hover:bg-gray-200'}  
                        to='/editar_evento/detalles'
                    >
                        <AiFillCheckCircle className='w-6 h-6 mr-4' />
                        Detalles
                    </NavLink>
                </div>
                <div className='flex flex-row cursor-pointer text-titleTextColor'>
                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'p-4 bg-white flex flex-row w-full hover:bg-gray-200' : ' p-4 flex flex-row w-full hover:bg-gray-200'}  
                        to='/editar_evento/pedidos'
                    >
                        <AiFillCheckCircle className='w-6 h-6 mr-4' />
                        Entradas
                    </NavLink>
                </div>
                <div className='flex flex-row cursor-pointer text-titleTextColor'>
                    <NavLink 
                        className={ ({ isActive }) => isActive ? 'p-4 bg-white flex flex-row w-full hover:bg-gray-200' : ' p-4 flex flex-row w-full hover:bg-gray-200'}  
                        to='/editar_evento/publicaciones'
                    >
                        <AiFillCheckCircle className='w-6 h-6 mr-4' />
                        Publicar
                    </NavLink>
                </div>
            </div>
            <div className='mb-20'>
                <div className='p-4 hover:bg-gray-200'>
                    <NavLink to='/editar_evento/panel_de_control'>
                        Panel de control
                    </NavLink>
                </div>
                <div 
                    onClick={() => setOpt(!opt)} 
                    className='cursor-pointer p-4 flex flex-row justify-between hover:bg-gray-200'
                >
                    <button >
                        Opciones del pedido
                    </button>
                    <MdKeyboardArrowDown 
                        className={!opt ? 'w-6 h-6' : 'w-6 h-6 rotate-180'}
                    />
                </div>
                {
                    opt && (
                        <div className='pl-4'>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to='/editar_evento/formulario_del_pedido'>
                                    Formulario de pedido
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to='/editar_evento/confirmacion_del_pedido'>
                                    Confirmacion del pedido
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to='/editar_evento/lista_de_espera'>
                                    Lista de espera
                                </NavLink>
                            </div>
                        </div>
                    )
                }
                <div 
                    onClick={() => setOptMarketing(!optMarketing)} 
                    className='cursor-pointer p-4 flex flex-row justify-between hover:bg-gray-200'
                >
                    <button >
                        Marketing
                    </button>
                    <MdKeyboardArrowDown 
                        className={!optMarketing ? 'w-6 h-6' : 'w-6 h-6 rotate-180'}
                    />
                </div>
                {
                    optMarketing && (
                        <div className='pl-4'>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Formulario sobre Marketing
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Anuncios sociales de pago
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Codigos promocionales multievento
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Enlaces de seguimiento
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Pixeles de seguimiento
                                </NavLink>
                            </div>
                        </div>
                    )
                }
                <div 
                    onClick={() => setOptGestionDeAsistentes(!optGestionDeAsistentes)} 
                    className='cursor-pointer p-4 flex flex-row justify-between hover:bg-gray-200'
                >
                    <button >
                        Gestion de asistentes
                    </button>
                    <MdKeyboardArrowDown 
                        className={!optGestionDeAsistentes ? 'w-6 h-6' : 'w-6 h-6 rotate-180'}
                    />
                </div>
                {
                    optGestionDeAsistentes && (
                        <div className=''>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Pedidos
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Añadir asistentes
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Correos electronicos a los asistentes
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Asistentes
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Etiquetas de identidad
                                </NavLink>
                            </div>
                            <div className='p-4 hover:bg-gray-200'>
                                <NavLink to=''>
                                    Acreditacion
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}