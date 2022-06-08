import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { useState } from "react"
import { Admision } from "../../../../components/Admin/Eventos/EditEvents/Admision"
import { Complements } from "../../../../components/Admin/Eventos/EditEvents/Complements"
import { PromCod } from "../../../../components/Admin/Eventos/EditEvents/PromCod"
import { Holds } from "../../../../components/Admin/Eventos/EditEvents/Holds"
import { SettingsEvents } from "../../../../components/Admin/Eventos/EditEvents/SettingsEvents"
import HeaderManager from "../../../../components/Header/HeaderManager"

const Order = () => {

    const [showInformation, setshowInformation] = useState(1);

    return (
        <>  
            <HeaderManager />
            
            <SideBar />
            <SideEditEvents />
            
            <div className="flex flex-col justify-between">
                <div className='container mx-auto mt-28 mb-28'>
                    <div className='container ml-auto w-8/12 mt-5'>
                        <div>
                            <h1 className='text-4xl font-bold text-titleTextColor'>Entradas</h1>
                            <div className="flex flex-row justify-between mt-10">
                                <button 
                                    onClick={() => setshowInformation(1)}
                                    className={showInformation === 1 ? "text-blue-600 font-bold underline" : "text-gray-500 font-bold hover:text-black" }
                                >
                                    Admision
                                </button>
                                <button 
                                    onClick={() => setshowInformation(2)}
                                    className={showInformation === 2 ? "text-blue-600 font-bold underline" : "text-gray-500 font-bold hover:text-black" }
                                >
                                    Complementos
                                </button>
                                <button 
                                    onClick={() => setshowInformation(3)}
                                    className={showInformation === 3 ? "text-blue-600 font-bold underline" : "text-gray-500 font-bold hover:text-black" }
                                >
                                    Codigos Promocionales
                                </button>
                                <button 
                                    onClick={() => setshowInformation(4)}
                                    className={showInformation === 4 ? "text-blue-600 font-bold underline" : "text-gray-500 font-bold hover:text-black" }
                                >
                                    Retenidos
                                </button>
                                <button 
                                    onClick={() => setshowInformation(5)}
                                    className={showInformation === 5 ? "text-blue-600 font-bold underline" : "text-gray-500 font-bold hover:text-black" }
                                >
                                    Ajustes
                                </button>
                            </div>
                        </div>

                        <hr className="mt-5" />
                        
                        {   
                            showInformation === 1 && (
                                <Admision />
                            )
                        }

                        {   
                            showInformation === 2 && (
                                <div className="flex flex-col justify-between">
                                    <Complements />
                                </div>
                            )
                        }

                        {
                            showInformation === 3 && (
                                <div className="flex flex-col justify-between">
                                    <PromCod />
                                </div>
                            )
                        }

                        {
                            showInformation === 4 && (
                                <div className="flex flex-col justify-between">
                                    <Holds />
                                </div>
                            )
                        }

                        {
                            showInformation === 5 && (
                                <div className="flex flex-col justify-between">
                                    <SettingsEvents />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;