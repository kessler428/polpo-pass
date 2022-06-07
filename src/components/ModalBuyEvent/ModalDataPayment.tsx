import { useState } from 'react'
import creditCard from '../../assets/creditCard.svg'
import paypal from '../../assets/paypal.svg'
import sendMoney from '../../assets/sendMoney.svg'
import transferencia from '../../assets/transferencia.svg'
import { ModalDetail } from './ModalDetail'

export const ModalDataPayment = ({ modal2 ,setModal2 }: any) => {

    const [modal3, setModal3] = useState(false)

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="mx-auto border w-4/6 h-5/6 shadow-lg rounded-md bg-white flex flex-row">
                    <div className="w-1/2 h-full p-5 overflow-y-auto">
                        <div className="mt-3 text-center">
                            <p className="font-bold text-xs">2.Datos y metodo <br /> de pago</p>
                        </div>
                        <div className="mt-3 text-left text-lg">
                            <h1 className='text-2xl font-bold'>Datos personales</h1>
                        </div>
                        
                        <div className="mt-4">
                            <div className="w-full flex flex-row gap-4">
                                <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Nombre" type="text" />
                                <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Apellido" type="text" />
                            </div>
                            <div className="w-full mt-4">
                                <input className="bg-gray-200 w-full py-2 px-2 rounded-lg" placeholder="Email" type="text" />
                            </div>
                            <div>
                                <div className="flex flex-row mt-4">
                                    <input className="bg-gray-800 mt-3" type="checkbox" name="" id="" />
                                    <p className="text-sm ml-2">Mantenme actualizado sobre mas eventos y noticias de este organizador de eventos</p>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <input className="bg-gray-800 mt-3" type="checkbox" name="" id="" />
                                    <p className="text-sm ml-2">Enviadme correos electronicos sobre los mejores eventos que suceden cerca o en linea</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h2 className="font-bold text-2xl">Escoja el metodo de pago</h2>
                            </div>
                            <div className='w-full flex flex-row gap-2 mt-5'>
                                <div className='flex w-1/4 justify-center items-center flex-col border-2 border-black rounded-2xl p-2'>
                                    <img src={creditCard} alt="" />
                                    <p className='text-xs text-center'>Trajeta de credito</p>
                                </div>
                                <div className='flex w-1/4 justify-center items-center flex-col border-2 border-black rounded-2xl p-2'>
                                    <img src={paypal} alt="" />
                                </div>
                                <div className='flex w-1/4 justify-center items-center flex-col border-2 border-black rounded-2xl p-2'>
                                    <img src={transferencia} alt="transferencia" />
                                    <p className='text-xs text-center'>transferencia</p>
                                </div>
                                <div className='flex w-1/4 justify-center items-center flex-col border-2 border-black rounded-2xl p-2'>
                                    <img src={sendMoney} alt="" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="w-full flex flex-row gap-2">
                                    <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Numero de la tarjeta" type="text" />
                                    <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Expira" type="text" />
                                </div>
                                <div className="w-full flex flex-row gap-2 mt-4">
                                    <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Nombre de la tatjeta" type="text" />
                                    <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="CVV" type="text" />
                                </div>
                            </div>
                        </div>
                        
                        <div className='mt-8'>
                            <button
                                onClick={() => setModal3(true)}
                                className="border border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                            >
                                Siguiente
                            </button>
                            {modal3 && <ModalDetail setModal3={setModal3}/>}
                        </div>
                    </div>
                    <div className='w-1/2 h-full bg-bg-payment bg-cover bg-no-repeat'>
                        <div className='flex justify-end w-full'>
                            <button
                                onClick={() => setModal2(!modal2)}
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