import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { BsFlag } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'

import { NavLink } from "react-router-dom";
import { DonutChart } from "../../../../components/Admin/Eventos/EditEvents/DonutChart"
import HeaderManager from "../../../../components/Header/HeaderManager"

interface ProgressBarProps {
    progressPercentage: any;
}

export const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
    return (
        <>
        <div className="flex flex-row">
            <div className='h-4 w-4/5 bg-gray-300 mt-1'>
                <div
                    style={{ width: `${progressPercentage}%`}}
                    className={`h-full ${
                        progressPercentage ? 'bg-orange-600' : 'bg-green-600'}`}>
                </div>
            </div>
            <div className="ml-2">
                {progressPercentage}%
            </div>
        </div>
        </>
    );
}; 

const Dashboard = () => {

    return (
        <>  
            <HeaderManager />
            <div className="flex flex-row">
                <SideBar />
                <SideEditEvents />
            </div>
            <div className='container ml-auto mr-10 w-8/12 mt-28 mb-16'>    
                <div className="flex flex-row justify-between border-b-2 pb-2">
                    <h1 className='text-4xl font-bold text-titleTextColor'>Panel de control del evento</h1>
                    <button className="pl-2 pr-16 border text-gray-300 px-2">Buscar asistentes</button>
                </div>
                <div className="flex flex-row mt-6 gap-2">
                    <div className="w-1/2 border-2 p-3 flex flex-row">
                        <div className="p-2 flex items-center">
                            <BsFlag />
                        </div>
                        <div className="flex flex-col">
                            <h4>Completados</h4>
                            <span className="text-sm">¡Enhorabuena por haber completado tu evento!</span>
                        </div>
                    </div>
                    <div className="w-1/2 p-3 border-2">
                        <span>10 entradas vendidas / 100</span>
                        <ProgressBar progressPercentage={10} />
                    </div>
                </div>
                <div className="grid grid-cols-3 w-2/3 border mt-2">
                    <div className="col-span-2">
                        <DonutChart />
                    </div>
                    <div>
                        <div className="p-4 flex flex-col">
                            <span className="text-blue-600">Entradas vendidas</span>
                            <span className="text-blue-600 text-2xl">0</span>
                        </div>
                        <div className="p-4 flex flex-col border">
                            <span>Complementos vendidos</span>
                            <span className="text-2xl">0</span>
                        </div>
                        <div className="p-4 flex flex-col border">
                            <span>Vistas de la página</span>
                            <span className="text-2xl">0</span>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 border flex flex-row">
                    <div className="w-1/2 border p-4">
                        <span className="font-bold">Entradas vendidas a traves de canales de PolpoPass</span>
                        <br />
                        <a className="text-blue-600" href="/">Mas informacion</a>
                    </div>
                    <div className="w-1/2 border p-4">
                        <div className="flex flex-row justify-between">
                            <span>Pendiente</span>
                            <span>0</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span>Disponible</span>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-4xl my-6 font-bold">Ventas por tipo de entrada</h3>
                    <div className="grid grid-cols-5 gap-2 border-b bg-gray-100 p-2">
                        <div>Tipo de entrada</div>
                        <div>Precio</div>
                        <div>Vendido</div>
                        <div>Estado</div>
                        <div>Fin de la venta</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 border-b hover:bg-gray-100 p-2">
                        <div>Ingreso general</div>
                        <div></div>
                        <div>0/100</div>
                        <div>Finalizado</div>
                        <div>23/04/21 20:00</div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-4xl my-6 font-bold">Informes habituales</h3>
                    <NavLink to='' className="flex flex-row hover:bg-gray-100 p-2 border-b justify-between">
                        <div className="flex flex-col">
                            <span>Resumen de asistentes</span>
                            <span>Informacion sobre los asistentes</span>
                        </div>
                        <div className="flex items-center">
                            <RiArrowRightSLine />
                        </div>
                    </NavLink>
                    <NavLink to='' className="flex flex-row hover:bg-gray-100 p-2 border-b justify-between">
                        <div className="flex flex-col">
                            <span>Respuestas a preguntas personalizadas</span>
                            <span>Informacion sobre los asistentes recopilada por preguntas en el formulario del pedido</span>
                        </div>
                        <div className="flex items-center">
                            <RiArrowRightSLine />
                        </div>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <h3 className="text-4xl my-6 font-bold">Pedidos recientes</h3>
                    <span>Todavia no hay pedidos para este evento</span>
                </div>
            </div>
                        
        </>
    )
}

export default Dashboard;