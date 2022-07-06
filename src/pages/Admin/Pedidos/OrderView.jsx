import { AiOutlineCalendar, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import HeaderManager from "../../../components/Header/HeaderManager"
import SideBar from "../../../components/SideBar"
import event from "../../../images/Virtual-event.jpg"
import { IoLocation } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { DataTableView } from "../../../components/Admin/Pedidos/OrderView/DataTableView";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


export const OrderView = () => {
    return (
        <>
            <HeaderManager />
            <SideBar/>

            <hr />

            <div className='bg-bgWhite'>
                <div className='mx-auto w-8/12 pt-28'>
                    <NavLink to='/order' className='text-blue-600 flex'>
                        <FaArrowLeft className="mr-1 mt-1 h-3 w-3" />
                        Pedidos
                    </NavLink>
                    <div className="flex flex-row justify-between">
                        <h2 className="font-bold text-4xl">Pedido #3792389979</h2>
                        <div className="flex items-center">
                            <div className="flex text-blue-800 font-bold ml-4">
                                <AiOutlinePrinter className="mt-1 mr-2" />
                                <p className="hover:underline cursor-pointer">Imprimir entradas</p>
                            </div>
                            <div className="flex text-blue-800 font-bold ml-4">
                                <AiOutlineMail className="mt-1 mr-2" />
                                <p className="hover:underline cursor-pointer">Reenviar informacion</p>
                            </div>
                            <div className="flex text-blue-800 font-bold ml-4">
                                <MdOutlineAttachMoney className="mt-1 mr-2" />
                                <p className="hover:underline cursor-pointer">Reembolso</p>
                            </div>
                        </div>
                    </div>
                    <div className="border shadow-xl mt-10 flex flex-row">
                        <div className="w-1/3">
                            <img src={ event } alt="Event" />
                            <div className="pl-4">
                                <h3 className="font-bold text-xl mt-2">Hackaton</h3>
                                <span className="text-blue-600 hover:underline cursor-pointer">Gestionar evento</span>
                                <div className="flex flex-row mt-2 text-gray-800">
                                    <IoLocation className="mt-1 mr-2 w-5 h-5" />
                                    <p>Evento online</p>
                                </div>
                                <div className="flex flex-row my-4 text-gray-800">
                                    <AiOutlineCalendar className="mt-1 mr-2 w-5 h-5" />
                                    <p>Wed, Jun 15, 2022 7:00 PM - 10:00 PM CST</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 px-8">
                            <h3 className="mt-4 text-xl font-bold">Detalles del pedido</h3>
                            <div className="flex flex-row justify-between mt-4">
                                <div className="w-1/3">
                                    <p className="text-gray-600 font-bold text-sm">Nombre del comprador</p>
                                    <p className="font-semibold">Kessler torres</p>
                                </div>
                                <div className="w-1/3">
                                    <p className="text-gray-600 font-bold text-sm">Total del pedido</p>
                                    <p className="font-semibold">$ 0,00</p>
                                </div>
                                <div className="w-1/3">
                                    <p className="text-gray-600 font-bold text-sm">Detalle de pago</p>
                                    <p className="font-semibold">Pedido gratis</p>
                                </div>
                            </div>
                            <div className="flex flex-row mt-4">
                                <div className="w-1/3">
                                    <p className="text-gray-600 font-bold text-sm">Fecha de compra</p>
                                    <p className="font-semibold">lunes, junio 6º, 2022 3:40 PM CST</p>
                                </div>
                                <div className="w-1/3">
                                    <p className="text-gray-600 font-bold text-sm">Total de entradas</p>
                                    <p className="font-semibold">1 entrada</p>
                                </div>
                            </div>
                            <div className="text-blue-600 flex flex-col mt-6">
                                <p className="hover:underline cursor-pointer h-16 flex items-center">Detalles completos del pedido</p>
                                <hr />
                                <p className="hover:underline cursor-pointer h-16 flex items-center">Añadir nota de pedido</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-row justify-between">
                            <h4 className="text-2xl font-bold">Asistentes</h4>
                            <a href="/" className="text-blue-600 hover:underline cursor-pointer">Ver informe de asistentes</a>
                        </div>
                        <div className="flex flex-row mt-2 border w-1/3 py-2 px-4">
                            <BsSearch className="mt-1 mr-2" />
                            <input 
                                type="text"
                                placeholder="Buscar estado, código de barras, tipo de entrada"
                                className="w-full outline-none text-sm"
                            />
                        </div>
                        <div className="py-3 ml-4 w-full bg-gray-100 pl-8 mt-12 border-b">
                            <div className='flex flex-row justify-between'>
                                <p className="text-sm">Codigo de barras</p>

                                <p className="text-sm">Nombre</p>
                            
                                <p className="text-sm">Tipo de ticket</p>

                                <p className="text-sm">Precio</p>

                                <div className='pl-12'></div>
                            </div>
                        </div>
                        <DataTableView />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderView;
