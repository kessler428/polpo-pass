import { useState } from "react";
import More from "../../../assets/More.svg";
import { ModalData } from "./ModalData";

export const data = [
    {
        id: '1',
        numberOfOrder: '#3792389979',
        name: 'Hackaton',
        buyer: 'Kessler Torres',
        date: '6 jun., 15:40 CST',
        total: '$0,00'
    },
    {
        id: '2',
        numberOfOrder: '#3792359421',
        name: 'Hackaton',
        buyer: 'Daniel Calvo',
        date: '6 jun., 15:40 CST',
        total: '$0,00'
    },
    {
        id: '3',
        numberOfOrder: '#3792389979',
        name: 'Hackaton',
        buyer: 'Pedro Flores',
        date: '12 jun., 10:40 CST',
        total: '$0,00'
    },
]

export const Data = () => {

    const [modalData, setModalData] = useState(true);

    return (
        <>
            { 
                data.map( ({id, numberOfOrder, name, buyer, date, total}) => (
                    <div className="py-3 ml-4 w-full pl-8" key={id}>
                        <div className='flex flex-row justify-between'>
                            <p className="text-sm">{ numberOfOrder }</p>

                            <p className="text-sm">{ name }</p>
                        
                            <p className="text-sm">{ buyer }</p>

                            <p className="text-sm">{ date }</p>

                            <p className="text-sm">{ total }</p>
                            <div className='-mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-5 py-3'>
                                <img
                                    className=""
                                    src={More}
                                    alt="More"
                                    onClick={() => {
                                        setModalData(!modalData)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
            <ModalData modalData={modalData}/>
        </>
    )
}
