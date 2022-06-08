import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { HiOutlinePhotograph } from 'react-icons/hi'
import { GrTextAlignCenter } from 'react-icons/gr'
import HeaderManager from "../../../../components/Header/HeaderManager"


const Details = () => {

    let infoInput = "Te invitamos a formar parte de tu primer pre encuentro camino al encuentro Vencedores."

  return (
    <>  
        <HeaderManager />
        <div className="flex flex-row">
            <SideBar />
            <SideEditEvents />
        </div>
        <div className='container mx-auto w-7/12 mt-28 mb-20'>
            <div className='ml-40'>
                <form>
                    <div className="flex flex-row">
                        <HiOutlinePhotograph className='text-gray-400 h-24 w-24' />
                        <div className="pl-4">
                            <h1 className='text-4xl font-bold text-titleTextColor'>Imagen de evento principal</h1>
                            <p className='mt-1 w-4/5 mb-4'>
                                Esta es la primera imagen que los asistentes verán en la parte superior de tu página del
                                evento. Usa una imagen de calidad alta: 2160 x 1080 píxeles (relación 2:1). 
                                <a className="text-blue-600" href="/"> Más información</a>
                            </p>
                            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132881255%2F512772892031%2F1%2Foriginal.20210421-051736?rect=0%2C36%2C1610%2C805&auto=format%2Ccompress&q=75&sharp=10&s=a172960905272810e90aee8764942ef2" alt="logo/img"/>
                        </div>
                    </div>

                    <hr className="mt-10" />

                    <div className="mt-10 flex flex-row">
                        <GrTextAlignCenter className='text-gray-400 h-16 w-16' />
                        <div className="pl-10">
                            <h1 className='text-4xl font-bold text-titleTextColor'>Descripcion</h1>
                            <p className='mt-1 w-4/5'>
                                Añade más detalles de tu evento como el programa, patrocinadores o invitados destacados.
                                <a className="text-blue-600" href="/"> Más información</a>
                            </p>
                            <div className="border flex flex-col p-1 mt-5 text-sm">
                                <label className="pl-2" htmlFor="">Resumen</label>
                                <input className="w-full pl-2 pb-4  outline-none" type="text" value={infoInput}/>
                            </div>
                            <div className="mt-5">
                                <textarea className="border w-full h-96" name="" id=""></textarea>
                            </div>
                            <div className="flex flex-row justify-around mt-5">
                                <div>
                                    <button className="border-2 hover:bg-gray-100 px-6 py-3">
                                        Añadir texto
                                    </button>
                                </div>
                                <div>
                                    <button className="border-2 hover:bg-gray-100 px-6 py-3">
                                        Añadir texto
                                    </button>
                                </div>
                                <div>
                                    <button className="border-2 hover:bg-gray-100 px-6 py-3">
                                        Añadir texto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Details;