
export const ModalData = ({modalData}:any) => {

    

    return (
        <div className='flex justify-end m-20'>
            {
                modalData && (
                    <div className="container absolute bg-white -mt-28 shadow-lg border-2 w-auto overflow-x-hidden">
                        <div className="flex-col">
                            <p className="py-4 text-sm px-4 hover:bg-gray-100">Ver pedido</p>
                            <p className="py-4 text-sm px-4 hover:bg-gray-100">Reenviar pedido</p>
                            <p className="py-4 text-sm px-4 hover:bg-gray-100">Reembolso</p>
                            <p className="py-4 text-sm px-4 hover:bg-gray-100">Editar informacion del comprador</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}