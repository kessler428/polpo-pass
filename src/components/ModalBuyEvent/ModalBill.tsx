import { useState } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import creditCard from '../../assets/creditCard.svg'
import paypal from '../../assets/paypal.svg'
import sendMoney from '../../assets/sendMoney.svg'
import transferencia from '../../assets/transferencia.svg'
import { Paypal } from './Paypal'

export const ModalBill = ({ openModal,setOpenModal }: any) => {

    const [modalPage, setModalPage] = useState(1)
    const [payment, setPayment] = useState(0)

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="mx-auto border w-4/6 h-5/6 shadow-lg rounded-md bg-white flex flex-row">
                    <div className="w-1/2 h-full p-5 overflow-y-auto">
                        {
                            modalPage === 1 && (
                                <>
                                    <div className="mt-3 text-left">
                                        <p className="font-bold text-xs">1.Seleccione <br /> sus entradas</p>
                                    </div>
                                    <div className="mt-3 text-left text-lg border-b-2 border-black">
                                        <h1 className='text-3xl'>ENTREPRENEURS INNOVATION SUMMIT</h1>
                                    </div>
                                    <div>
                                        <div className='mt-4'>
                                            <span className=' font-semibold'>Fecha y hora</span>
                                            <p className='font-bold'>Martes 17 de mayo de 2022</p>
                                        </div>
                                        <div className='mt-6'>
                                            <span className=' font-semibold'>Hora:</span>
                                            <p className='font-bold'>08:00 - 20:00</p>
                                            <p className=' font-semibold'>Hora central de costa rica</p>
                                        </div>
                                        <div className='mt-6'>
                                            <span className='font-bold'>Ubicacion:</span>
                                            <p className='font-semibold'>San Jose, Costa Rica - Hotel Intercontinental</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-6'>
                                        <div>
                                            <h5 className='font-bold'>Conferencias</h5>
                                            <p className='mt-6'>Track 1</p>
                                            <p className='mt-6'>Track 2</p>
                                            <p className='mt-6'>Track 3</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h5 className='font-bold'>Cantidad</h5>
                                            <select className='border w-16 h-8 mb-4 mt-5'>
                                                <option value="">0</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                            <select className='border w-16 h-8 mb-4'>
                                                <option value="">0</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                            <select className='border w-16 h-8 mb-4'>
                                                <option value="">0</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='font-bold'>Resumen del pedido</h2>
                                        <div className='flex flex-row justify-between border-b-2 border-black'>
                                            <p>3 x Acceso</p>
                                            <p>$30.00</p>
                                        </div>
                                        <div className='flex flex-row justify-between font-bold'>
                                            <p>Total</p>
                                            <p>$30.00</p>
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <button
                                            onClick={() => setModalPage(2)}
                                            className="border border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                                        >
                                            Siguiente
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            modalPage === 2 && (
                                <>
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
                                            <button 
                                                onClick={() => setPayment(1)} 
                                                className={ payment === 1 ? 
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-bgViolet rounded-2xl p-2' :
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-black rounded-2xl p-2'
                                                }
                                            >
                                                <img src={creditCard} alt="" />
                                                <p className='text-xs text-center'>Tarjeta de credito</p>
                                            </button>
                                            <button 
                                                onClick={() => setPayment(2)}
                                                className={ payment === 2 ? 
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-bgViolet rounded-2xl p-2' :
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-black rounded-2xl p-2'
                                                }
                                            >
                                                <img src={paypal} alt="" />
                                            </button>
                                            <button 
                                                onClick={() => setPayment(3)}
                                                className={ payment === 3 ? 
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-bgViolet rounded-2xl p-2' :
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-black rounded-2xl p-2'
                                                }
                                            >
                                                <img src={transferencia} alt="transferencia" />
                                                <p className='text-xs text-center'>transferencia</p>
                                            </button>
                                            <button 
                                                onClick={() => setPayment(4)}
                                                className={ payment === 4 ? 
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-bgViolet rounded-2xl p-2' :
                                                    'flex w-1/4 justify-center items-center cursor-pointer flex-col border-2 border-black rounded-2xl p-2'
                                                }
                                            >
                                                <img src={sendMoney} alt="" />
                                            </button>
                                        </div>
                                        {
                                            payment === 1 && (
                                                <div className='mt-4'>
                                                    <div className="w-full flex flex-row gap-2">
                                                        <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Numero de la tarjeta" type="text" />
                                                        <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Expira" type="text" />
                                                    </div>
                                                    <div className="w-full flex flex-row gap-2 mt-4">
                                                        <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="Nombre de la tarjeta" type="text" />
                                                        <input className="bg-gray-200 w-1/2 py-2 px-2 rounded-lg" placeholder="CVV" type="text" />
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            payment === 2 && (
                                                <Paypal />
                                            )
                                        }
                                        {
                                            payment === 3 && (
                                                <div className='mt-5'>
                                                    <label className='text-xl font-bold'>Ingrese su comprobante de pago</label>
                                                    <input className='mt-5' type="file" />
                                                </div>
                                            )
                                        }
                                        {
                                            payment === 4 && (
                                                <div className='mt-5'>
                                                    <label className='text-xl font-bold'>Ingrese su comprobante de pago</label>
                                                    <input className='mt-5' type="file" />
                                                </div>
                                            )
                                        }
                                    </div>
                                    
                                    <div className='mt-8'>
                                        <button
                                            onClick={() => setModalPage(3)}
                                            className="border border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                                        >
                                            Siguiente
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            modalPage === 3 && (
                                <>
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
                                            onClick={() => setModalPage(2)}
                                            className="border border-gray-400 rounded-full px-4 py-2 text-gray-400 font-bold"
                                        >
                                            Anterior
                                        </button>
                                        <button
                                            onClick={() => setModalPage(4)}
                                            className="border ml-2 border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                                        >
                                            Finalizar
                                        </button>
                                    </div>
                                </>
                            )
                        }
                        {
                            modalPage === 4 && (
                                <>
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
                                </>
                            )
                        }
                    </div>
                    <div className='w-1/2 h-full bg-bg-payment bg-cover bg-no-repeat'>
                        <div className='flex justify-end w-full'>
                            <button
                                onClick={() => setOpenModal(!openModal)}
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