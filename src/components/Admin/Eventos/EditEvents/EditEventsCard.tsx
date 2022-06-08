import More from '../../../../assets/More.svg'
import { FaBars } from 'react-icons/fa'

export const EditEventsCard = () => {
  return (
    <div className='flex flex-row justify-around mt-10 hover:shadow-md cursor-pointer h-20 items-center'>
        <div>
            <FaBars />
        </div>
        <div className='flex flex-col'>
            <h3>Ingreso general</h3>
            <span>Finalizacion 23 de abril de 2021 a las 20:00</span>
        </div>
        <div>
            <p>0/100</p>
        </div>
        <div>
            <p>Gratis</p>
        </div>
        <div>
            <img
                className="ml-2 -mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-6 py-4"
                src={More}
                alt="More"
            />
        </div>
    </div>
  )
}
