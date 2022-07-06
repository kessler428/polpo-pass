import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { AiOutlineCalendar } from 'react-icons/ai'
import { BsPencil, BsSearch } from "react-icons/bs";

import { tipoDeEvento, Categoria } from '../SelectsData'
import { useState } from "react"
import HeaderManager from "../../../../components/Header/HeaderManager";


const TicketBuyer = () => {

  const [subCategoria, setSubCategoria] = useState(false)

  const handleCategoria = () => {
		setSubCategoria(true);
	};

  return (
    <>  
        <HeaderManager />
        <div className="flex flex-row">
            <SideBar />
            <SideEditEvents />
        </div>
        <div className='container ml-auto w-9/12 mt-28 mb-16'>
            <div className='container mx-auto w-10/12 mt-5'>
                <form>
                    <h1 className='text-4xl font-bold text-titleTextColor'>Editar información de comprador de entradas</h1>
                    <p className="my-8">Comprador de la entrada - (N.º de pedido3792389979)</p>
                    <hr />

                    <div className="text-sm">
                      <p>La información que se recopila en tus páginas de registro de eventos se muestra a continuación.</p>
                      <p>Ahora puedes personalizar la información que recopilas durante el registro de asistentes.</p>
                    </div>

                    <div className="mt-10 w-1/2">
                      <h3>Informacion de contacto</h3>
                      <div className="flex flex-row justify-between mt-5">
                        <label htmlFor="">Prefijo</label>
                        <select name="" id="" className="border-2 px-8 py-3">
                          <option value="">Sr.</option>
                          <option value="">Sra.</option>
                          <option value="">Srta.</option>
                          <option value="">Dr.</option>
                          <option value="">Dra.</option>
                          <option value="">Prof.</option>
                          <option value="">Profa.</option>
                          <option value="">D.</option>
                          <option value="">Da.</option>
                        </select>
                      </div>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className='flex justify-end border-t-2'>
            <div className='mt-4 mb-4'>
                <button className='px-6 py-3 border-2 border-gray-400 mr-8 font-bold rounded-lg'>Descartar</button>
                <button className='text-white font-bold px-4 py-3 rounded-lg bg-bgViolet mr-8'>Guardar y continuar</button>
            </div>
        </div>
    </>
  )
}

export default TicketBuyer;