import HeaderManager from "../../../../components/Header/HeaderManager"
import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { GiTicket } from 'react-icons/gi'
import { MdOutlineAccountCircle } from 'react-icons/md'


const Publish = () => {

    return (
        <>  
            <HeaderManager />
            <div className="flex flex-row">
                <SideBar />
                <SideEditEvents />
            </div>
            <div className='container ml-auto w-8/12 mt-28 mb-16'>    
                <div>
                    <h1 className='text-4xl font-bold text-titleTextColor'>Publica tu evento</h1>
                </div>
                <div className="border-2 flex flex-row w-5/6 mt-5 shadow-lg">
                    <div>
                        <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132881255%2F512772892031%2F1%2Foriginal.20210421-051736?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C36%2C1610%2C805&s=d50766b5aa82ae6d398d987e7361da8c" alt="" />
                    </div>
                    <div className="p-4">
                        <div className="border-b-2 pb-4">
                            <h3 className="text-xl">Pre-Encuentro #1 - Encuentro Vencedores</h3>
                            <p className="text-xs mt-2">viernes 23 abril 2021 a las 19:00 CST</p>
                            <p className="text-xs mt-1">Salon Mix Iglesia Oasis, San Vicente, San José 11401</p>
                            <div className="flex flex-row mt-3">
                                <div className="flex flex-row">
                                    <GiTicket className="mt-1 h-4 w-8" />
                                    <span>0,00$</span>
                                </div>
                                <div className="flex flex-row">
                                    <MdOutlineAccountCircle className="mt-1 ml-4 h-4 w-8" />
                                    <span>100</span>
                                </div>
                            </div>
                            <p className="text-xs">Te invitamos a formar parte de tu primer pre encuentro camino al encuentro Vencedores.</p>
                        </div>
                        <div className="text-blue-600 text-sm text-center mt-2">
                            <a href="/">Ver en PolpoPass</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="font-bold">¿Quién puede ver tu evento?</h3>
                    <div className="mt-4">
                        <div className="flex flex-row">
                            <input type="checkbox" className="mt-3"/>
                            <div className="flex flex-col ml-2">
                                <p className="text-sm">Publico</p>
                                <p className="text-xs">Compartido en Eventbrite y motores de búsqueda.</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <input type="checkbox" className="mt-3"/>
                            <div className="flex flex-col ml-2">
                                <p className="text-sm">Privado</p>
                                <p className="text-xs">Unicamente disponible a una audiencia seleccionada.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="font-bold">Elige a tu audiencia</h3>
                    <div className="border flex flex-col w-2/5 mt-5">
                        <label className="text-xs pl-4 pt-1">Audiencia</label>
                        <select className="text-sm ml-4">
                            <option value="">Cualquiera que tenga vehiculo</option>
                            <option value="">Solo quienes tengan una invitacion de polpo pass</option>
                            <option value="">Solo quienes tengan la contraseña</option>
                        </select>
                    </div>
                </div>
            </div>
                        
        </>
    )
}

export default Publish;