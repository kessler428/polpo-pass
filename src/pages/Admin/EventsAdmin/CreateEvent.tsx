//React Hooks 
import { useState } from 'react'

//React Icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineCalendar } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'

//Componentes
import SideBar from '../../../components/SideBar'
import HeaderManager from '../../../components/Header/HeaderManager'

//Data
import { tipoDeEvento, Categoria } from './SelectsData'

const CreateEvent = () => {
    
    const [subCategoria, setSubCategoria] = useState(false)

    const handleCategoria = () => {
		setSubCategoria(true);
	};


  return (
    <>
        <HeaderManager />
        <SideBar />
        <hr />
        <div className='container mx-auto w-8/12 pt-28 pb-16'>
            <div className='text-blue-600 flex flex-row hover:underline'>
                <MdKeyboardArrowLeft className='relative top-1 ' />
                <a href="/events">Eventos</a>
            </div>
            <div className='container mx-auto w-8/12 mt-5'>
                <form>
                    <div>
                        <h1 className='text-4xl font-bold'>Informacion basica</h1>
                        <p className='mt-1 w-4/5'>
                            Elige un nombre para tu evento y cuéntales a los asistentes por qué crees
                            que lo van a pasar genial. Añade detalles que destaquen por qué tu evento es único.
                        </p>
                    </div>
                    <div className='w-full border-gray-300 border-2 pt-2 bg-white mt-10'>
                        <label className='block text-gray-700 text-sm font-bold ml-3'>Nombre del evento</label>
                        <input 
                        type="text" 
                        className='w-full text-gray-700 px-4 pb-2'
                        placeholder='Describe con claridad'
                        />
                    </div>
                    <div className='w-full border-gray-300 border-2 pt-2 bg-white mt-10'>
                        <label className='block text-gray-700 text-sm font-bold ml-3'>Organizador</label>
                        <input 
                            type="text" 
                            className='w-full text-gray-700 px-4 pb-2'
                            placeholder='Di a tus asistentes quien organiza el evento'
                        />
                    </div>
                    <div className='mt-5 w-full flex flex-row'>
                        <div className="w-1/3 border-2">
                            <div className='flex flex-col py-4 px-3 bg-white'>
                                <select name="" id="" className='text-base'>
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
                                <select name="Categoria" id="Categoria" className='text-base'>
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
                                className='w-full text-gray-500 px-4 pb-2'
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
                        <div className='flex flex-row mt-8'>
                            <div className=''>
                                <button className='px-6 py-3 text-center border-gray-500 border rounded-lg'>Lugar</button>
                            </div>
                            <div className='ml-5'>
                                <button className='px-6 py-3 text-center border-gray-500 border rounded-lg'>Evento online</button>
                            </div>
                            <div className='ml-5'>
                                <button className='px-6 py-3 text-center border-gray-500 border rounded-lg'>Por Anunciar</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-bold text-gray-700'>Ubicacion del lugar del evento</h3>
                        </div>
                        <div className="w-full border border-gray-500 flex flex-row mt-2">
                            <BsSearch className="relative ml-4 top-5 text-icons" />
                            <input
                            className="w-full h-14 pl-2"
                            placeholder="Buscar evento"
                            type="text"
                            />
                        </div>
                    </div>

                    <hr className='mt-12'/>

                    <div>
                        <div className='mt-8'>
                            <h1 className='text-4xl font-bold'>Fecha y hora</h1>
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
        <div className='flex justify-end pb-8 border-t-2'>
            <div className='mt-6'>
                <button className='px-6 py-3 border-2 border-gray-400 mr-8 font-bold rounded-lg'>Descartar</button>
                <button className='text-white font-bold px-4 py-3 rounded-lg bg-bgViolet mr-8'>Guardar y continuar</button>
            </div>
        </div>
    </>
  )
}

export default CreateEvent