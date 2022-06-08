import { Link } from 'react-router-dom';
import { ModalValue } from '../../../interfaces/InterfacesSettings';


const Modal = ({ openModal }: ModalValue) => {

    return (
        <>
            {openModal && (
				
				
                    <div className="container absolute bg-white shadow-lg border-2 w-1/5 overflow-x-hidden">
                        <div className='flex-col mx-3 my-2'>
                            
                            <div className="flex-col px-3 my-2">
                                <Link
                                to="/editar_perfil"
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                    <p className="text-lg">Editar</p>
                                </Link>

                                <div
                                className="flex my-3 hover:bg-gray-100 p-3 w-full"
                                >
                                    <a className="text-lg" href='https://www.eventbrite.com/o/33170953597'>Ver</a>
                                </div>

                            </div>
                            
                        </div>
                    </div>
            )}
        </>
    )
}

export default Modal;
