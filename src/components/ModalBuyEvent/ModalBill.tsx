import { useState } from "react"
import { ModalDataPayment } from "./ModalDataPayment"

export const ModalBill = ({ openModal,setOpenModal }: any) => {

    const [modal2, setModal2] = useState(false)

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="mx-auto border w-4/6 h-5/6 shadow-lg rounded-md bg-white flex flex-row">
                    <div className="w-1/2 h-full p-5 overflow-y-auto">
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
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                                <select className='border w-16 h-8 mb-4'>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                                <select className='border w-16 h-8 mb-4'>
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
                                onClick={() => setModal2(true)}
                                className="border border-bgViolet rounded-full px-4 py-2 bg-bgViolet text-bgWhite font-bold"
                            >
                                Siguiente
                            </button>
                            {modal2 && <ModalDataPayment modal2={modal2} setModal2={setModal2}/>}
                        </div>
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