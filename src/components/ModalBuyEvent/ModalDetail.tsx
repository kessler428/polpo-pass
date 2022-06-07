import { useState } from 'react'
import creditCard from '../../assets/creditCard.svg'
import { ModalInfo } from './ModalInfo'

export const ModalDetail = ({setModal3}: any) => {

    const [confirmation, setConfirmation] = useState(false)

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="mx-auto border w-4/6 h-5/6 shadow-lg rounded-md bg-white flex flex-row">
                    <div className="w-1/2 h-full p-5 overflow-y-auto">
                        <div className="mt-3 text-right">
                            <p className="font-bold text-xs">3.Informacion de <br /> la compra</p>
                        </div>
                        <div className="mt-3 text-left text-lg">
                            <h1 className='text-3xl font-bold'>Entrepreneures innovation summit</h1>
                        </div>
                        <div className='flex flex-row w-full mt-6'>
                            <div className='w-1/2'>
                                <span className=' font-bold'>Fecha</span>
                                <p className='font-semibold'>Martes 17 de mayo de 2022</p>
                                <p className='font-semibold'>08:00 - 20:00</p>
                            </div>
                            <div className='w-1/2'>
                                <span className='font-bold'>Lugar</span>
                                <p className='font-semibold'>San Jose, Costa Rica <br /> Hotel Intercontinental</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <span className='font-bold'>Datos personales</span>
                            <p className='font-bold text-gray-600'>Daniel calvo</p>
                            <p className='font-bold text-gray-600'>danielcalvom@gmail.com</p>
                        </div>
                        <div className='mt-4'>
                            <span className='font-bold'>Metodo de pago</span>
                            <div className='flex w-1/4 justify-center items-center flex-col border-4 border-green-400 rounded-2xl p-2 mt-4'>
                                <img src={creditCard} alt="" />
                                <p className='text-xs text-center'>Trajeta de credito</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <span className='font-bold'>Detalle de compra</span>
                            <div className='flex flex-row justify-between border-b border-black'>
                                <div className='flex flex-col'>
                                    <span>Track 1</span>
                                    <span>Track 2</span>
                                    <span>Track 3</span>
                                    <span className='text-gray-600'>1 x Acceso</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>1 Ticket</span>
                                    <span>1 Ticket</span>
                                    <span>1 Ticket</span>
                                    <span className='text-gray-600'>$30.00</span>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between font-bold'>
                                <p>Total</p>
                                <p>$30.00</p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <button
                                onClick={() => setModal3(false)}
                                className="border border-gray-400 rounded-full px-4 py-2 text-gray-400 font-bold"
                            >
                                Anterior
                            </button>
                            <button
                                onClick={() => setConfirmation(true)}
                                className="border ml-2 border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                            >
                                Finalizar
                            </button>
                            {confirmation && <ModalInfo setConfirmation={setConfirmation}/>}
                        </div>
                    </div>
                    <div className='w-1/2 h-full bg-bg-payment bg-cover bg-no-repeat'>
                        <div className='flex justify-end w-full'>
                            <button
                            onClick={() => setModal3(false)}
                                className='bg-gray-500 text-white text-lg rounded-full w-6 mb-2 mt-2 mr-2'
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
