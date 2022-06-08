import { useNavigate } from 'react-router-dom';

// Components
import HeaderManager from '../../../components/Header/HeaderManager';

// React Icons
import { AiOutlineTags, AiOutlineUnorderedList, AiOutlineCheck } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { BsCartDash } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import { HiClipboardList, HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { GiTicket } from 'react-icons/gi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import SideBar from '../../../components/SideBar';

const Reportes = () => {
    let navigate = useNavigate();

    const VerReporte1 = () =>{
        navigate('/Mi_evento/Reporte/Resumen_de_ventas');
    }

    const VerReporte2 = () =>{
        navigate('/Mi_evento/Reporte/Ventas_tipo_entrada');
    }


  return (
    <div>
        <HeaderManager />
        <SideBar />
        
        <hr />
        <div className='bg-bgWhite'>
            <div className=' container mx-auto w-8/12 pt-28 pb-6'>
                <h1 className=' text-6xl text-titleTextColor font-bold'>Reportes</h1>
                <div className="flex flex-col mt-10 justify-start">
                    <div className='mt-12'>
                        <div className='text-2xl font-bold'>
                            <h1>Ventas</h1>    
                        </div>
                        <p className='mt-2'>Seguimiento de las ventas de su evento.</p>
                        <div className='mt-5 flex flex-row gap-4'>
                            <button onClick={VerReporte1} className='w-2/6 rounded-xl bg-bgBluebtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Resumen de ventas</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Una descripción general de todas las ventas de boletos, incluidas las tarifas e impuestos</p>
                                    <AiOutlineTags className='bg-bgBlueIconbtn w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>
                            <button onClick={VerReporte2} className='w-2/6 rounded-xl bg-bgBluebtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Ventas por tipo de entrada</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Segmentar la información de los asistentes por tipo de entrada</p>
                                    <AiOutlineUnorderedList className='bg-bgBlueIconbtn w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className='text-2xl font-bold'>
                            <h1>Asistentes</h1>    
                        </div>
                        <p className='mt-2'>Ver detaller acerca de tus asistentes.</p>
                        <div className='mt-5 flex flex-row gap-4'>
                            <button className='w-2/6 rounded-xl bg-bgGreenDarkbtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Resumen de asistentes</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Mirar detalles de los asistentes como el nombre, email, y entrada.</p>
                                    <MdOutlineAccountCircle className='bg-bgGreenDarkIconbtn w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>
                            <button className='w-2/6 rounded-xl bg-bgGreenDarkbtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Respuesta a preguntas personalizadas</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Revise los detalles de los asistentes y las respuestas a las preguntas personalizadas</p>
                                    <HiClipboardList className='bg-bgGreenDarkIconbtn w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='mt-16'>

                        <div className='text-2xl font-bold'>
                            <h1>Taquilla</h1>    
                        </div>

                        <p className='mt-2'>Ver detaller acerca de tus asistentes.</p>

                        <div className='mt-5 flex flex-row gap-4'>
                            <button className='w-2/6 rounded-xl bg-blue-600 text-white p-2'>
                                <h1 className='text-left font-bold text-lg'>Resumen de taquilla</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Supervisar tus ventas de evento en la entrada.</p>
                                    <GiTicket className='bg-bgBlueIconbtn2 w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>

                            <button className='w-2/6 rounded-xl bg-blue-600 text-white p-2'>
                                <h1 className='text-left font-bold text-lg'>Asistencia</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Ver cuando tus asistentes se acreditaron en tu evento.</p>
                                    <AiOutlineCheck className='bg-bgBlueIconbtn2 w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>

                            <button className='w-2/6 rounded-xl bg-blue-600 text-white p-2'>
                                <h1 className='text-left font-bold text-lg'>Resumen de asientos retenidos</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Comprueba para ver que entradas estan retenidas.</p>
                                    <HiClipboardList className='bg-bgBlueIconbtn2 w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>

                            <button className='w-2/6 rounded-xl bg-blue-600 text-white p-2'>
                                <h1 className='text-left font-bold text-lg'>Transferencias</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Revisar entradas que se han transferido de un asistente a otro.</p>
                                    <HiOutlineSwitchHorizontal className='bg-bgBlueIconbtn2 w-28 h-12 rounded-lg p-2 ml-2' />
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className='text-2xl font-bold'>
                            <h1>Finance</h1>    
                        </div>
                        <p className='mt-2'>Revisa tus reportes financieros.</p>
                        <div className='mt-5 flex flex-row gap-4'>
                            <button className='w-2/6 rounded-xl bg-bgVioletDarkbtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Resumen de pagos</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Una revisión detallada de las vistas previas de los próximos pagos.</p>
                                    <BiDollar className='bg-bgVioletDarIconkbtn w-24 h-12 rounded-lg p-2 ml-2' />
                                </div>
                                
                            </button>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <div className='text-2xl font-bold'>
                            <h1>Inventario</h1>    
                        </div>
                        <p className='mt-2'>realizar un seguimiento del inventario y la capacidad de eventos.</p>
                        <div className='mt-5 flex flex-row gap-4'>
                            <button className='w-2/6 rounded-xl bg-bgGreenbtn text-white p-4'>
                                <h1 className='text-left font-bold text-lg'>Auditoria</h1>
                                <div className='flex flex-row'>
                                    <p className='text-left text-sm'>Revisa los asientos vendidos y disponibles para tus eventos.</p>
                                    <BsCartDash className='bg-bgGreenIconbtn w-24 h-12 rounded-lg p-2 ml-2' />
                                </div>

                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row rounded-3xl bg-gray-200 w-3/6 px-3 py-2 mt-8'>
                    <FiHelpCircle className='relative top-1'/>
                    <p className='ml-2'>Obten mas informacion sobre 
                        <a href='/' className='text-blue-800'> gestionando pedidos</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reportes