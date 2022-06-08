import { GiTicket } from "react-icons/gi"

export const Holds = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-20'>
                <div className="bg-gray-200 rounded-full w-36 h-36 flex items-center justify-center">
                    <GiTicket className="h-32 w-32 text-bgButton" />
                </div>
                <div className='flex flex-col items-center mt-8'>
                    <span className='font-bold text-lg'>Todavía no hay retenidos</span>
                    <p className='w-4/6 text-center mt-4'>
                    Para crear entradas retenidas, primero <a className="text-blue-600" href="/">configura la capacidad del evento</a> 
                    </p>
                </div>
            </div>
        </div>
    )
}
