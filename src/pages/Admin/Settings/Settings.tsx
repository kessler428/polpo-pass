// React Hooks
import  { useState } from 'react'

// Imagenes
import More from "../../../assets/More.svg";

// React Icons
import { AiOutlineFileImage } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';

// Components
import SideBar from '../../../components/SideBar';
import Modal from '../../../components/Admin/Settings/Modal';
import HeaderManager from '../../../components/Header/HeaderManager';

const Settings = () => {
    let navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        navigate('/editar_perfil');
    }

    return (
        <>
            <HeaderManager />
            <SideBar />
            <hr />

            <div className='bg-bgWhite'>
                <div className='container mx-auto w-8/12 pt-28 pb-12'>
                    <h1 className='text-6xl text-titleTextColor font-bold'>Ajustes de organización</h1>
                    <div className='mt-14 ml-4'>
                        <h1 className=' text-2xl font-bold'>Organizacion</h1>
                        <p>Detalles que se aplican a todos tus eventos y lugares</p>
                        <div className='mt-10'>
                            <label
                                className='text-lg font-semibold text-black bg-gray-100 border inline-block transition-all cursor-pointer pt-12 pb-8 px-8 w-1/4 text-center'
                            >
                                <AiOutlineFileImage className='h-8 w-8 flex text-gray-400 ml-20 mb-2' />
                                Arrastra y coloca o haz click para añadir el logo de la organización
                                <p className=' font-normal'>JPEG O PNG, no mayores a 10 MB</p>
                                <input type="file" className=' w-0 h-0 overflow-hidden absolute -z-0 opacity-0' />
                            </label>
                            <div className='mb-6 w-2/3 pt-1 border bg-white mt-10'>
                                <label className='block text-gray-700 text-sm ml-4 pt-1'>Nombre de la organización</label>
                                <input
                                    className=' rounded w-full text-gray-700 px-4 pb-2'
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    placeholder='Introduce un nombre de organización'
                                />
                            </div>
                            <div className='mb-6 w-2/3 pt-1 border bg-white mt-5 flex flex-col'>
                                <label htmlFor="" className='block text-gray-700 text-sm ml-3'>Pais preferido</label>
                                <select name="" id="" className='text-base ml-2 pb-2'>
                                    <option value="">Seleccionar un pais</option>
                                    <option value="">Costa Rica</option>
                                    <option value="">Nicaragua</option>
                                    <option value="">Honduras</option>
                                    <option value="">El salvador</option>
                                    <option value="">Panama</option>
                                    <option value="">Chile</option>
                                    <option value="">Canada</option>
                                    <option value="">España</option>
                                    <option value="">Estados Unidos</option>
                                    <option value="">Uruguay</option>
                                    <option value="">Paraguay</option>
                                    <option value="">Brazil</option>
                                    <option value="">Argentina</option>
                                    <option value="">Ecuador</option>
                                    <option value="">Francia</option>
                                </select>
                            </div>
                            <div className='mt-16'>
                                <h1 className=' text-2xl font-bold'>Perfiles del organizador</h1>
                                <p className='mt-2'>Cada perfil describe a un organizador único y muestra todos sus eventos en una página.
                                    Tener un perfil completo puede animar a los asistentes a que te sigan
                                    <a className='text-blue-600'
                                        href='https://www.eventbrite.es/support/articles/es/How_To/como-configurar-la-pagina-de-perfil-del-organizador?lg=es'>
                                        . Más información.
                                    </a></p>
                            </div>
                            <div className='w-full flex justify-end'>
                                <Link
                                    to="/agregar_perfil"
                                    className='border-2 border-gray-500 hover:bg-gray-100 p-4 rounded-lg'>
                                    Añadir perfil de organizador
                                </Link>
                            </div>
                            <div
                                className='w-full flex flex-row border-2 px-6 py-4 mt-5 justify-between'>
                                <div className='flex flex-row  cursor-pointer'
                                    onClick={handleClick}
                                >
                                    <RiAccountCircleLine className='h-12 w-12' />
                                    <p className='mt-3 ml-3'>Organizador anonimo</p>
                                </div>
                                <div>
                                    <div className=''
                                        onClick={() => {
                                            setOpenModal(!openModal)
                                        }}>
                                        <img
                                            className="ml-2 -mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-6 py-4"
                                            src={More}
                                            alt="More"

                                        />
                                    </div>
                                    {openModal && (
                                        <Modal
                                            openModal={openModal}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;