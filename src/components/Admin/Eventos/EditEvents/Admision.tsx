import { EditEventsCard } from './EditEventsCard'

export const Admision = () => {
  return (
    <div className="flex flex-col justify-between">
        <div>
            <div className="w-full flex justify-end">
                <button className=" bg-bgButton hover:bg-bgButtonHover px-4 py-2 mt-5 rounded text-white font-bold">
                    Añade entradas
                </button>
            </div>
            <EditEventsCard />
        </div>
        <div className='flex justify-end w-8/12 fixed bottom-0 pb-4 border-t-2'>
            <div className='mt-3'>
                <button className='text-white font-bold px-4 py-3 rounded-lg bg-bgButton hover:bg-bgButtonHover mr-8'>Siguiente</button>
            </div>
        </div>

    </div>
  )
}
