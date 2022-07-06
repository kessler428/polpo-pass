import { useState } from "react";
import More from "../../../../assets/More.svg";
import { ModalData } from "./ModalData";



export const Data = ({id, numberOfOrder, name, buyer, date, total}) => {

    const [modalData, setModalData] = useState(false);

    return (
        <>
            <div className="py-3 ml-4 w-full pl-8" key={id}>
                <div className='flex flex-row justify-between'>
                    <p className="text-sm">{ numberOfOrder }</p>

                    <p className="text-sm">{ name }</p>
                
                    <p className="text-sm">{ buyer }</p>

                    <p className="text-sm">{ date }</p>

                    <p className="text-sm">{ total }</p>
                    <div
                        onClick={() => {
                            setModalData(!modalData)
                        }}
                        className='-mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-5 py-3'>
                        <img
                            className=""
                            src={More}
                            alt="More"
                            
                        />
                    </div>
                </div>
            </div>
            <ModalData modalData={modalData}/>
        </>
    )
}
