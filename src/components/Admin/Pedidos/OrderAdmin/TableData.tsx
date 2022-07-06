import React from 'react'
import { Data } from './Data'

const data = [
    {
        id: '1',
        numberOfOrder: '#3792389979',
        name: 'Hackaton',
        buyer: 'Kessler Torres',
        date: '6 jun., 15:40 CST',
        total: '$0,00'
    },
]

export const TableData = () => {

    const showData = data.map((item) => {
        return  <Data key={item.id} {...item} />
    })

    return (
        <>
            <div className="py-3 ml-4 w-full bg-gray-100 pl-8 mt-12 border-b">
                <div className='flex flex-row justify-between'>
                    <p className="text-sm">Pedido</p>

                    <p className="text-sm">Evento</p>
                
                    <p className="text-sm">Comprador</p>

                    <p className="text-sm">Fecha</p>

                    <p className="text-sm">Total</p>
                    <div className='pl-12'></div>
                </div>
            </div>
            <>
                { showData }
            </>
        </>
    )
}
