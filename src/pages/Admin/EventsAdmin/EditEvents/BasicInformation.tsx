import SideBar from "../../../../components/SideBar"
import { SideEditEvents } from "../../../../components/SideBar/SideEditEvents"

import { AiOutlineCalendar } from 'react-icons/ai'
import { BsPencil, BsSearch } from "react-icons/bs";

import { tipoDeEvento, Categoria } from '../SelectsData'
import { useState } from "react"
import HeaderManager from "../../../../components/Header/HeaderManager";


const BasicInformation = () => {

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
        <div className='container ml-auto w-8/12 mt-28 mb-16'>
            <div className='container mx-auto w-10/12 mt-5'>
                <form>
                    <div>
                        <h1 className='text-4xl font-bold text-titleTextColor'>Informacion basica</h1>
                        <p className='mt-1 w-4/5'>
                            Elige un nombre para tu evento y cuéntales a los asistentes por qué crees
                            que lo van a pasar genial. Añade detalles que destaquen por qué tu evento es único.
                        </p>
                    </div>
                    <div className='w-full border-gray-300 border-2 pt-2 bg-white mt-10'>
                        <label className='block text-gray-700 text-sm font-bold ml-3'>Nombre del evento</label>
                        <input 
                        type="text" 
                        className='w-full text-gray-700 px-4 pb-2 outline-none'
                        placeholder='Describe con claridad'
                        />
                    </div>
                    <div className='w-full border-gray-300 border-2 pt-2 bg-white mt-10'>
                        <label className='block text-gray-700 text-sm font-bold ml-3'>Organizador</label>
                        <input 
                            type="text" 
                            className='w-full text-gray-700 px-4 pb-2 outline-none'
                            placeholder='Di a tus asistentes quien organiza el evento'
                        />
                    </div>
                    <div className='mt-5 w-full flex flex-row'>
                        <div className="w-1/3 border-2">
                            <div className='flex flex-col py-4 px-3 bg-white'>
                                <select name="" id="" className='text-base outline-none'>
                                    <option value="none">Tipo</option>
                                        {tipoDeEvento.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.Tipo}
                                                </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-1/3 border-2 ml-3">
                            <div className='flex flex-col py-4 px-3 bg-white'>
                                <select name="Categoria" id="Categoria" className='text-base outline-none'>
                                    <option value="none">Categoria  </option>
                                        {Categoria.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                                onClick={handleCategoria}
                                            >
                                                {item.categoria}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        {
                            subCategoria !== false && (
                                <div className="w-1/3 border-2 ml-3">
                                    <div className='flex flex-col py-4 px-3 bg-white'>
                                        <select name="SubCategoria" id="SubCategoria" className='text-base'>
                                            <option value="none">Sub Categoria</option>
                                                
                                        </select>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <div className='mt-5'>
                            <h1 className='text-xl font-bold'>Etiquetas</h1>
                            <p className='text-base mt-2'>Mejora las posibilidades de que descubran tu evento añadiendo etiquetas relevantes para el tema.</p>
                        </div>
                        <div className='w-full '>
                            <div className='border-gray-300 border-2 pt-2 bg-white mt-2'>
                                <label className='block text-gray-500 text-sm ml-3'>Pulsa intro para añadir una etiqueta</label>
                                <input 
                                type="text" 
                                className='w-full text-gray-500 px-4 pb-2 outline-none'
                                placeholder='Añade palabras de busqueda a tu evento'
                                />
                            </div>
                            <p className='text-sm text-gray-600'>Las etiquetas solo pueden contener letras, numeros y guiones bajos.</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='px-8 rounded-lg py-3 border-2 border-gray-400'>Añadir</button>
                    </div>

                    <hr className='mt-12'/>

                    <div>
                        <div className='mt-8'>
                            <h1 className='text-4xl font-bold'>Ubicación</h1>
                            <p className='mt-1 w-4/5'>
                                Ayuda a la gente de la zona a descubrir el evento y
                                asegúrate de que tus asistentes sepan adónde ir.
                            </p>
                        </div>
                        <div>
                          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62423.89286618195!2d-86.23862423756167!3d12.078343911440601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sni!4v1652130728430!5m2!1sen!2sni" width="100%" height="200" ></iframe>
                          <div className="border p-5">
                            <span className="text-sm">Iglesia Oasis</span>
                            <div className="flex flex-row justify-between">
                              <p className="text-sm">Salon Mix, Iglesia Oasis, San Vicente, San Jose, 11404</p>
                              <div className="flex flex-row">
                                <BsPencil className="mr-4" />
                                <BsSearch className="mr-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                    </div>

                    <hr className='mt-12'/>

                    <div>
                        <div className='mt-8'>
                            <h1 className='text-4xl font-bold text-titleTextColor'>Fecha y hora</h1>
                            <p className='mt-1 w-4/5'>
                                Informa a los asistentes cuándo empieza y termina el evento 
                                para que puedan organizarse.
                            </p>
                        </div>
                        <div className='flex flex-row mt-8'>
                            <div className=''>
                                <button className='px-6 py-3 text-center border-gray-500 border rounded-lg'>Evento individual</button>
                            </div>
                            <div className='ml-5'>
                                <button className='px-6 py-3 text-center border-gray-500 border rounded-lg'>Evento recurrente</button>
                            </div>
                        </div>
                        <p className='mt-3'>
                            Un evento único ocurre una vez y puede durar varios días.
                        </p>
                        <div className='flex flex-row mt-5'>
                        <div className='w-1/2 border-2 py-2 flex flex-row'>
                                <AiOutlineCalendar className='h-6 w-6 mt-3 ml-3'/>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='pl-4'>El evento comienza</label>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className='w-1/2 border-2 ml-4 py-2 flex flex-col'>
                                <label htmlFor="" className='pl-4'>Hora de inicio</label>
                                <div className='pl-4'>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row mt-4'>
                            <div className='w-1/2 border-2 py-2 flex flex-row'>
                                <AiOutlineCalendar className='h-6 w-6 mt-3 ml-3'/>
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='pl-4'>El evento termina</label>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className='w-1/2 border-2 ml-4 py-2 flex flex-col'>
                                <label htmlFor="" className='pl-4'>Hora de finalizacion</label>
                                <div className='pl-4'>
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='flex flex-row'>
                                <input className='h-6 w-6 mt-3' type="checkbox" name="" id="" />
                                <div className='flex flex-col ml-4'>
                                    <h1>Mostrar hora de inicio.</h1>
                                    <p>A los asistentes se les mostrará la hora de inicio de tu evento.</p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-5'>
                                <input className='h-6 w-6 mt-3' type="checkbox" name="" id="" />
                                <div className='flex flex-col ml-4'>
                                    <h1>Mostrar hora de fin.</h1>
                                    <p>A los asistentes se les mostrará la hora de fin de tu evento.</p>
                                </div>
                            </div>
                            <div className="w-2/3 border mt-5">
                            <div className='flex flex-col py-2 px-2 bg-white'>
                                <label className='text-sm text-gray-500' >Zona horaria</label>
                                <select name="" id="" className='text-base'>
                                    <option value="none">(GMT-0600) hora de Niicaragua</option>
                                        {tipoDeEvento.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.Tipo}
                                                </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-2/3 border mt-5">
                            <div className='flex flex-col py-2 px-2 bg-white'>
                                <label className='text-sm text-gray-500' >Idioma de la pagina del evento</label>
                                <select name="" id="" className='text-base'>
                                    <option value="none">español (España)</option>
                                        {tipoDeEvento.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.Tipo}
                                                </option>
                                        ))}
                                </select>
                            </div>
                        </div>
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

export default BasicInformation;