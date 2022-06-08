import EventCard from './EventCard'

const ShowData = () => {
  return (
    <>
      <div className="py-5 ml-4 w-4/5 bg-gray-100 flex flex-row pl-8 mt-12">
          <div className='w-3/4'>
              <p className=" font-bold">Eventos</p>
          </div>
          <div className='flex-row w-1/2 flex justify-around'>

              <p className=" font-bold">Vendidos</p>
          
              <p className=" font-bold">Bruto</p>

              <p className=" font-bold">Estado</p>
              <div className='pl-12'></div>
          </div>
      </div>
      <div>
        <EventCard />
      </div>
    </>
  )
}

export default ShowData