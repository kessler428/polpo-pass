import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ModalResendOrder } from "./ModalResendOrder"

export const ModalData = ({modalData}:any) => {

    const [modalResendOrder, setModalResendOrder] = useState(false)

    return (
        <>
            <div className='flex justify-end m-10'>
                {
                    modalData && (
                        <div className="container absolute bg-white -mt-28 shadow-lg border-2 w-auto overflow-x-hidden">
                            <div className="flex-col flex">
                                <NavLink to='/order_view' className="py-4 w-full text-sm px-4 hover:bg-gray-100">
                                    Ver pedido
                                </NavLink>
                                <button onClick={() => setModalResendOrder(!modalResendOrder)} className="py-4 text-sm px-4 text-left hover:bg-gray-100">
                                    Reenviar pedido
                                </button>
                                <NavLink to='/' className="py-4 text-sm px-4 hover:bg-gray-100">
                                    Reembolso
                                </NavLink>
                                <NavLink to='/edit_event/ticketBuyer' className="py-4 text-sm px-4 hover:bg-gray-100">
                                    Editar informacion del comprador
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
            <ModalResendOrder ModalResendOrder={modalResendOrder} setModalResendOrder={setModalResendOrder} />
        </>
    )
}