import { useState } from "react"
import { FaBars, FaPlus } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { RiErrorWarningLine } from 'react-icons/ri'

import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"
import Switch from "../../../../components/Switch"

import More from '../../../../assets/More.svg'
import { TableForm } from "../../../../components/Admin/Eventos/EditEvents/TableForm"
import HeaderManager from "../../../../components/Header/HeaderManager"


const OrderForm = () => {

    const [showForm, setShowForm] = useState(true)
    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)

    return (
        <>  
            <HeaderManager />
            <div className="flex flex-row">
                <SideBar />
                <SideEditEvents />
            </div>
            <div className='container ml-auto mr-40 w-7/12 mt-28 mb-16'>    
                <div className="pb-2">
                    <h1 className='text-4xl font-bold text-titleTextColor'>Formulario de pedido</h1>
                    <p className="mt-3">Gestiona la información que recopilas de los asistentes durante la finalización de la compra.</p>
                </div>
                <div className="pb-2">
                    <h1 className='text-2xl font-bold text-titleTextColor'>Recopilar información de</h1>
                    <div className="flex flex-row mt-5">
                        <div className="">
                            <button
                                onClick={() => setShowForm(true)}
                                className={showForm ? 
                                    'bg-blue-50 border-blue-400 text-blue-700 text-center flex-initial w-40 border py-3 px-2 mr-2 rounded-lg' : 
                                    'bg-white text-center flex-initial w-40 border py-3 px-2 mr-2 rounded-md'}
                                >
                                Solo comprador
                            </button>
                        </div>
                        <div className="">
                            <button 
                                onClick={() => setShowForm(false)}
                                className={
                                    showForm ? 
                                    'bg-white text-center flex-initial w-40 border py-3 px-2 mr-2 rounded-md' : 
                                    'bg-blue-50 border-blue-400 text-blue-700 text-center flex-initial w-40 border py-3 px-2 mr-2 rounded-lg'
                                }>
                                Cada asistente
                            </button>                    
                        </div>
                    </div>
                </div>
                {
                    showForm ? (
                        <>
                        </>
                    ) : (
                        <div className="flex flex-col mt-4">
                            <p className="text-sm font-bold">Recopilar información de asistentes de las siguientes entradas</p>
                            <div className="flex flex-row mt-2">
                                <input className="mt-1 w-4 h-4" type="checkbox" checked={true} />
                                <p className="ml-2">Ingreso General</p>
                            </div>
                        </div>
                    )
                }
                <div className="border-b-2 pb-4 mt-4">
                    <h3 className="text-2xl font-bold text-titleTextColor">¿Qué necesitas saber sobre tus asistentes?</h3>
                    <TableForm />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-titleTextColor">Recopilar más información</h3>
                    <div className="flex flex-row justify-between mt-5 hover:shadow-lg py-4 px-8 cursor-pointer border-b">
                        <FaBars />
                        <span>Si asiste en vehículo por favor indique la placa</span>
                        <Switch toggle={switch1} setToggle={setSwitch1} />
                        <Switch toggle={switch2} setToggle={setSwitch2} />
                        <img src={More} alt="Options" />
                    </div>
                    <button className="flex flex-row mt-5 text-blue-600 p-4 hover:bg-gray-200 rounded">
                        <FaPlus className="mt-1 " />
                        <p className="ml-2">Añadir pregunta</p>
                    </button>
                </div>
                <div className="mt-10">
                    <h3 className="text-2xl font-bold text-titleTextColor border-b pb-4">Ajustes de formulario de pedido</h3>
                    <div className="mt-4 border-b pb-4">
                        <input type="checkbox" checked={true} className="w-5 h-5 mt-2" />
                        <span className="ml-4">Permitir que los asistentes editen información después del pedido</span>
                    </div>
                    <div className="flex flex-row gap-10 pb-10 border-b">
                        <div className="w-1/3">
                            <h4 className="text-xl font-bold text-titleTextColor py-4">Límite de tiempo de registro</h4>
                            <p className="text-sm">
                                Limita cuánto tiempo se retienen las entradas durante la finalización de compra.
                                Asegúrate de dar suficiente tiempo a los asistentes para completar el formulario
                                de pedido.
                            </p>
                        </div>
                        <div className="w-2/3 py-6">
                            <div className="border flex flex-row w-32 justify-center py-2">
                                <BiTime className="mt-1" />
                                <span>8 minutos</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 pb-10 border-b">
                        <div className="w-1/3">
                            <h4 className="text-xl font-bold text-titleTextColor py-4">Añadir instrucciones especiales</h4>
                            <p className="text-sm">
                                Incluye cualquier instrucción especial en la parte superior de tu formulario de pedido.
                            </p>
                            <p className="text-sm mt-4">
                                Añade instrucciones para asistir al evento en la <a className="text-blue-600" href="/"> página de confirmación.</a>
                            </p>
                        </div>
                        <div className="w-2/3 py-6">
                            <textarea className="w-full h-full border"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 pb-4 border-b">
                        <div className="w-1/3">
                            <h4 className="text-xl font-bold text-titleTextColor py-4">Registro de grupo</h4>
                            <p className="text-sm">
                                Permite que los asistentes se registren como parte de un grupo, equipo,
                                organización, empresa o asociación.
                            </p>
                        </div>
                        <div className="w-2/3 py-6">
                            <div className="flex flex-row bg-gray-200 px-6 py-3">
                                <RiErrorWarningLine className="mt-1" />
                                <p className="ml-4 text-sm">Para activar el registro de grupos, debes recopilar la información de cada asistente.</p>
                            </div>
                            <button className="px-4 py-2 border text-gray-300 mt-2 text-sm">
                                Activar el registro de grupo
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row">
                        <div className="mt-1">
                            <Switch toggle={switch3} setToggle={setSwitch3} />
                        </div>
                        <p className="ml-4">Aceptar solicitudes de reembolso</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mb-8 border-t-2'>
                <div className='mt-6'>
                    <button className='px-6 py-3 border-2 border-gray-400 mr-8 font-bold rounded-lg'>Descartar</button>
                    <button className='text-white font-bold px-4 py-3 rounded-lg bg-bgButton hover:bg-bgButtonHover mr-8'>Guardar y continuar</button>
                </div>
            </div>
        </>
    )
}

export default OrderForm;