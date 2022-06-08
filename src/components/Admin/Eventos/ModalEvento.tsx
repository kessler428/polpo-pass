import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEdit, AiOutlineCopy } from "react-icons/ai"
import { RiDeleteBinLine } from "react-icons/ri"
import { ModalProps } from '../../../interfaces/InterfacesEvents';


const ModalEvento = ({ openModal }: ModalProps) => {

    return (
        <div className='flex justify-end m-20 -mt-96'>
            {openModal && (
                <div className="container absolute bg-white -mt-28 shadow-lg border-2 w-auto overflow-x-hidden">
                    <div className='flex-col'>
                        <div className="flex-col">

                            <Link
                                to="/view_event"
                                className="flex hover:bg-gray-100 w-48"
                            >
                                <AiOutlineEye className='w-5 h-5 mt-5 ml-3' />
                                <p className="py-4 text-lg ml-4">Ver</p>
                            </Link>

                            <Link
                            to="/editar_evento/informacion_basica"
                            className="flex hover:bg-gray-100 w-48"
                            >
                                <AiOutlineEdit className='w-5 h-5 mt-5 ml-3' />
                                <p className="py-4 text-lg ml-4">Editar</p>
                            </Link>

                            <Link
                            to="/"
                            className="flex hover:bg-gray-100 w-48"
                            >
                                <AiOutlineCopy className='w-5 h-5 mt-5 ml-3' />
                                <p className="py-4 text-lg ml-4">Copiar URL</p>
                            </Link>

                            <hr />

                            <Link
                            to="/"
                            className="flex hover:bg-gray-100 w-48"
                            >
                                <AiOutlineCopy className='w-5 h-5 mt-5 ml-3' />
                                <p className=" py-4 text-lg ml-4">Copia evento</p>
                            </Link>

                            <Link
                            to="/"
                            className="flex hover:bg-gray-100 w-48"
                            >
                                <RiDeleteBinLine className='text-red-500 w-5 h-5 mt-5 ml-3' />
                                <p className=" py-4 text-lg ml-4">Eliminar</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalEvento
