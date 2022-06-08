import { GiTicket } from "react-icons/gi"

export const PromCod = () => {
    return (
        <div>
            <div className="flex flex-row mt-4">
                <GiTicket className="h-8 w-8 bg-yellow-500 text-gray-700 p-1 rounded-full" />
                <span className="ml-5 mt-1">Para crear códigos promocionales que se apliquen a varios eventos,  visita<a className="text-blue-600" href="/"> Códigos promocionales multievento.</a></span>
            </div>
            <div className='flex flex-col items-center justify-center mt-20'>
                <img
                    className="h-52 rounded-full"
                    src="https://thumbs.dreamstime.com/b/happy-smiling-youn…rtrait-isolated-over-blue-background-94911756.jpg" 
                    alt="tickets" 
                />
                <div className='flex flex-col items-center'>
                    <span className='font-bold text-lg'>Crear un código promocional</span>
                    <p className='w-2/5 text-center'>
                    Usa códigos para ofrecer descuentos exclusivos, ofertas y acceso a tu evento. 
                    Puedes cargar un CSV para importar tus códigos o añadirlos individualmente.
                    </p>
                </div>
                <button className='mt-12 bg-bgButton hover:bg-bgButtonHover px-6 py-3 text-white font-bold rounded-md'>
                    Añadir un codigo
                </button>
                <p>O <a className="text-blue-600" href="/">carga un .CSV</a> con tus codigos</p>
            </div>
        </div>
    )
}
