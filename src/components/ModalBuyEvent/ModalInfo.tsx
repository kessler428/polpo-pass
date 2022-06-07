import { AiFillCheckCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export const ModalInfo = ({setConfirmation}: any) => {
    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="mx-auto border w-4/6 h-5/6 shadow-lg rounded-md bg-white flex flex-row">
                    <div className="w-1/2 h-full p-5 overflow-y-auto">
                        <div className="mt-3 flex flex-row border-b-2">
                            <AiFillCheckCircle className='text-green-600 h-10 w-10' />
                            <div className='ml-4'>
                                <h2 className="text-3xl">Gracias por tu orden</h2>
                                <p className="text-xl">#4527474873</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-3xl font-bold'>Entrepreneures innovation summit</h1>
                            <div className='mt-5 flex flex-col'>
                                <span className='font-bold'>1 Ticket enviado a</span>
                                <span>dcalvom@gmail.com</span>
                                <span>Enviar a otro correo</span>
                            </div>
                            <div className='mt-5 flex flex-col'>
                                <span className='font-bold'>Fecha</span>
                                <span>Martes 17 de mayo del 2022</span>
                                <span>08:00 - 22:00</span>
                            </div>
                            <div className='mt-5 flex flex-col'>
                                <span className='font-bold'>Lugar</span>
                                <span>San Jose, Costa Rica</span>
                                <span>Hotel Intercontinental</span>
                            </div>
                        </div>
                        
                        <div className='mt-8'>
                            <NavLink to='/'
                                className="border ml-2 border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                            >
                                Ver Tickets
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-1/2 h-full bg-bg-payment bg-cover bg-no-repeat'>
                        <div className='flex justify-end w-full'>
                            <NavLink to='/'
                                className='bg-gray-500 text-center text-white text-lg rounded-full w-6 mb-2 mt-2 mr-2'
                            >
                                X
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}